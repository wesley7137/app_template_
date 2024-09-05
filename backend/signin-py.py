import uuid
from flask import request, jsonify
from database import users
from utils.logger import setup_logger
from werkzeug.security import check_password_hash
from datetime import datetime, timedelta

logger = setup_logger(__name__)

ACCESS_TOKEN_EXPIRE_MINUTES = 60

def signin():
    try:
        # Handle OPTIONS request
        if request.method == 'OPTIONS':
            return '', 200
        
        # Handle POST request
        if request.method == 'POST':
            data = request.json
            logger.info(f"Login attempt data: {data}")
            
            email = data.get('email')
            password = data.get('password')
            
            if not email or not password:
                logger.warning("Login attempt with missing email or password")
                return jsonify({"error": "Email and password are required"}), 422
            
            user = users.find_one({"email": email})
            if not user or not check_password_hash(user['password'], password):
                logger.warning(f"Failed login attempt for user: {email}")
                return jsonify({"error": "Incorrect email or password"}), 401
            
            # Generate a new access token using uuid
            access_token = str(uuid.uuid4())
            access_token_expires = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
            
            # Update the user record with the new access token and expiration time
            users.update_one(
                {"_id": user['_id']},
                {"$set": {
                    "access_token": access_token,
                    "token_expires_at": access_token_expires
                }}
            )
            
            logger.info(f"Successful login for user: {email}")
            return jsonify({
                "access_token": access_token,
                "user_id": str(user['_id']),
                "email": user['email'],
                "api_key": user.get('api_key', '')  # Include API key if it exists
            }), 200
    except Exception as e:
        logger.error(f"Unexpected error during login: {str(e)}")
        return jsonify({"error": "An unexpected error occurred during login"}), 500
