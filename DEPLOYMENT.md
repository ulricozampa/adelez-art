# 🚀 QUICK DEPLOYMENT CHECKLIST

## ✅ Pre-Deployment

- [ ] Add artwork images to `public/images/` folder
- [ ] Update artwork titles, mediums, and years in `app/page.tsx`
- [ ] Customize About section text
- [ ] Update contact email and Instagram handle
- [ ] Test locally with `npm run dev`

## 📤 Step 1: GitHub (5 minutes)

1. Go to https://github.com/new
2. Create repository named `adelez-art`
3. In your terminal (in the adelez-art folder):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/adelez-art.git
git push -u origin main
```

## 🌐 Step 2: Vercel (5 minutes)

1. Go to https://vercel.com
2. Click "Sign up with GitHub"
3. Click "Add New" → "Project"
4. Find and import `adelez-art` repository
5. Click "Deploy" (use all default settings)
6. Wait ~2 minutes for build to complete
7. Your site is live at: `https://adelez-art.vercel.app`

## 🔗 Step 3: GoDaddy DNS (10 minutes + wait time)

### In Vercel:
1. Go to project → Settings → Domains
2. Enter: `adelez.art`
3. Click "Add"
4. Copy the DNS records shown

### In GoDaddy:
1. Log in to https://godaddy.com
2. Go to "My Products" → Find `adelez.art` → Click "DNS"
3. Delete any existing A or CNAME records for @ and www

### Add New Records:

**Record 1 - Root Domain:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `600`

**Record 2 - WWW Subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `600`

4. Click "Save"

### Wait for Verification:
- DNS propagation: 10 minutes - 48 hours (usually < 1 hour)
- Check Vercel dashboard for "Valid Configuration" status
- SSL certificate auto-generates once verified

## ✨ Step 4: Done!

Visit:
- https://adelez.art
- https://www.adelez.art

Both should work with HTTPS! 🎉

## 🔄 Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Update artwork/content"
git push
```

Vercel automatically rebuilds and deploys in ~2 minutes!

## 🆘 Troubleshooting

**Site not building on Vercel?**
- Check build logs in Vercel dashboard
- Ensure all files are committed to GitHub

**Domain not working?**
- Wait longer (DNS can take up to 48 hours)
- Verify DNS records match exactly
- Use https://dnschecker.org to check propagation

**Images not showing?**
- Ensure images are in `public/images/`
- Uncomment the `<Image>` component in `app/page.tsx`
- Check file names match exactly (case-sensitive)

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Docs: https://docs.github.com
