#!/usr/bin/env python3
"""
Startup script for the email server
"""

import os
import sys
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def check_environment():
    """Check if required environment variables are set"""
    required_vars = ['EMAIL_ADDRESS', 'EMAIL_PASSWORD']
    missing_vars = []
    
    for var in required_vars:
        if not os.getenv(var) or os.getenv(var) in ['your-email@gmail.com', 'your-app-password']:
            missing_vars.append(var)
    
    if missing_vars:
        print("❌ Missing or invalid environment variables:")
        for var in missing_vars:
            print(f"   - {var}")
        print("\n📝 Please create a .env file with the following variables:")
        print("   EMAIL_ADDRESS=your-email@gmail.com")
        print("   EMAIL_PASSWORD=your-16-character-app-password")
        print("\n💡 To get a Gmail app password:")
        print("   1. Go to Google Account settings")
        print("   2. Security > 2-Step Verification")
        print("   3. App passwords > Generate new password")
        print("   4. Use the 16-character password (not your regular password)")
        return False
    
    return True

def main():
    """Main function to start the email server"""
    print("🚀 Starting Email Server for Contact Form...")
    
    if not check_environment():
        sys.exit(1)
    
    print("✅ Environment variables are set correctly")
    print("📧 Email will be sent to: info@muntazirmehdi.com")
    print("🌐 Server will be available at: http://localhost:5000")
    print("📋 Health check available at: http://localhost:5000/health")
    print("\n" + "="*50)
    
    # Import and run the Flask app
    from email_server import app
    app.run(host='0.0.0.0', port=5000, debug=True)

if __name__ == '__main__':
    main() 