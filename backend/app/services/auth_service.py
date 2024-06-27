from app.models.user import User
from app import db
from werkzeug.security import generate_password_hash

def register_user(username, email, password):
    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return None

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return user

def authenticate_user(email, password):
    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        return user
    return None
