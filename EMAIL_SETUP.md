# Email Contact Form Setup Guide

This guide will help you set up the operational contact form that automatically sends emails to `info@muntazirmehdi.com` using your custom domain email.

## 📋 Prerequisites

- Python 3.7 or higher
- Access to your custom domain email account
- Email provider credentials (iCloud, custom SMTP, etc.)

## 🚀 Quick Setup

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure Your Email Provider

Since you're using a custom domain email through Cloudflare with iCloud, you have several options:

#### Option A: iCloud Mail (Recommended for your setup)
```env
EMAIL_PROVIDER=icloud
EMAIL_ADDRESS=your-name@muntazirmehdi.com
EMAIL_PASSWORD=your-icloud-app-password
```

#### Option B: Custom SMTP Server
```env
EMAIL_PROVIDER=custom
EMAIL_ADDRESS=your-name@muntazirmehdi.com
EMAIL_PASSWORD=your-email-password
SMTP_SERVER=mail.muntazirmehdi.com
SMTP_PORT=587
SMTP_USE_TLS=true
```

#### Option C: Other Providers
```env
# For Gmail (if you prefer)
EMAIL_PROVIDER=gmail
EMAIL_ADDRESS=your-backup@gmail.com
EMAIL_PASSWORD=your-gmail-app-password

# For Outlook
EMAIL_PROVIDER=outlook
EMAIL_ADDRESS=your-name@outlook.com
EMAIL_PASSWORD=your-outlook-password
```

### 3. Create Environment File

Create a `.env` file in the root directory with your chosen configuration:

```env
# For iCloud with custom domain (most likely for your setup)
EMAIL_PROVIDER=icloud
EMAIL_ADDRESS=muntazir@muntazirmehdi.com
EMAIL_PASSWORD=your-icloud-app-password
```

**Getting iCloud App Password:**
1. Go to [appleid.apple.com](https://appleid.apple.com)
2. Sign in and go to "Security" section
3. Generate an App-Specific Password
4. Use this password in your `.env` file

### 4. Start the Email Server

```bash
python start_email_server.py
```

### 5. Test Configuration

Visit `http://localhost:5000/test-config` to verify your setup.

## 🔧 How It Works

### Email Flow
1. User fills out the contact form on your website
2. Frontend sends form data to `http://localhost:5000/send-email`
3. Python Flask server receives the data
4. Server formats and sends email via your configured SMTP provider
5. Email is delivered to `info@muntazirmehdi.com`
6. User receives success/error notification

### Supported Email Providers

| Provider | SMTP Server | Port | TLS | Notes |
|----------|------------|------|-----|-------|
| **iCloud** | smtp.mail.me.com | 587 | ✅ | Best for custom domains via iCloud |
| **Custom** | Your SMTP server | 587/465 | ✅ | Direct domain SMTP |
| **Gmail** | smtp.gmail.com | 587 | ✅ | Backup option |
| **Outlook** | smtp-mail.outlook.com | 587 | ✅ | Alternative provider |

## 🌐 API Endpoints

### POST `/send-email`
Sends an email with the contact form data.

### GET `/health`
Health check with configuration details:
```json
{
  "status": "healthy",
  "email_provider": "icloud",
  "smtp_server": "smtp.mail.me.com",
  "smtp_port": 587,
  "recipient": "info@muntazirmehdi.com"
}
```

### GET `/test-config`
Detailed configuration test:
```json
{
  "provider": "icloud",
  "description": "iCloud Mail",
  "server": "smtp.mail.me.com",
  "port": 587,
  "tls_enabled": true,
  "from_email": "muntazir@muntazirmehdi.com",
  "to_email": "info@muntazirmehdi.com",
  "configured": true
}
```

## 🔒 Security Features

- **Multiple Provider Support**: Works with any SMTP provider
- **Secure Authentication**: Uses app-specific passwords where available
- **TLS Encryption**: Secure email transmission
- **Input Validation**: Comprehensive form validation
- **Error Handling**: Detailed logging and error reporting

## 🐛 Troubleshooting

### Common Issues

1. **"Authentication failed" error**
   - For iCloud: Use app-specific password, not your regular iCloud password
   - Verify EMAIL_ADDRESS and EMAIL_PASSWORD are correct
   - Check if 2FA is enabled and app password is generated

2. **"Connection refused" error**
   - Verify SMTP server settings for your provider
   - Check if your email provider allows SMTP access
   - Ensure correct port and TLS settings

3. **"Custom domain not working"**
   - Check your domain's SMTP settings with your provider (Cloudflare)
   - Verify MX records are properly configured
   - Test with iCloud SMTP first, then try custom SMTP

4. **Form submission fails**
   - Check browser console for errors
   - Test configuration: `http://localhost:5000/test-config`
   - Verify Python server is running: `http://localhost:5000/health`

### Custom Domain with Cloudflare + iCloud

Since you're using Cloudflare with iCloud subscription:

1. **Use iCloud SMTP** (recommended):
   ```env
   EMAIL_PROVIDER=icloud
   EMAIL_ADDRESS=your-name@muntazirmehdi.com
   EMAIL_PASSWORD=app-specific-password
   ```

2. **Check your domain's email routing** in Cloudflare dashboard
3. **Verify email forwarding** is set up correctly
4. **Test with a simple email** first to ensure your setup works

## 📝 Email Format

Emails sent will have a professional format:
```
Subject: Portfolio Contact: [User's Subject]
From: your-configured-email@muntazirmehdi.com
To: info@muntazirmehdi.com

═══════════════════════════════════════════
📝 CONTACT DETAILS
═══════════════════════════════════════════

👤 Name: [User's Name]
📧 Email: [User's Email]
📋 Subject: [User's Subject]

💬 MESSAGE:
[User's Message]

═══════════════════════════════════════════
🕐 Submitted: 2024-01-15 at 14:30:25
🌐 Source: Portfolio Website Contact Form
═══════════════════════════════════════════

Reply directly to this email to respond to [User's Name].
```

## 🎯 Next Steps for Production

1. **Deploy the Python server** to your preferred hosting service
2. **Update frontend API URL** to production endpoint
3. **Configure production environment variables**
4. **Set up monitoring** for email delivery
5. **Implement rate limiting** for spam protection

---

**Note**: Since you're using a custom domain with Cloudflare and iCloud, the iCloud SMTP option is likely your best choice. This avoids needing Gmail credentials while using your existing email infrastructure. 