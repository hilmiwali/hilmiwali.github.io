# Hilmi Wali - Portfolio Website

Portfolio website built with Angular 20 and standalone components.

## 🌐 Live Site
**https://hilmiwali.github.io/**

## 🛠️ Tech Stack
- **Angular 20** - Standalone components
- **TypeScript** - Type-safe code
- **SCSS** - Modern styling
- **EmailJS** - Contact form functionality
- **Font Awesome** - Icons
- **GitHub Pages** - Hosting

## ✨ Features
- 📱 Fully responsive design (desktop & mobile)
- 🌙 Dark mode theme with orange/yellow accents
- 📧 Working contact form with EmailJS
- 🗂️ Multi-page architecture with sidebar navigation
- 📄 8 Sections: Home, Skills, Education, Experience, Projects, Certifications, Competitions, Contact
- 🎨 Modern UI with smooth transitions
- 📱 Mobile-friendly hamburger menu

## � Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm (v11 or higher)

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any source files.

### Build for Production
```bash
npm run build
```
Build artifacts will be stored in the `docs/` directory.

### Deploy to GitHub Pages
```bash
npm run deploy
```
This command will:
1. Build the Angular application in production mode
2. Automatically move files from `docs/browser/` to `docs/` root
3. Prepare files for GitHub Pages deployment

After running the deploy script, commit and push:
```bash
git add .
git commit -m "Deploy updates"
git push origin main
```

**Note:** Angular 20's build system automatically creates a `browser` subfolder. The deploy script handles moving files to the correct location for GitHub Pages (which serves from `/docs` root).

## �📝 Content Updates

### Update Resume
Replace `public/hilmi_resume.pdf` with your latest resume.

### Update Profile Picture
Replace `public/image.jpg` with your photo.

### Update Contact Information
Edit `src/app/components/contact/contact.ts` and environment files.

### Update Social Links
Edit `src/app/components/sidebar/sidebar.html` to update GitHub, LinkedIn, and email links.

## 🌟 Credits
Developed by Hilmi Wali  
📧 hilmiwali7702@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/hilmi-wali)  
💻 [GitHub](https://github.com/hilmiwali)

## 📄 License
This project is open source and available for personal use.

---

**Note:** The old vanilla JS version is backed up in the `backup-vanilla-site` branch.
