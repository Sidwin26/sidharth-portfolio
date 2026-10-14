# Muhammed Faizal - Personal Portfolio Website

A modern, responsive, and professional personal portfolio website designed for a **Flutter Developer & Software Engineer**. Built using **HTML5**, **CSS3**, **Bootstrap 5**, and vanilla **JavaScript**.

---

## 🚀 Live Preview & How to Run

You do not need to install complex Node.js dependencies to run this website. It is 100% client-side and can be run using any of the following methods:

### Method 1: Double Click (Simplest)
1. Open your file explorer and navigate to:
   ```
   c:\Users\sidhu_26\Documents\portfolio
   ```
2. Double click `index.html` to open it in Google Chrome, Edge, Brave, or Firefox.

### Method 2: VS Code / Antigravity IDE Live Server
1. If you have the **Live Server** extension installed in VS Code / Antigravity IDE:
2. Right-click `index.html` and select **"Open with Live Server"**.
3. The site will launch automatically at `http://127.0.0.1:5500`.

### Method 3: Using Python Built-in HTTP Server
1. Open PowerShell or Terminal in the `portfolio` folder:
   ```powershell
   python -m http.server 8000
   ```
2. Open your web browser and go to:
   ```
   http://localhost:8000
   ```

---

## 📁 Project Structure

```text
portfolio/
├── index.html            # Main semantic HTML5 markup & Bootstrap layout
├── style.css             # Custom CSS styling, dark theme tokens & animations
├── script.js             # JavaScript for interactions, typing effect & validation
├── README.md             # Documentation, running instructions & workshop guide
└── assets/
    └── images/
        ├── profile.jpg           # Muhammed Faizal's profile picture
        ├── project-lms.jpg       # Softroniics Learning Management System preview
        ├── project-autoresq.jpg  # AutoResq Mechanic Assistance App preview
        └── project-blessing.jpg  # Blessing Islamic Tracker preview
```

---

## ✨ Features & Highlights

- **Aesthetic Cyber Dark Theme**: Sleek deep dark background (`#07090e`) with electric purple and cyan glow gradients.
- **Bootstrap 5 CDN**: Fast CDN integration for the responsive grid, navigation bar, and utility classes.
- **Hero Section**: 
  - Monogram brand badge (`MF`)
  - Dynamic typed role rotating text (`FLUTTER DEVELOPER`, `MOBILE APP SPECIALIST`, etc.)
  - Highlighting floating badges for Flutter, Dart, and Clean Architecture
  - Quick action CTA buttons & social links
- **About Me**:
  - Professional bio, career aspirations, and core competence highlights (Cross-platform, 60 FPS performance, State management, API integration).
  - Quick summary specs card.
- **Skills Grid**:
  - Interactive skill cards with customized brand icons (Flutter, Dart, HTML5, CSS3, JavaScript, Bootstrap 5, Python, Git).
  - Animated proficiency indicators and extra tech badges (Firebase, REST APIs, Hive/SQLite, Bloc).
- **Featured Projects**:
  - **LMS - Softroniics Learning Management System** (EdTech)
  - **AutoResq - Mechanic Assistance App** (On-Demand Roadside SOS)
  - **Blessing - Islamic Tracker** (Prayer Times & Quran companion)
  - Card hover zooms, category pill badges, tech stack tags, and GitHub/Demo links.
- **Education Timeline**:
  - Vertical visual timeline highlighting Flutter certifications, BSc Computer Science degree, and secondary education.
- **Interactive Contact Section**:
  - Direct contact cards (Email, WhatsApp/Phone, Location).
  - Clean input form with client-side JavaScript validation (Name, valid Email, Message).
  - Informative workshop banner explaining how to connect static forms to free backend services.
- **Mobile Responsive**: Tested across smartphones, tablets, and wide desktop screens. Includes auto-collapsing mobile hamburger menu.
- **Back to Top Button**: Floating smooth-scroll button that triggers automatically when scrolling down.

---

## 🛠️ Beginner Customization Guide (Workshop Ready)

### 1. Changing Your Personal Details
Open `index.html` and search for:
- `MUHAMMED FAIZAL` &rarr; Replace with your full name.
- `faizal.dev@example.com` &rarr; Replace with your actual email address.
- `+91 98765 43210` &rarr; Replace with your phone number.

### 2. Updating Profile & Project Images
To use your own photos:
1. Place your images inside the `assets/images/` directory.
2. In `index.html`, update the `src` attribute of the image tags:
   - Profile: `<img src="assets/images/profile.jpg">`
   - Projects: `<img src="assets/images/your-project.jpg">`

### 3. Adding or Modifying Skills
In `index.html`, each skill is represented by a `div.col-sm-6.col-lg-3` containing `.skill-card`. You can copy and paste any skill card block, change the Font Awesome icon (`fa-brands fa-flutter`, `fa-brands fa-react`, `fa-brands fa-node-js`), and adjust the progress bar percentage:
```html
<div class="progress-bar progress-bar-accent" style="width: 85%;"></div>
```

### 4. Connecting the Contact Form to Receive Real Emails
Since this is a static frontend website, you can connect it without any server setup in under 2 minutes:
- **Formspree**:
  1. Sign up at [formspree.io](https://formspree.io).
  2. Create a form and copy your endpoint URL (e.g., `https://formspree.io/f/mqkvyqpw`).
  3. Change `<form id="contact-form">` to:
     ```html
     <form action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">
     ```
- **EmailJS**: Alternatively, use [emailjs.com](https://www.emailjs.com) by including their lightweight CDN script in `index.html`.

---

## 📜 License
Free to use and adapt for personal portfolios, student assignments, and workshops.
