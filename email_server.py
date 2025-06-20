#!/usr/bin/env python3
"""
Email Server for Contact Form
Handles form submissions and sends emails to info@muntazirmehdi.com
Supports multiple email providers including custom domains
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime
import logging
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

# Email configuration - supports multiple providers
EMAIL_PROVIDER = os.getenv("EMAIL_PROVIDER", "icloud")  # icloud, gmail, custom
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS", "your-email@muntazirmehdi.com")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD", "your-app-password")
RECIPIENT_EMAIL = "info@muntazirmehdi.com"

# SMTP configurations for different providers
SMTP_CONFIGS = {
    "icloud": {
        "server": "smtp.mail.me.com",
        "port": 587,
        "use_tls": True,
        "description": "iCloud Mail"
    },
    "gmail": {
        "server": "smtp.gmail.com",
        "port": 587,
        "use_tls": True,
        "description": "Gmail"
    },
    "outlook": {
        "server": "smtp-mail.outlook.com",
        "port": 587,
        "use_tls": True,
        "description": "Outlook/Hotmail"
    },
    "custom": {
        "server": os.getenv("SMTP_SERVER", "mail.muntazirmehdi.com"),
        "port": int(os.getenv("SMTP_PORT", "587")),
        "use_tls": os.getenv("SMTP_USE_TLS", "true").lower() == "true",
        "description": "Custom SMTP"
    }
}

def get_smtp_config():
    """Get SMTP configuration based on provider"""
    return SMTP_CONFIGS.get(EMAIL_PROVIDER, SMTP_CONFIGS["custom"])

def send_email(name, email, subject, message):
    """
    Send email using configured SMTP provider
    """
    try:
        smtp_config = get_smtp_config()
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"Portfolio Contact: {subject}"
        
        # Email body with better formatting
        email_body = f"""
New contact form submission from your portfolio website:

═══════════════════════════════════════════
📝 CONTACT DETAILS
═══════════════════════════════════════════

👤 Name: {name}
📧 Email: {email}
📋 Subject: {subject}

💬 MESSAGE:
{message}

═══════════════════════════════════════════
🕐 Submitted: {datetime.now().strftime('%Y-%m-%d at %H:%M:%S')}
🌐 Source: Portfolio Website Contact Form
═══════════════════════════════════════════

Reply directly to this email to respond to {name}.
        """
        
        msg.attach(MIMEText(email_body, 'plain'))
        
        # Create SMTP session
        server = smtplib.SMTP(smtp_config["server"], smtp_config["port"])
        
        if smtp_config["use_tls"]:
            server.starttls()  # Enable security
        
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        
        # Send email
        text = msg.as_string()
        server.sendmail(EMAIL_ADDRESS, RECIPIENT_EMAIL, text)
        server.quit()
        
        logger.info(f"Email sent successfully from {email} via {smtp_config['description']}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email via {smtp_config['description']}: {str(e)}")
        return False

@app.route('/send-email', methods=['POST'])
def handle_contact_form():
    """
    Handle contact form submission
    """
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        name = data['name'].strip()
        email = data['email'].strip()
        subject = data['subject'].strip()
        message = data['message'].strip()
        
        # Basic email validation
        if '@' not in email or '.' not in email:
            return jsonify({
                'success': False,
                'error': 'Invalid email address'
            }), 400
        
        # Send email
        if send_email(name, email, subject, message):
            return jsonify({
                'success': True,
                'message': 'Email sent successfully'
            })
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to send email. Please check server configuration.'
            }), 500
            
    except Exception as e:
        logger.error(f"Error handling contact form: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'Internal server error'
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    """
    Health check endpoint with configuration info
    """
    smtp_config = get_smtp_config()
    return jsonify({
        'status': 'healthy',
        'email_provider': EMAIL_PROVIDER,
        'smtp_server': smtp_config['server'],
        'smtp_port': smtp_config['port'],
        'recipient': RECIPIENT_EMAIL
    })

@app.route('/test-config', methods=['GET'])
def test_config():
    """
    Test endpoint to verify email configuration
    """
    smtp_config = get_smtp_config()
    return jsonify({
        'provider': EMAIL_PROVIDER,
        'description': smtp_config['description'],
        'server': smtp_config['server'],
        'port': smtp_config['port'],
        'tls_enabled': smtp_config['use_tls'],
        'from_email': EMAIL_ADDRESS,
        'to_email': RECIPIENT_EMAIL,
        'configured': EMAIL_ADDRESS != "your-email@muntazirmehdi.com"
    })

if __name__ == '__main__':
    # Display configuration info
    smtp_config = get_smtp_config()
    print(f"🚀 Email Server Starting...")
    print(f"📧 Provider: {smtp_config['description']}")
    print(f"🌐 SMTP: {smtp_config['server']}:{smtp_config['port']}")
    print(f"📤 From: {EMAIL_ADDRESS}")
    print(f"📥 To: {RECIPIENT_EMAIL}")
    
    if EMAIL_ADDRESS == "your-email@muntazirmehdi.com":
        print("⚠️  WARNING: Please configure EMAIL_ADDRESS in .env file")
    if EMAIL_PASSWORD == "your-app-password":
        print("⚠️  WARNING: Please configure EMAIL_PASSWORD in .env file")
    
    app.run(host='0.0.0.0', port=5000, debug=True) 