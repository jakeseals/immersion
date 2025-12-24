# 🚀 Immersion Website - Setup Guide

## Current Status

✅ **Completed**:
- Next.js 15 project initialized with TypeScript
- Tailwind CSS configured with custom theme (cream, burgundy, oceanic blue, silver)
- Sanity CMS integrated and configured
- MongoDB connection setup
- Home page with 3-session navigation cards
- Dynamic session pages with rich content support
- Sanity Studio accessible at `/studio`
- All core infrastructure in place
- Development server running successfully

## Next Steps to Launch

### 1. Create Sanity Project (5 minutes)

1. **Go to [sanity.io](https://www.sanity.io/) and sign up/login**
2. **Create a new project**:
   - Click "Create Project"
   - Name it "Immersion Vanderbilt"
   - Choose a project ID (it will be auto-generated)
   - Select dataset: "production"
   - Keep it free!

3. **Get your credentials**:
   - Project ID: visible in project settings
   - Dataset: `production`
   - API Token: Go to "API" → "Tokens" → "Add API Token"
     - Name: "Immersion Website"
     - Permissions: "Editor"
     - Copy the token (you'll only see it once!)

### 2. Configure Environment Variables (2 minutes)

Create a file named `.env.local` in the project root with:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# MongoDB (Optional - only needed if you want the MongoDB features)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/immersion_vanderbilt

# NextAuth (Optional - only needed if you want to protect /studio)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=run_this_command_to_generate: openssl rand -base64 32
```

**To generate NextAuth secret (optional)**:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. Start Development Server (Already Running!)

The server is already running at:
- **Website**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

If you need to restart:
```bash
npm run dev
```

### 4. Add Your Content (10 minutes)

1. **Go to http://localhost:3000/studio**
2. **Create Session 1**:
   - Click "Create" → "Session"
   - Session Number: `1`
   - Title: "Session One" (or your custom title)
   - Slug: Click "Generate" (auto-creates from title)
   - Hero Image: Upload an image (optional)
   - Description: Brief summary (max 200 chars)
   - Content: Write your experience, add images, etc.
   - Learning Objectives: Add key takeaways
   - Gallery: Upload multiple photos
   - Published: Toggle to **ON** to make it visible
   - Click "Publish"

3. **Repeat for Session 2 and Session 3**

4. **View your website**: Go to http://localhost:3000

### 5. Optional: MongoDB Setup

Only needed if you want to use MongoDB for additional features (not required for basic functionality):

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster (M0)
3. Create database user
4. Get connection string
5. Add to `.env.local`

## 📝 Content Management Tips

### Adding Rich Content

In Sanity Studio, you can add:

1. **Headings**: Select text → Choose H2 or H3
2. **Bold/Italic**: Highlight text → Click formatting buttons
3. **Images**: Click "+" → "Image" → Upload
4. **Activities**: Click "+" → "Activity" → Fill in title, description, duration
5. **Lists**: Use bullet points in the text editor

### Image Best Practices

- **Hero Images**: 1200x800px or larger, landscape orientation
- **Gallery Images**: Any size, will be optimized automatically
- **File Format**: JPG or PNG (JPG recommended for photos)
- **Alt Text**: Always add for accessibility!

### Publishing Workflow

1. **Draft**: Create content with Published toggle OFF
2. **Preview**: View in Sanity Studio preview pane
3. **Publish**: Toggle Published ON and click "Publish"
4. **Update**: Make changes and click "Publish" again
5. Website updates automatically (may take 30-60 seconds)

## 🎨 Customization Options

### Change Colors

Edit [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  cream: '#FFFDD0',      // Change these hex codes
  burgundy: '#800020',
  oceanic: '#0077BE',
  silver: '#C0C0C0',
}
```

### Change Fonts

Edit [app/globals.css](app/globals.css):

```css
body {
  font-family: Georgia, Cambria, 'Times New Roman', serif;
}
```

## 🚀 Deploy to Vercel (10 minutes)

### First Time Setup

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up with GitHub
   - Click "Import Project"
   - Select your `immersion` repository
   - Click "Import"

3. **Configure environment variables in Vercel**:
   - Go to project settings → Environment Variables
   - Add each variable from your `.env.local`:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `SANITY_API_TOKEN`
   - Click "Deploy"

4. **Update Sanity CORS**:
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project → API → CORS Origins
   - Add your Vercel URL: `https://your-project.vercel.app`
   - Allow credentials: Yes

Your site is live! 🎉

### Updating the Site

Just push to GitHub:
```bash
git add .
git commit -m "Update content"
git push origin main
```

Vercel automatically deploys in ~2 minutes.

## 🐛 Troubleshooting

### "Can't find project"
- Make sure `.env.local` has the correct Sanity credentials
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

### "Images not loading"
- Check that image URLs include `cdn.sanity.io` in Next.js config
- Verify images are published in Sanity Studio

### "Session page shows 404"
- Ensure session is Published in Sanity Studio
- Check Session Number is 1, 2, or 3
- Verify slug is generated correctly

### "Studio won't load"
- Clear browser cache
- Check console for errors
- Verify all Sanity packages are installed: `npm list sanity`

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs

## 🎯 Current Feature Checklist

- ✅ Home page with 3 session cards
- ✅ Dynamic session pages with rich content
- ✅ Image galleries
- ✅ Responsive design (mobile & desktop)
- ✅ Sanity CMS for content management
- ✅ Arrow navigation between sessions
- ✅ Romantic/moody design aesthetic
- ✅ SEO metadata
- ⏳ Authentication for Studio (optional)
- ⏳ Analytics tracking (optional)

## 💡 Tips for Your Presentation

1. **Add compelling content**: Use real photos and reflections from your internship
2. **Tell a story**: Structure each session with beginning, middle, end
3. **Use visuals**: Photos make the experience more engaging
4. **Keep it focused**: Quality over quantity in your writing
5. **Test on mobile**: Many people might view on their phones
6. **Share the link**: Vercel gives you a shareable URL for your capstone presentation

---

**Need Help?** I'm here to assist! Just ask questions and I'll help you customize or troubleshoot anything.