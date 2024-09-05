from pymongo import MongoClient
from pymongo.server_api import ServerApi
import logging
import os
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger('pymongo')
logger.setLevel(logging.INFO)

uri = os.environ.get('MONGO_URI')
if not uri:
    raise ValueError("MONGO_URI not found in environment variables")

client = MongoClient(uri, compressors='zlib', server_api=ServerApi('1'),
                     connectTimeoutMS=30000,
                     socketTimeoutMS=None,
                     connect=False,
                     maxPoolSize=1)

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')
    logger.info("Successfully connected to MongoDB!")
except Exception as e:
    logger.error(f"Error connecting to MongoDB: {e}")
    raise

# Access collections
db = client['your_database_name']
users = db['users']
