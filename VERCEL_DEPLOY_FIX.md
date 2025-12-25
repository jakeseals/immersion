# 🚨 Vercel Deployment Fix

## The Problem
Vercel deployments aren't automatically triggering because the GitHub repository isn't connected to Vercel yet.

## Solution: Two Options

### Option 1: Deploy with Vercel CLI (Quick - 2 minutes)

I've installed Vercel CLI. Run these commands:

```bash
vercel login
```
Follow the prompts to login (email verification)

Then deploy:
```bash
vercel --prod
```

This will:
1. Link to your Vercel account
2. Create the project automatically
3. Deploy immediately
4. Set up auto-deployments for future pushes

### Option 2: Connect via Vercel Dashboard (Manual - 5 minutes)

1. **Go to [vercel.com/dashboard](https://vercel.com/dashboard)**

2. **Click "Add New..." → "Project"**

3. **Import Git Repository**:
   - Find `jakeseals/immersion`
   - Click "Import"

4. **Configure Project**:
   - Framework Preset: Next.js (auto-detected ✓)
   - Root Directory: `./` (auto-detected ✓)
   - Build Command: `npm run build` (auto-detected ✓)
   - Output Directory: `.next` (auto-detected ✓)

5. **Add Environment Variables** (CRITICAL):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=j6kvqyn1
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=skUQk7rKtZ8HEC8b2TjdJMNNCmXrvt0Ghe8UIfQ245eWl3s7rbxG15yflxdSP2mrd27Y1pGZtDO2okvSHvBPaDBA2pbeyPR8GknFC9DGMh1d28bVWqsWPxw8Ahfgd2rnOOGzEkP1i79oD3TVlXRzOodTY7KEW6FHVA1Njqy2DMtT2EIzHXi6
   ```

6. **Click "Deploy"**

Once connected, every `git push origin main` will auto-deploy!

## After First Deployment

1. **Get your deployment URL** (e.g., `https://immersion.vercel.app`)

2. **Update Sanity CORS**:
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project
   - API → CORS Origins → Add:
     - `https://*.vercel.app` (allow credentials)
     - `http://localhost:3000` (allow credentials)

## Why This Happened

GitHub repos don't automatically connect to Vercel. You need to:
1. Import the repo in Vercel dashboard, OR
2. Use Vercel CLI to link it

The webhook that triggers auto-deployments is created during this initial connection.

---

**Recommendation**: Use Option 1 (CLI) - it's faster and handles everything automatically.

Run: `vercel --prod` in your terminal now!