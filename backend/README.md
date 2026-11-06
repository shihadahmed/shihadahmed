# Shihad Ahmed Portfolio - Backend API

Express.js + MongoDB Atlas REST API for the portfolio website.

## Quick Start

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB Atlas URI
npm run dev
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port (default: 5000) | No |
| `NODE_ENV` | Environment (development/production) | No |
| `FRONTEND_URL` | Frontend origin for CORS | No |
| `MONGODB_URI` | MongoDB Atlas connection string | **Yes** |

## MongoDB Atlas Setup

1. Create a cluster at [MongoDB Atlas](https://cloud.mongodb.com)
2. Go to **Database Access** → Add database user
3. Go to **Network Access** → Add IP (0.0.0.0/0 for all)
4. Go to **Clusters** → Connect → Connect your application
5. Copy the connection string and replace `<username>` and `<password>`
6. Add to `.env` as `MONGODB_URI`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/health/ready` | Readiness probe |
| GET | `/api/health/live` | Liveness probe |
| GET | `/api/projects` | List projects (with filters) |
| GET | `/api/projects/featured` | Featured projects |
| GET | `/api/projects/categories` | Project categories |
| GET | `/api/projects/:slug` | Single project |
| GET | `/api/skills` | List skills |
| GET | `/api/skills/categories` | Skills by category |
| GET | `/api/experience` | List experience |
| GET | `/api/experience/current` | Current role |
| GET | `/api/testimonials` | List testimonials |
| GET | `/api/testimonials/featured` | Featured testimonials |
| GET | `/api/blog` | List blog posts |
| GET | `/api/blog/tags` | Blog tags |
| GET | `/api/blog/:slug` | Single blog post |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | List contacts (admin) |

## Project Structure

```
backend/
├── src/
│   ├── index.js              # Entry point
│   ├── config/
│   │   └── database.js       # MongoDB connection
│   ├── models/
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   ├── Experience.js
│   │   ├── Testimonial.js
│   │   ├── Blog.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── testimonials.js
│   │   ├── blog.js
│   │   ├── contact.js
│   │   └── health.js
│   └── middleware/
│       └── errorHandler.js
├── .env
├── .env.example
└── package.json
```

## Development

```bash
npm run dev    # Start with nodemon (auto-reload)
npm start      # Production start
```

## Deployment

1. Set `NODE_ENV=production`
2. Set all environment variables
3. Run `npm start`
4. Use PM2 or similar for process management