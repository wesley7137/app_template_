from flask import Blueprint, jsonify
from database import mongo
from utils.auth import token_required

dashboard_route = Blueprint('dashboard', __name__)

@dashboard_route.route('/api/dashboard', methods=['GET'])
@token_required
def dashboard(current_user):
    user_data = mongo.db.users.find_one({'_id': current_user['_id']})
    return jsonify({
        'username': user_data['username'],
        'email': user_data['email']
    }), 200
