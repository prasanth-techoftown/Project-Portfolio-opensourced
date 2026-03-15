# Prasanth Portfolio

Personal branding portfolio website of **Prasanth**, built using modern web technologies.

This project showcases projects, skills, and developer experience while maintaining a clean and scalable architecture.  
The goal of this repository is to help developers understand how a modern **Next.js portfolio application** is structured and deployed.

---

# 🚀 Tech Stack

- **Framework:** Next.js  
- **Language:** TypeScript  
- **Styling:** TailwindCSS + SCSS  
- **Icons:** Lucide React, React Icons  
- **Animations:** Lottie React  
- **HTTP Requests:** Axios  
- **Security:** Google reCAPTCHA  
- **Analytics:** Vercel Analytics  
- **Email Integration:** EmailJS  

---

# ✨ Features

- Modern responsive portfolio design
- Smooth animations and UI components
- Contact form with EmailJS integration
- Google reCAPTCHA protection
- Fast performance using Next.js
- Developer-friendly project structure
- Production-ready build

---

# 🚀 Getting Started

Follow the steps below to run the project locally.

## 1. Prerequisites

Ensure you have **pnpm** installed.

```bash
npm install -g pnpm
```

---

## 2. Clone the Repository

```bash
git clone https://github.com/your-username/prasanth-portfolio.git
cd prasanth-portfolio
```

---

## 3. Install Dependencies

```bash
pnpm install
```

---

## 4. Environment Variables

Create a `.env.local` file in the root directory and add the following variables.

```env
NEXT_PUBLIC_GTM=your_gtm_id
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_key
RECAPTCHA_SECRET_KEY=your_secret
EMAILJS_SERVICE_ID=your_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 5. Run Development Server

```bash
pnpm run dev
```

Now open your browser and visit:

```
http://localhost:3000
```

---

# 🏗️ Production Build

To create an optimized production build:

```bash
pnpm run build
```

Start the production server:

```bash
pnpm start
```

---

# 📁 Project Structure

```
prasanth-portfolio
│
└── app
    ├── api
    │   ├── contact
    │   │   └── route.js
    │   └── google
    │       └── route.js
    │
    ├── blog
    │   ├── [slug]
    │   │   └── page.js
    │   └── page.js
    │
    ├── components
    │   ├── helper
    │   │   ├── animation-lottie.jsx
    │   │   ├── glow-card.jsx
    │   │   └── scroll-to-top.jsx
    │   │
    │   ├── homepage
    │   │   ├── about
    │   │   │   └── index.jsx
    │   │   ├── blog
    │   │   │   ├── blog-card.jsx
    │   │   │   └── index.jsx
    │   │   ├── contact
    │   │   │   ├── contact-with-captcha.jsx
    │   │   │   ├── contact-without-captcha.jsx
    │   │   │   └── index.jsx
    │   │   ├── education
    │   │   │   └── index.jsx
    │   │   ├── experience
    │   │   │   └── index.jsx
    │   │   ├── hero-section
    │   │   │   └── index.jsx
    │   │   ├── projects
    │   │   │   ├── index.jsx
    │   │   │   ├── project-card.jsx
    │   │   │   └── single-project.jsx
    │   │   └── skills
    │   │       └── index.jsx
    │   │
    │   ├── footer.jsx
    │   └── navbar.jsx
    │
    ├── css
    │   ├── card.scss
    │   └── globals.scss
    │
    ├── layout.js
    ├── page.js
    └── robots.js
```

The project follows a scalable and maintainable folder structure suitable for modern **Next.js applications**.

---

# 🤝 Contributing

Contributions are welcome and appreciated.

1. Fork the repository  
2. Create your feature branch  

```
git checkout -b feature/AmazingFeature
```

3. Commit your changes  

```
git commit -m "Add some AmazingFeature"
```

4. Push to your branch  

```
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

# ⚖️ License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 Prasanth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files to deal in the Software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies.
```

---

# 👨‍💻 Author

**Prasanth**

Software Engineer focused on building scalable applications and mentoring developers.
