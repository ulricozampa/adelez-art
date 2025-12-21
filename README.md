# Adelez Art Portfolio

Art portfolio website for showcasing paintings and creative works.

## 🚀 Deployment Guide

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it `adelez-art` (or whatever you prefer)
   - Don't initialize with README, .gitignore, or license

2. **Initialize and push your code:**
   ```bash
   cd adelez-art
   git init
   git add .
   git commit -m "Initial commit - Adelez Art Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/adelez-art.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up or log in with your GitHub account

2. **Import your project:**
   - Click "Add New" → "Project"
   - Select your `adelez-art` repository
   - Click "Import"

3. **Configure the build:**
   - Framework Preset: Next.js (should auto-detect)
   - Build Command: `npm run build` (default)
   - Output Directory: `out` (default)
   - Click "Deploy"

4. **Wait for deployment:**
   - Vercel will build and deploy your site
   - You'll get a URL like `adelez-art.vercel.app`

### Step 3: Configure Custom Domain (GoDaddy)

1. **In Vercel:**
   - Go to your project settings
   - Click "Domains"
   - Add your domain: `adelez.art`
   - Vercel will show you DNS records to configure

2. **In GoDaddy:**
   - Log in to your GoDaddy account
   - Go to "My Products" → "DNS" for adelez.art
   - Click "Add" to add new records

3. **Add these DNS records:**
   
   **For root domain (adelez.art):**
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - TTL: 600 seconds

   **For www subdomain:**
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
   - TTL: 600 seconds

4. **Wait for DNS propagation:**
   - Can take 1-48 hours (usually under 1 hour)
   - Check status in Vercel dashboard
   - Once verified, Vercel auto-generates SSL certificate

### Step 4: Verify Everything Works

1. Visit https://adelez.art
2. Visit https://www.adelez.art
3. Both should work and redirect to HTTPS automatically

## 📝 Customization

### Adding Images

1. Place images in `public/images/` folder
2. Update the `artworks` array in `app/page.tsx`:
   ```typescript
   {
     title: 'Your Artwork Title',
     medium: 'Oil on Canvas',
     year: '2024',
     image: '/images/your-image.jpg'
   }
   ```
3. Uncomment the `<Image>` component in the code

### Updating Content

- **About section:** Edit text in `app/page.tsx` in the About section
- **Contact info:** Update email and Instagram links
- **Colors:** Change CSS variables in `app/globals.css`

## 🔄 Updating the Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel will automatically rebuild and deploy!

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Deployment:** Vercel
- **Domain:** GoDaddy

## Support

For issues or questions, contact: contact@adelez.art
