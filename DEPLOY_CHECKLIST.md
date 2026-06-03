# 🚀 Deployment Checklist for Vercel

## Step 1: Set Up PostgreSQL Database (2 minutes)

Choose one:

### Option A: Supabase (Recommended - Free)
1. Go to https://supabase.com
2. Sign up with GitHub
3. Create new project
4. Go to Settings → Database
5. Copy the connection string (Pooling)
6. It will look like: `postgresql://postgres:password@host:port/postgres`

### Option B: Railway (Alternative - Free $5/month)
1. Go to https://railway.app
2. Sign up with GitHub
3. Create new project
4. Add PostgreSQL plugin
5. Copy DATABASE_URL from variables

### Option C: PlanetScale (MySQL)
1. Go to https://planetscale.com
2. Sign up
3. Create database
4. Copy connection string

---

## Step 2: Prepare GitHub Repository

```bash
# Make sure everything is committed
git add .
git commit -m "Update Prisma schema to PostgreSQL for Vercel deployment"
git push origin main
```

---

## Step 3: Deploy to Vercel

1. **Go to Vercel Dashboard**
   - https://vercel.com/dashboard

2. **Click "Add New" → "Project"**

3. **Import your GitHub repository**
   - Select: `Narendra0266/school-management-system`

4. **Configure Build Settings**
   - Framework: **Next.js**
   - Build Command: `npm run build` ✓ (auto-detected)
   - Output Directory: `.next` ✓ (auto-detected)
   - Install Command: `npm install` ✓ (auto-detected)

5. **Add Environment Variables**
   - Click "Environment Variables"
   - Add these:
     ```
     Key: DATABASE_URL
     Value: [your PostgreSQL connection string]
     
     Key: JWT_SECRET
     Value: vvZhGYgtl56WkeO056gLTMVUMeDB7xBOprqAADFd4AA=
     ```

6. **Deploy**
   - Click "Deploy"
   - Wait 2-5 minutes for build

---

## Step 4: Set Up Database (1 minute)

```bash
# After deployment succeeds, run migrations in Vercel CLI
vercel env pull .env.production.local
npx prisma migrate deploy --skip-generate
```

Or use Vercel dashboard's "Deployments" tab:
- Click on the deployment
- Go to "Environment" and confirm DATABASE_URL is set
- The app will automatically run migrations on first request

---

## Step 5: Test Deployment

Your app will be live at: `https://school-management-system-[hash].vercel.app`

Test these endpoints:

```bash
# Replace DOMAIN with your Vercel domain
curl -X POST https://DOMAIN/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"principal@test.com","password":"testpass123"}'
```

---

## Troubleshooting

### "Cannot connect to database"
- ✓ Check DATABASE_URL is set in Vercel Environment Variables
- ✓ Check PostgreSQL connection string format
- ✓ Verify database firewall allows Vercel IPs

### "Build failed"
- Check build logs in Vercel dashboard
- Run `npm run build` locally to verify
- Check all required env vars are set

### "Prisma migrations not running"
```bash
# Force run migrations
npx prisma migrate deploy --skip-generate
```

### "500 errors on API calls"
- Check server logs: Vercel dashboard → Deployments → Functions
- Verify JWT_SECRET matches between local and production

---

## Important Notes

- ✅ **Database will persist** (unlike SQLite)
- ✅ **API routes work on Vercel** (no separate backend needed)
- ✅ **Automatic deployments** on push to main branch
- ✅ **Free tier** works great for this project
- ⚠️ **Don't commit `.env`** (already in .gitignore)

---

## Quick Reference

| What | Where |
|------|-------|
| Deployment Logs | Vercel Dashboard → Deployments |
| Environment Variables | Vercel Dashboard → Settings → Environment Variables |
| Database | Supabase/Railway Dashboard |
| Domain | vercel.app subdomain (free) or custom domain |
| SSL/HTTPS | Automatic ✓ |

---

## Success! 🎉

Once deployed, your school management system will be live and accessible from anywhere!

**Next Steps:**
- Share the Vercel URL with users
- Configure custom domain (optional)
- Set up backups for PostgreSQL
- Monitor error rates in Vercel dashboard
