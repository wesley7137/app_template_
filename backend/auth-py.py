from functools import wraps
import jwt
from flask import request, jsonify, current_app
from database import mongo

def create_token(user_id):
    return jwt.encode({'user_id': str(user_id)}, current_app.config['SECRET_KEY'], algorithm='HS256')

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = mongo.db.users.find_one({'_id': data['user_id']})
        except:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated
