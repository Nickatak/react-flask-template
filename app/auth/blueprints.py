"""Auth routes."""
from flask import Blueprint

auth_bp = Blueprint('auth', __name__, url_prefix='/')

@auth_bp.route('/obtain')
def obtain_pair():
    pass

@auth_bp.route('/refresh')
def refresh_pair():
    pass
