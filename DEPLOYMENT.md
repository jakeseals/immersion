# Deployment Instructions

## Vercel Setup

### First-Time Connection

1. **Go to [vercel.com](https://vercel.com/dashboard)**
2. **Click "Add New..." → "Project"**
3. **Import your GitHub repository**: `jakeseals/immersion`
4. **Configure Project**:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build` (should auto-detect)
   - Install Command: `npm install` (should auto-detect)

5. **Add Environment Variables**:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=j6kvqyn1
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=skUQk7rKtZ8HEC8b2TjdJMNNCmXrvt0Ghe8UIfQ245eWl3s7rbxG15yflxdSP2mrd27Y1pGZtDO2okvSHvBPaDBA2pbeyPR8GknFC9DGMh1d28bVWqsWPxw8Ahfgd2rnOOGzEkP1i79oD3TVlXRzOodTY7KEW6FHVA1Njqy2DMtT2EIzHXi6
   ```

6. **Click "Deploy"**

### Auto-Deploy Setup

After first deployment:

1. **Go to Project Settings → Git**
2. **Verify "Production Branch" is set to `main`**
3. **Ensure "Automatic Deployments" is enabled**

Now every push to `main` will auto-deploy!

### Your Deployment URLs

Vercel provides:
- **Production**: `https://immersion.vercel.app` (or your custom domain)
- **Preview**: `https://immersion-<hash>.vercel.app` (for PR previews)

## Sanity CORS Configuration

### Allow All Vercel Domains (Recommended)

1. **Go to [sanity.io/manage](https://sanity.io/manage)**
2. **Select your "Immersion Vanderbilt" project**
3. **Click "API" in sidebar**
4. **Scroll to "CORS Origins"**
5. **Click "Add CORS origin"**
6. **Add these origins**:
   - `http://localhost:3000` (for local development)
   - `https://*.vercel.app` (wildcard for all Vercel deployments)
   - Your production domain if you have a custom one

7. **For each origin**:
   - ✅ Allow credentials: Yes
   - ✅ Methods: GET, POST, PUT, PATCH, DELETE

### Why This Works

The `*.vercel.app` wildcard allows:
- Your production deployment
- All preview deployments
- Branch deployments
- No need to manually add each deployment URL

## Trigger New Deployment

Make a small change and push:

```bash
git commit --allow-empty -m "Trigger Vercel deployment"
git push origin main
```

Or use Vercel dashboard:
- Go to your project
- Click "Deployments" tab
- Click "..." on latest deployment → "Redeploy"

## Troubleshooting

### "Deployment not triggering"
- Check Project Settings → Git → ensure repo is connected
- Verify webhook exists in GitHub repo settings
- Try manual redeploy from Vercel dashboard

### "CORS errors in Studio"
- Add `https://*.vercel.app` to Sanity CORS origins
- Clear browser cache
- Wait 1-2 minutes for CORS changes to propagate

### "Environment variables missing"
- Go to Vercel project → Settings → Environment Variables
- Add all variables from `.env.local`
- Redeploy after adding variables
