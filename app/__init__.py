from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

from config import DevConfig

db = SQLAlchemy()
jwt = JWTManager()

def create_app(conf_obj=DevConfig):
    app = Flask(__name__,
                instance_relative_config=False,
                template_folder=DevConfig.TEMPLATE_DIR,
                static_folder=str(DevConfig.STATIC_DIR)
                )
    app.config.from_object(conf_obj)

    # Initialize application context to "globals".
    # r.init_app(app)
    db.init_app(app)
    jwt.init_app(app)

    # Register blueprints.
    from app import auth
    from app import serve_react
    app.register_blueprint(auth.auth_bp)

    # Serve react with any other non-matching route.
    app.add_url_rule('/', 'react', serve_react.serve_react)
    app.add_url_rule('/*', 'react', serve_react.serve_react)

    with app.app_context():
        if app.config['TESTING']:
            db.drop_all()
        # Create all models.
        db.create_all()

    return app
