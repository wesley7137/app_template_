from flask import Flask
from flask_cors import CORS
from config import initialize_models_and_keys
from database import db
from utils.logger import setup_logger
from flask_caching import Cache
import firebase_admin
from firebase_admin import credentials, firestore, storage

# Import view functions from route files
from routes.signin import signin
from routes.signup import signup
from routes.stripe_payment import process_payment
from routes.dashboard import get_dashboard_data

# Initialize Firebase
if not firebase_admin._apps:
    cred = credentials.Certificate('firebase_admin_sdk.json')
    firebase_admin.initialize_app(cred, {
        'storageBucket': 'gs://your-project-id.appspot.com'
    })

db = firestore.client()
bucket = storage.bucket()

logger = setup_logger(__name__)
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": {"http://localhost:3000", "http://localhost:3001"}}})
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

# Add URL rules
app.add_url_rule('/signin', view_func=signin, methods=['POST', 'OPTIONS'])
app.add_url_rule('/signup', view_func=signup, methods=['POST', 'OPTIONS'])
app.add_url_rule('/process_payment', view_func=process_payment, methods=['POST'])
app.add_url_rule('/dashboard', view_func=get_dashboard_data, methods=['GET'])

# Flag to ensure initialization runs only once
initialized = False

@app.before_request
def before_request():
    global initialized
    if not initialized:
        initialize_models_and_keys()
        initialized = True

@app.route('/health', methods=['GET'])
def health_check():
    logger.info("Health check performed.")
    return "Server is running...", 200

if __name__ == "__main__":
    logger.info("Starting the server")
    app.run(host="0.0.0.0", port=5000, debug=True)
