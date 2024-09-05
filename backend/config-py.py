import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'your-secret-key'
    MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/myapp'
    STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY') or 'your-stripe-secret-key'
