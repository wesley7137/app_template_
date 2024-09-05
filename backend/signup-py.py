from flask import Blueprint, request, jsonify
from database import mongo
from models import User

signup_route = Blueprint('signup', __name__)

@signup_route.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    
    if mongo.db.users.find_one({'email': data['email']}):
        return jsonify({'message': 'Email already exists'}), 400
    
    new_user = User(data['username'], data['email'], data['password'])
    mongo.db.users.insert_one(new_user.to_dict())
    
    return jsonify({'message': 'User created successfully'}), 201
