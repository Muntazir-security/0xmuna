# Muntazir Mehdi - Professional Portfolio

A modern, responsive portfolio website showcasing cybersecurity expertise, professional experience, and technical skills. Built with cutting-edge web technologies and featuring a sleek, professional design.

![Portfolio Preview](public/assets/images/Main%20Logo.svg)

## 🌟 Features

### Modern Design & User Experience
- **Clean, Professional Interface**: Minimalist design with subtle animations and smooth transitions
- **Responsive Layout**: Optimized for all devices - desktop, tablet, and mobile
- **Dark Theme**: Elegant dark theme with carefully chosen color palette
- **Smooth Navigation**: Seamless single-page application with intuitive navigation

### Interactive Sections
- **Hero Section**: Professional introduction with TryHackMe profile integration
- **About**: Comprehensive background with educational timeline and career highlights
- **Portfolio**: Showcase of cybersecurity projects with detailed case studies
- **Contact**: Professional contact form with direct email integration

### Technical Highlights
- **Modern Tech Stack**: Built with React, TypeScript, and Vite for optimal performance
- **Component Architecture**: Modular design using shadcn/ui components
- **Responsive Design**: Tailwind CSS for mobile-first responsive design
- **Performance Optimized**: Fast loading times and smooth animations

## 🚀 Live Demo

**Portfolio URL**: [muntazirmehdi.com](https://muntazirmehdi.com)

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon library

### Backend (Contact Form)
- **Python Flask** - Email server for contact form
- **SMTP Integration** - Professional email handling
- **CORS Support** - Cross-origin request handling

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Bun** - Fast package manager and runtime

## 📋 Project Structure

```
0xmuna/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Landing section with intro
│   │   ├── About.tsx         # Professional background
│   │   ├── Portfolio.tsx     # Projects showcase
│   │   ├── Contact.tsx       # Contact form
│   │   └── ui/              # Reusable UI components
│   ├── pages/
│   │   ├── Index.tsx         # Main portfolio page
│   │   └── ProjectDetail.tsx # Individual project pages
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   └── assets/
│       ├── images/           # Professional images & logos
│       └── documents/        # Resume and certificates
└── email_server.py          # Contact form backend
```

## 🏆 Professional Highlights

### Cybersecurity Expertise
- **Penetration Testing**: OSCP, eJPT certified
- **Security Operations**: SOC Analyst expertise
- **Cloud Security**: AWS, Azure certifications
- **Network Security**: Fortinet, Snort, Suricata

### Certifications Featured
- OSCP (Offensive Security Certified Professional)
- eJPT (eLearnSecurity Junior Penetration Tester)
- Google Cybersecurity Professional Certificate
- AWS Solutions Architect
- Red Hat System Administrator (RHCSA)

### Technical Skills Showcase
- **Security Tools**: Burp Suite, Nessus, Wazuh, TheHive
- **Cloud Platforms**: AWS, Azure, Kubernetes
- **Operating Systems**: Arch Linux, Ubuntu, Red Hat
- **Containerization**: Docker, Portainer
- **SIEM/SOAR**: Splunk, Elastic Stack

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm))
- Python 3.8+ (for email server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muntazirmehdi/0xmuna.git
   cd 0xmuna
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies** (optional, for contact form)
   ```bash
   pip install -r requirements.txt
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Run email server** (optional)
   ```bash
   python email_server.py
   ```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Philosophy

### Modern & Professional
- Clean, minimalist design that focuses on content
- Subtle animations that enhance user experience without distraction
- Professional color scheme suitable for cybersecurity industry

### Performance First
- Optimized bundle size and loading times
- Efficient component rendering and state management
- Mobile-first responsive design approach

### Accessibility & UX
- High contrast ratios for better readability
- Keyboard navigation support
- Screen reader friendly markup

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Touch-friendly interface with adapted layouts
- **Mobile**: Streamlined navigation and optimized content flow

## 🔧 Customization

### Updating Content
- **Personal Info**: Edit `src/components/Hero.tsx` and `src/components/About.tsx`
- **Projects**: Update `src/components/Portfolio.tsx` with your projects
- **Images**: Replace files in `public/assets/images/`
- **Resume**: Update `public/assets/documents/Muntazir Mehdi CV.pdf`

### Styling
- **Colors**: Modify Tailwind config in `tailwind.config.ts`
- **Components**: Customize UI components in `src/components/ui/`
- **Animations**: Adjust transitions and effects in component files

## 📞 Contact & Professional Links

- **Email**: info@muntazirmehdi.com
- **LinkedIn**: [Muntazir Mehdi](https://linkedin.com/in/muntazirmehdi)
- **GitHub**: [0xMuna](https://github.com/muntazirmehdi)
- **TryHackMe**: Active contributor and learner

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with passion for cybersecurity and modern web development. Showcasing the intersection of security expertise and technical innovation.*
