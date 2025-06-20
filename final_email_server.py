#!/usr/bin/env python3
"""
Final working email server for portfolio contact form
Sends emails to info@muntazirmehdi.com via Gmail SMTP
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Email configuration from environment variables
GMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
GMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
RECIPIENT_EMAIL = "info@muntazirmehdi.com"

def send_email_to_owner(name, email, subject, message):
    """Send email to portfolio owner"""
    try:
        if not GMAIL_ADDRESS or not GMAIL_PASSWORD:
            print("❌ Email credentials not configured. Check .env file.")
            return False
            
        msg = MIMEMultipart()
        msg['From'] = GMAIL_ADDRESS
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"Portfolio Contact: {subject}"
        
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
        
        # Send email via Gmail
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(GMAIL_ADDRESS, GMAIL_PASSWORD)
        server.sendmail(GMAIL_ADDRESS, RECIPIENT_EMAIL, msg.as_string())
        server.quit()
        
        return True
        
    except Exception as e:
        print(f"Email sending failed: {e}")
        return False

@app.route('/send-email', methods=['POST', 'OPTIONS'])
def handle_contact():
    """Handle contact form submissions"""
    if request.method == 'OPTIONS':
        return '', 200
        
    try:
        data = request.get_json()
        
        # Validate data
        if not data or not all(k in data for k in ['name', 'email', 'subject', 'message']):
            return jsonify({'success': False, 'error': 'Missing required fields'}), 400
            
        name = data['name'].strip()
        email = data['email'].strip()
        subject = data['subject'].strip()
        message = data['message'].strip()
        
        if not name or not email or not subject or not message:
            return jsonify({'success': False, 'error': 'All fields are required'}), 400
            
        if '@' not in email:
            return jsonify({'success': False, 'error': 'Invalid email address'}), 400
        
        # Send email
        if send_email_to_owner(name, email, subject, message):
            print(f"✅ Email sent successfully from {email}")
            return jsonify({'success': True, 'message': 'Email sent successfully'})
        else:
            return jsonify({'success': False, 'error': 'Failed to send email'}), 500
            
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'success': False, 'error': 'Server error'}), 500

@app.route('/health', methods=['GET'])
def health():
    """Health check"""
    return jsonify({'status': 'healthy', 'service': 'Portfolio Email Server'})

@app.route('/', methods=['GET'])
def home():
    """Server info"""
    return jsonify({
        'service': 'Portfolio Email Server',
        'status': 'running',
        'recipient': RECIPIENT_EMAIL,
        'provider': 'Gmail SMTP',
        'configured': bool(GMAIL_ADDRESS and GMAIL_PASSWORD)
    })

if __name__ == '__main__':
    print("🚀 Portfolio Email Server")
    print(f"📧 Emails will be sent to: {RECIPIENT_EMAIL}")
    
    if GMAIL_ADDRESS and GMAIL_PASSWORD:
        print(f"🔗 Via Gmail: {GMAIL_ADDRESS}")
        print("✅ Email credentials configured")
    else:
        print("❌ Email credentials missing! Check .env file")
        print("   Required: EMAIL_ADDRESS and EMAIL_PASSWORD")
    
    print(f"🌐 Server: http://localhost:5000")
    print("📬 Ready to receive contact form submissions!")
    print("="*60)
    
    # Run without debug mode to avoid issues
    app.run(host='0.0.0.0', port=5000, debug=False) 