# Quick Start - Deploy to GitHub Pages

## 🎯 5-Minute Deployment Guide

### Step 1️⃣: Commit Your Code

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Step 2️⃣: Enable GitHub Actions in Settings

Go to: **Settings → Pages → Source → Select "GitHub Actions"**

```
┌─────────────────────────────────────────────────┐
│  GitHub Pages Settings                          │
├─────────────────────────────────────────────────┤
│                                                 │
│  Source:                                        │
│  ┌─────────────────────────────────────────┐   │
│  │ ▼ GitHub Actions                  ✓     │   │  ← SELECT THIS!
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ⚠️  NOT "Deploy from a branch"                │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Step 3️⃣: Wait for Action to Complete

Go to: **Actions tab** → Watch for green checkmark ✓

```
┌────────────────────────────────────────┐
│  Deploy Next.js to GitHub Pages        │
│  ✓ Completed in 2m 34s                │
├────────────────────────────────────────┤
│  ✓ Build                               │
│  ✓ Deploy                              │
└────────────────────────────────────────┘
```

### Step 4️⃣: Visit Your Site

**Your Portfolio:** `https://minhaj47.github.io/portfolio/`

## ✅ Image Loading Checklist

### Before Deployment
- [x] Images are in `public/` folder
- [x] Build works: `npm run build`
- [x] Images found in `out/` folder

### After Deployment
- [ ] GitHub Pages source = "GitHub Actions"
- [ ] Action completed with ✓
- [ ] Waited 2-3 minutes
- [ ] Cleared browser cache (Cmd+Shift+R)

## 🐛 Images Not Loading?

### Most Common Issue

```
❌ WRONG Setting:
   Source: Deploy from a branch → gh-pages

✅ CORRECT Setting:
   Source: GitHub Actions
```

### Other Quick Fixes

1. **Clear Cache:** Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
2. **Wait:** Give it 2-3 minutes after deployment
3. **Check Console:** Open browser DevTools (F12) → Console tab
4. **Verify URL:** Should be `https://minhaj47.github.io/portfolio/profile.jpg`

## 🧪 Test Locally First

```bash
# Build
npm run build

# Check images
ls -la out/ | grep jpg

# Serve locally
cd out && python3 -m http.server 8000
```

Visit: `http://localhost:8000/portfolio/` ⚠️ Note the `/portfolio/` path!

## 📁 What Should Be in `out/` Folder

```
out/
├── index.html              ✓ Main page
├── profile.jpg             ✓ Your image
├── profile1.jpeg           ✓ Your image
├── hackathon/              ✓ Folder
│   ├── hack1.jpg          ✓ Images
│   ├── hack2.jpg          ✓ Images
│   └── ...
├── _next/                  ✓ Next.js assets
└── .nojekyll              ✓ GitHub Pages config
```

## 🎉 Success Indicators

You'll know it's working when:

1. ✅ GitHub Action shows green checkmark
2. ✅ Site loads at `https://minhaj47.github.io/portfolio/`
3. ✅ Images are visible
4. ✅ No 404 errors in browser console

## 📚 Detailed Guides

- 📘 **DEPLOYMENT.md** - Full deployment guide
- 🖼️ **IMAGE-TROUBLESHOOTING.md** - Image debugging
- 📋 **CHECKLIST.md** - Pre-deployment checklist
- 🔧 **FIXES-SUMMARY.md** - What was fixed

## 💬 Need Help?

1. Check browser console (F12) for errors
2. Review GitHub Actions logs
3. Read IMAGE-TROUBLESHOOTING.md
4. Verify all checklist items

## 🚀 Your Site

**Live URL:** https://minhaj47.github.io/portfolio/

_Remember: Images work perfectly in your build. The only thing that can cause issues is the GitHub Pages source setting!_
