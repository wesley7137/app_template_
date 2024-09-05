from flask import Blueprint, request, jsonify
import stripe
from config import Config

stripe.api_key = Config.STRIPE_SECRET_KEY

stripe_payment_route = Blueprint('stripe_payment', __name__)

@stripe_payment_route.route('/api/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        data = request.get_json()
        intent = stripe.PaymentIntent.create(
            amount=data['amount'],
            currency='usd',
            payment_method_types=['card'],
        )
        return jsonify({
            'clientSecret': intent.client_secret
        })
    except Exception as e:
        return jsonify(error=str(e)), 403
