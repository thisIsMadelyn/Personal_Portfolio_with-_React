### Personal Portofolio Website

A modern, responsive personal portoflio I built with React JS.

This Project will showcase my skills in Frontend Development.
File Structure 
```angular2html
my-portfolio/
├── public/
│   ├── favicon.ico
│   └── resume.pdf           # Keep downloadable assets here
├── src/
│   ├── assets/              # Static assets imported in components
│   │   ├── images/
│   │   │   ├── hero-bg.jpg
│   │   │   └── profile.png
│   │   └── icons/
│   ├── components/          # Reusable UI parts (non-page specific)
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── ProjectCard.jsx
│   ├── data/                # JSON/JS files for content (Avoid hardcoding text)
│   │   ├── projects.js      # Array of project objects
│   │   ├── experience.js    # Work history data
│   │   └── socialLinks.js
│   ├── hooks/               # Custom React hooks
│   │   └── useScroll.js
│   ├── layouts/             # Page wrappers
│   │   └── MainLayout.jsx   # Contains Navbar and Footer
│   ├── pages/               # Main routable pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── styles/              # Global styles or variables
│   │   ├── globals.css
│   │   └── variables.css    # Colors, fonts (if using pure CSS)
│   ├── utils/               # Helper functions
│   │   └── formatDate.js
│   ├── App.jsx              # Routing setup
│   └── main.jsx             # Entry point
├── .gitignore
├── package.json
└── README.md
```

🛠️ Getting Started
Prerequisites
Make sure you have Node.js installed on your machine.

Installation
Clone the repository:

```angular2html
git clone [https://github.com/your-username/my-portfolio.git](https://github.com/your-username/my-portfolio.git)
```

Navigate to the Project Directory:

```angular2html
cd my-portfolio
```

Install Dependencies: 

````angular2html
npm install
````

Running Locally:

```angular2html
npm run dev
```
