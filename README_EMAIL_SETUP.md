# 📧 Portfolio Contact Form Email Setup

This guide explains how to set up the email server for your portfolio contact form securely.

## 🔒 Security Notice

**IMPORTANT:** Never commit email credentials to GitHub! This setup uses environment variables to keep your credentials safe.

## 📋 Prerequisites

1. Gmail account with 2FA enabled
2. Gmail App Password generated
3. Python with required packages installed

## 🛠️ Setup Instructions

### Step 1: Install Dependencies

```bash
# Install Python packages (Arch Linux)
sudo pacman -S python-flask python-flask-cors python-dotenv

# Or using pip (if using virtual environment)
pip install flask flask-cors python-dotenv
```

### Step 2: Create Environment File

Create a `.env` file in your project root:

```bash
# Create .env file (this file is ignored by Git)
touch .env
```

Add your email configuration to `.env`:

```env
# Email Configuration for Contact Form
EMAIL_PROVIDER=gmail
EMAIL_ADDRESS=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-digit-app-password
```

### Step 3: Generate Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. At the bottom, select "App passwords"
4. Select "Mail" and your device
5. Copy the 16-digit password (no spaces)
6. Use this password in your `.env` file

### Step 4: Test the Setup

```bash
# Start the email server
python3 final_email_server.py

# Test with curl
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Testing"}' \
  http://localhost:5000/send-email
```

## 📁 File Structure

```
your-project/
├── final_email_server.py    # Main email server
├── .env                     # Email credentials (NOT in Git)
├── .gitignore              # Protects .env from Git
└── README_EMAIL_SETUP.md   # This guide
```

## 🚀 Running the Server

```bash
# Start the server
python3 final_email_server.py

# Server will be available at:
# http://localhost:5000
```

## 🔧 Frontend Integration

Update your contact form to send POST requests to:

```javascript
const response = await fetch('http://localhost:5000/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  }),
});
```

## ✅ Security Best Practices

1. ✅ `.env` file is in `.gitignore`
2. ✅ No hardcoded credentials in source code
3. ✅ Using Gmail App Password (not main password)
4. ✅ CORS enabled for frontend integration
5. ✅ Input validation on all form fields

## 🆘 Troubleshooting

### Email not sending?
- Check your `.env` file has correct credentials
- Verify Gmail App Password is correct (16 digits, no spaces)
- Ensure 2FA is enabled on your Gmail account

### Server not starting?
- Check if port 5000 is already in use: `lsof -i :5000`
- Kill existing processes: `pkill -f python3`
- Check for syntax errors in Python files

### CORS errors?
- Ensure Flask-CORS is installed
- Check your frontend is sending proper headers

## 📞 Support

If you encounter issues:
1. Check the server logs for error messages
2. Verify your `.env` file configuration
3. Test email sending with the simple test script first 