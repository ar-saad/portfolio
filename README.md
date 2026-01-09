# Portfolio Website

A modern, responsive portfolio website showcasing my work as a full-stack developer. Built with React, TypeScript, and Tailwind CSS, featuring a clean design with dark/light theme support and smooth animations.

🌐 **Live Site**: [https://ar-saad.vercel.app/](https://ar-saad.vercel.app/)

## 🚀 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Modern UI**: Built with Shadcn UI components and Tailwind CSS
- **Smooth Animations**: Interactive elements with CSS animations
- **Code Showcase**: Syntax-highlighted code blocks displaying skills and experience
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Fast loading with Vite build tool

## 🛠️ Tech Stack

### Core

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn UI** - High-quality component library
- **Lucide React** - Icon library
- **React Icons** - Additional icons

### Routing & State

- **React Router DOM** - Client-side routing
- **React Context API** - Theme management

### Code Highlighting

- **React Syntax Highlighter** - Code block syntax highlighting

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/
│   │   ├── layout/          # Layout components (Navbar)
│   │   ├── ThemeSwitch/     # Theme switching components
│   │   └── ui/              # Reusable UI components
│   ├── lib/                 # Utility functions
│   ├── pages/
│   │   └── home/            # Home page components
│   │       ├── Banner.tsx   # Hero section
│   │       ├── About.tsx    # About section
│   │       └── Home.tsx     # Home page container
│   ├── routes/              # Route configuration
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── dist/                    # Build output
├── components.json          # Shadcn UI configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🧩 Key Components

### Banner

Hero section with animated title, code showcase, and social links.

### About

Detailed about section with stats, focus areas, and profile card.

### Navbar

Responsive navigation with mobile menu and theme switcher.

### AnimatedTitles

Component that cycles through titles with letter-by-letter animation.

### CodeBlock

Syntax-highlighted code display component.

## 👤 Author

**Abdur Rahman Saad**

- Twitter: [@arsaad_dev](https://x.com/arsaad_dev)
- GitHub: [@ar-saad](https://github.com/ar-saad)
- Facebook: [arsaad00](https://www.facebook.com/arsaad00/)

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for the excellent build tooling
- [React Router](https://reactrouter.com/) for routing

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
