# Shihad Ahmed Portfolio - Project Documentation

> Complete technical documentation for the portfolio monorepo

---

## 🏗️ Architecture

```
shihadahmed/
├── frontend/                 # Next.js 14 (App Router)
│   ├── src/app/              # App Router pages
│   │   ├── (main)/           # Route group
│   │   │   ├── page.js       # Home
│   │   │   ├── projects/     # Projects listing & detail
│   │   │   ├── skills/       # Skills page
│   │   │   ├── experience/   # Experience timeline
│   │   │   ├── blog/         # Blog listing & posts
│   │   │   └── testimonials/ # Testimonials
│   │   ├── layout.js         # Root layout
│   │   └── globals.css       # Global styles + design tokens
│   ├── src/components/       # Reusable components
│   ├── src/lib/              # Data, constants, utils
│   └── public/               # Static assets
│
├── backend/                  # Express.js + MongoDB Atlas
│   ├── src/
│   │   ├── models/           # Project, Skill, Experience, Testimonial, Blog, Contact
│   │   ├── routes/           # Full CRUD REST APIs
│   │   ├── config/           # MongoDB connection
│   │   └── middleware/       # Error handling
│   ├── .env
│   └── .env.example
│
├── .gitignore
├── SPEC.md                   # Project specification
└── README.md
```

---

## 🛠️ Tech Stack

| Frontend | Backend | Database & Tools |
|----------|---------|------------------|
| Next.js 14 (App Router) | Express.js | MongoDB Atlas |
| React 18 | Mongoose | Mongoose ODM |
| Tailwind CSS | Helmet (Security) | GitHub Actions |
| Lucide React | CORS | Vercel (Frontend) |
| next/font (Inter + JetBrains Mono) | Morgan (Logging) | Railway/Render (Backend) |
| next-mdx-remote | Compression | |

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

MIT License - feel free to use this as inspiration for your own portfolio!

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