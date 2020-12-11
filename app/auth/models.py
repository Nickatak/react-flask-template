"""Authentication models."""

from flask import abort

from app import db


class User(db.Model):
    """
    Custom User model.

    Attributes:
        name (string): Display name of a user with a 50 char max.
        username (string): User handle (EG: @user123) with a 15 char limit.
        id (int): User identification number.
        phone (string): User phone number with a 30 char maxiumum.
        email (string): Email of a user with a 100 char limit.
        password (string): User password with 256 char limit.


    """
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    # This is the "display name."
    name = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True)

    # ALthough things like SHA512 use 128 chars, and Bcrypt uses somewhere
    # about 64 (max) chars depending upon implementation, I figured we'd be
    # safer by just having a larger storage container for future hash
    # implementations.
    password = db.Column(db.String(256))
