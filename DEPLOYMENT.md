# Deployment Guide - School Management System

## Option 1: Deploy to Vercel (Recommended for Frontend)

### Prerequisites
- Vercel account
- GitHub account (code pushed to GitHub)
- PostgreSQL/MySQL database (for production)

### Steps

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Go to Vercel Dashboard**
   - Visit: https://vercel.com
   - Click "Add New..." → "Project"
   - Import your GitHub repository

3. **Configure Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add these variables:
     ```
     DATABASE_URL=postgresql://user:password@host:port/db_name
     JWT_SECRET=your_secret_key_here
     NODE_ENV=production
     ```

4. **Database Setup**
   
   **For PostgreSQL (Recommended):**
   - Use Railway.app, Supabase, or AWS RDS
   - Get the connection string and set as DATABASE_URL
   - Run migrations: `npx prisma migrate deploy`

   **For MongoDB:**
   - Update `prisma/schema.prisma` to use MongoDB provider
   - Set DATABASE_URL to MongoDB connection string

### Important Notes

- **SQLite won't work on Vercel** (no persistent storage)
- **API Routes work on Vercel** - all your `/api/*` endpoints will function
- **No separate backend needed** - your Next.js API routes handle everything

---

## Option 2: Deploy Backend Separately (If Needed)

If you need the Express backend (`/backend` folder):

### Deploy to Railway.app
```bash
cd backend
railway init
railway up
```

### Deploy to Heroku
```bash
cd backend
heroku create
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

---

## Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start dev server
npm run dev
```

---

## Production Checklist

- [ ] Use production database (PostgreSQL/MySQL)
- [ ] Set strong JWT_SECRET
- [ ] Update API endpoints (hardcoded localhost:3000 → use relative URLs)
- [ ] Enable HTTPS
- [ ] Set up proper CORS headers
- [ ] Configure rate limiting
- [ ] Set up error logging
- [ ] Create database backups

---

## Troubleshooting

### "Cannot access /api/students"
- Check DATABASE_URL is correct in Vercel Environment Variables
- Verify database is accessible from Vercel

### "JWT token invalid"
- Make sure JWT_SECRET matches in production
- Token expiry is 7 days

### "Build failed"
- Check logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in package.json

---

## Recommended Database Providers

| Provider | Free Tier | Setup Time | Recommendation |
|----------|-----------|------------|-----------------|
| Supabase | 500MB | 2 min | ⭐ Best (PostgreSQL) |
| Railway | $5/mo | 3 min | ⭐ Good (PostgreSQL) |
| MongoDB Atlas | 512MB | 2 min | Good (MongoDB) |
| PlanetScale | 3 databases | 5 min | Good (MySQL) |

