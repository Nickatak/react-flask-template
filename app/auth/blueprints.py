"""Auth routes."""
from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_raw_jwt, jwt_required, jwt_refresh_token_required, create_access_token, create_refresh_token, get_jwt_identity, verify_jwt_in_request

from app import jwt

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')


@auth_bp.route('/obtain', methods=['POST'])
def obtain_pair():
    # Default expiration time for JWT's is 15m with jwt-flask-extended
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    if username == 'asdf':
        return jsonify({
                        'ok' : True,
                        'access' : create_access_token(identity=20),
                        'refresh' : create_refresh_token(identity=20)
                        })
    else:
        return jsonify({}), 401

@auth_bp.route('/refresh')
@jwt_refresh_token_required
def refresh_pair():
    pass


@auth_bp.route('/protected')
@jwt_required
def protected():
    print("PROTECTED ROUTE ACCESSED BY USER WITH ID OF {}".format(get_jwt_identity()))
    return jsonify({'working' : 'ok'})
