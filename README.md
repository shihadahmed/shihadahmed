<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,20,30,40&height=200&section=header&text=Shihad%20Ahmed&fontSize=50&fontColor=fff&animation=fadeIn&fontAlignY=38&desc=Full-Stack%20MERN%20Developer%20Portfolio&descAlignY=55&descAlign=62" width="100%"/>
</p>

<p align="center">
  <a href="https://linkedin.com/in/shihadahmed">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://github.com/shihadahmed">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="mailto:shihadahmed@example.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
  <a href="https://shihadahmed.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo"/>
  </a>
</p>

---

## 📖 Overview

A **modern, full-stack portfolio website** built with the MERN stack, featuring a clean minimal design, dark/light mode, and a complete REST API backend. This monorepo contains both the frontend (Next.js 14) and backend (Express.js + MongoDB Atlas).

### ✨ Features

- **🎨 Clean Minimal Design** — Thoughtful typography, generous whitespace, smooth animations
- **🌓 Dark/Light Mode** — System preference detection + manual toggle with persistence
- **📱 Fully Responsive** — Mobile-first, works beautifully on all devices
- **⚡ Performance Optimized** — Static generation, image optimization, code splitting
- **♿ Accessible** — WCAG 2.1 AA compliant, semantic HTML, keyboard navigation
- **🔍 SEO Ready** — Meta tags, Open Graph, JSON-LD structured data, sitemap
- **🌐 Full-Stack Architecture** — Next.js frontend + Express.js backend + MongoDB Atlas

---

## 🏗️ Architecture

```
shihadahmed/
├── frontend/                 # Next.js 14 (App Router)
│   ├── src/
│   │   ├── app/              # App Router pages
│   │   │   ├── (main)/       # Route group
│   │   │   │   ├── page.js          # Home
│   │   │   │   ├── projects/        # Projects listing & detail
│   │   │   │   ├── skills/          # Skills page
│   │   │   │   ├── experience/      # Experience timeline
│   │   │   │   ├── blog/            # Blog listing & posts
│   │   │   │   └── testimonials/    # Testimonials
│   │   │   ├── layout.js      # Root layout
│   │   │   └── globals.css    # Global styles + design tokens
│   │   ├── components/
│   │   │   ├── ui/            # Primitive components (Button, Card, etc.)
│   │   │   ├── layout/        # Header, Footer, Navigation
│   │   │   ├── home/          # Home page sections
│   │   │   ├── projects/      # Project components
│   │   │   ├── skills/        # Skill components
│   │   │   ├── experience/    # Experience components
│   │   │   ├── blog/          # Blog components
│   │   │   ├── testimonials/  # Testimonial components
│   │   │   └── providers/     # Theme provider
│   │   ├── lib/
│   │   │   ├── constants.js   # Site config, nav items
│   │   │   ├── data/          # Static data (fallback)
│   │   │   ├── icons.js       # Lucide icon re-exports
│   │   │   ├── types.js       # JSDoc type definitions
│   │   │   └── utils.js       # Utility functions
│   │   └── content/           # MDX blog posts
│   ├── public/                # Static assets
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   └── jsconfig.json
│
├── backend/                    # Express.js + MongoDB
│   ├── src/
│   │   ├── index.js            # Entry point
│   │   ├── config/
│   │   │   └── database.js     # MongoDB connection
│   │   ├── models/
│   │   │   ├── Project.js
│   │   │   ├── Skill.js
│   │   │   ├── Experience.js
│   │   │   ├── Testimonial.js
│   │   │   ├── Blog.js
│   │   │   └── Contact.js
│   │   ├── routes/
│   │   │   ├── projects.js
│   │   │   ├── skills.js
│   │   │   ├── experience.js
│   │   │   ├── testimonials.js
│   │   │   ├── blog.js
│   │   │   ├── contact.js
│   │   │   └── health.js
│   │   └── middleware/
│   │       └── errorHandler.js
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── SPEC.md                    # Project specification
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | UI library |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Beautiful icons |
| **next/font** | Self-hosted fonts (Inter + JetBrains Mono) |
| **next-mdx-remote** | MDX blog rendering |

### Backend
| Technology | Purpose |
|------------|---------|
| **Express.js** | Web framework |
| **MongoDB Atlas** | Cloud database |
| **Mongoose** | ODM for MongoDB |
| **Helmet** | Security headers |
| **CORS** | Cross-origin resource sharing |
| **Morgan** | HTTP request logging |
| **Compression** | Response compression |
| **express-rate-limit** | Rate limiting |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier works)
- Git

### 1. Clone & Install

```bash
git clone https://github.com/shihadahmed/shihadahmed.git
cd shihadahmed

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Configure Environment

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Backend** (`backend/.env`):
```bash
cp .env.example .env
# Edit .env with your MongoDB Atlas URI
```

**Required: MongoDB Atlas URI**
1. Create cluster at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create database user & whitelist IP (0.0.0.0/0)
3. Get connection string → Add to `MONGODB_URI` in `.env`

### 3. Run Development Servers

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
# → http://localhost:3000
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
# → http://localhost:5000
```

---

## 📚 API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production:  https://api.shihadahmed.com/api
```

### Endpoints

| Resource | Methods | Endpoints |
|----------|---------|-----------|
| **Health** | GET | `/health`, `/health/ready`, `/health/live` |
| **Projects** | GET, POST, PUT, DELETE | `/projects`, `/projects/featured`, `/projects/categories`, `/projects/:slug` |
| **Skills** | GET, POST, PUT, DELETE | `/skills`, `/skills/categories`, `/skills/stats`, `/skills/:id` |
| **Experience** | GET, POST, PUT, DELETE | `/experience`, `/experience/current`, `/experience/:id` |
| **Testimonials** | GET, POST, PUT, DELETE | `/testimonials`, `/testimonials/featured`, `/testimonials/:id` |
| **Blog** | GET, POST, PUT, DELETE | `/blog`, `/blog/tags`, `/blog/:slug` |
| **Contact** | GET, POST, PUT, DELETE | `/contact`, `/contact/:id` |

### Example Response
```json
{
  "success": true,
  "data": {
    "slug": "saas-starter-kit",
    "title": "SaaS Starter Kit",
    "description": "Production-ready SaaS boilerplate...",
    "techStack": ["Next.js", "TypeScript", "MongoDB"],
    "featured": true
  },
  "pagination": { "page": 1, "limit": 20, "total": 10, "pages": 1 }
}
```

---

## 🎨 Design System

### Colors (CSS Variables)
```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
  --primary: #0284c7;        /* Sky 600 */
  --primary-foreground: #ffffff;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --border: #e2e8f0;
}

[data-theme="dark"] {
  --background: #020617;
  --foreground: #f8fafc;
  --primary: #38bdf8;        /* Sky 400 */
  --muted: #0f172a;
  --border: #1e293b;
}
```

### Spacing Scale (4px base)
| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-4` | 16px |
| `--space-8` | 32px |
| `--space-16` | 64px |

### Typography
- **Sans**: Inter (UI text)
- **Mono**: JetBrains Mono (code)
- **Scale**: 1rem base → 1.125rem → 1.25rem → 1.5rem → 1.875rem → 2.25rem → 3rem

---

## 📦 Deployment

### Frontend (Vercel)
1. Connect GitHub repo to Vercel
2. Set Root Directory: `frontend`
3. Add Environment Variables:
   - `NEXT_PUBLIC_API_URL` → Production API URL
4. Deploy

### Backend (Railway / Render / VPS)
1. Set `NODE_ENV=production`
2. Configure all environment variables
3. Use PM2 or Docker for process management
4. Reverse proxy with Nginx (recommended)

### Database (MongoDB Atlas)
- Use M0 Free Tier for development
- Enable automated backups
- Set up Database Triggers for search indexing (optional)

---

## 🧪 Development

### Code Quality
```bash
# Frontend
cd frontend
npm run lint      # ESLint
npm run typecheck # TypeScript check (via jsconfig)

# Backend
cd backend
npm run lint      # ESLint
```

### Git Workflow
```bash
# Feature branch
git checkout -b feat/amazing-feature
git commit -m "feat: add amazing feature"
git push origin feat/amazing-feature
# Open Pull Request
```

### Commit Convention
```
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting
refactor: Code restructuring
test:     Tests
chore:    Maintenance
```

---

## 📄 Project Specification

See [SPEC.md](./SPEC.md) for the complete project specification including:
- Requirements & success criteria
- Data models
- Page specifications
- Accessibility checklist
- Deployment checklist

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feat/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Shihad Bin Ahmed**
- 🌐 Portfolio: [shihadahmed.vercel.app](https://shihadahmed.vercel.app)
- 💼 LinkedIn: [linkedin.com/in/shihadahmed](https://linkedin.com/in/shihadahmed)
- 💻 GitHub: [github.com/shihadahmed](https://github.com/shihadahmed)
- 📧 Email: shihadahmed@example.com

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) — The React Framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Lucide](https://lucide.dev/) — Beautiful icons
- [MongoDB Atlas](https://www.mongodb.com/atlas) — Cloud database
- [Vercel](https://vercel.com/) — Deployment platform

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,20,30,40&height=120&section=footer&animation=fadeIn" width="100%"/>
</p>

<p align="center">
  Made with ❤️ by <a href="https://github.com/shihadahmed">Shihad Bin Ahmed</a>
</p>