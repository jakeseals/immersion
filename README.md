# Immersion - Teaching Internship Experience

A Next.js website showcasing a summer teaching internship journey across three classroom sessions. Built for a Vanderbilt University capstone project with a romantic/moody design aesthetic.

## 🎨 Design

- **Color Palette**: Cream, Burgundy, Oceanic Blue, Silver
- **Typography**: Serif fonts for headings (Georgia), sans-serif for body
- **Aesthetic**: Romantic, moody, elegant with smooth animations
- **Responsive**: Fully optimized for desktop and mobile
- **Experience**: Interactive branching navigation through three teaching sessions

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **CMS**: Sanity.io for content management
- **Database**: MongoDB Atlas (optional, for additional data)
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- MongoDB Atlas account (optional)
- Sanity.io account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jakeseals/immersion.git
   cd immersion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your credentials:
   - Get Sanity credentials from [sanity.io](https://www.sanity.io/)
   - Get MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

4. **Initialize Sanity Studio**
   
   If you haven't created a Sanity project yet:
   ```bash
   npm create sanity@latest
   ```
   
   Follow the prompts to create a project, then update `.env.local` with:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN` (get from sanity.io/manage)

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

6. **Access Sanity Studio**
   
   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content.

## 📝 Content Management

### Adding Sessions

1. Go to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Click "Sessions" in the sidebar
3. Click "Create" to add a new session
4. Fill in the fields:
   - **Session Number**: 1, 2, or 3
   - **Title**: Session title
   - **Slug**: Auto-generated from title
   - **Hero Image**: Upload a cover image
   - **Description**: Short summary (max 200 characters)
   - **Content**: Rich text with images, activities, etc.
   - **Learning Objectives**: Key takeaways
   - **Gallery**: Upload multiple images
   - **Published**: Toggle to make visible on the website

### Content Tips

- Use high-quality images (recommended: 1200x800px or larger)
- Keep descriptions concise and engaging
- Add alt text to all images for accessibility
- Use the rich text editor for formatted content
- Preview changes before publishing

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Deploy!

3. **Update Sanity CORS**
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project
   - Add your Vercel domain to CORS origins

## 📂 Project Structure

```
immersion/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── sessions/          # Session pages
│   └── studio/            # Sanity Studio
├── components/            # React components
├── lib/                   # Utilities
│   ├── mongodb.ts        # MongoDB connection
│   ├── sanity.ts         # Sanity client
│   └── utils.ts          # Helper functions
├── models/               # MongoDB schemas
├── sanity/               # Sanity configuration
│   ├── schema/           # Content schemas
│   └── lib/              # Sanity utilities
├── types/                # TypeScript types
└── public/               # Static assets
```

## 🎯 Features

- ✅ Responsive design (desktop & mobile)
- ✅ Branching navigation between 3 sessions
- ✅ Arrow-based navigation with keyboard support
- ✅ Image galleries with lightbox
- ✅ Rich text content with custom blocks
- ✅ SEO optimized with metadata
- ✅ Content management via Sanity Studio
- ✅ Smooth animations and transitions

## 🔧 Development

### Build for production
```bash
npm run build
```

### Run production build locally
```bash
npm run start
```

### Type checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 📄 License

This project is for academic purposes as part of a Vanderbilt University capstone project.

## 👤 Author

Jake Seals - Vanderbilt University

---

**Need help?** Check the [Next.js docs](https://nextjs.org/docs) or [Sanity docs](https://www.sanity.io/docs)
