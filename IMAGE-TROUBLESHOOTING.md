# Image Loading Troubleshooting Guide

## ✅ Your Build is Working Correctly!

I've verified that your build includes all images:
- ✅ `profile.jpg` - 121KB
- ✅ `profile1.jpeg` - 113KB
- ✅ `hackathon/` folder with 8 images (total ~45MB)

## Why Images Might Not Show on GitHub Pages

### 1. **Build Configuration** (Already Fixed ✅)

Your `next.config.ts` is correctly configured:
```typescript
output: 'export'              // ✅ Static export enabled
images: { unoptimized: true } // ✅ Required for static export
basePath: '/portfolio'        // ✅ Matches your repo name
```

### 2. **Image Paths** (Verify These)

Make sure all images in your components use paths starting with `/`:

**✅ CORRECT:**
```tsx
<Image src="/profile.jpg" alt="Profile" width={200} height={200} />
<Image src="/hackathon/hack1.jpg" alt="Hackathon" width={400} height={300} />
```

**❌ WRONG:**
```tsx
<Image src="profile.jpg" alt="Profile" />        // Missing leading slash
<Image src="./profile.jpg" alt="Profile" />      // Don't use relative paths
```

### 3. **GitHub Pages Configuration** (Critical!)

**You MUST enable GitHub Pages to use GitHub Actions:**

1. Go to: `https://github.com/minhaj47/portfolio/settings/pages`
2. Under **"Source"**, select **"GitHub Actions"** (not "Deploy from a branch")
3. Save the setting

### 4. **Deployment Process**

After pushing to GitHub:

1. **Wait 2-3 minutes** for the Action to complete
2. Check Actions tab: `https://github.com/minhaj47/portfolio/actions`
3. Look for a green checkmark ✓
4. Visit: `https://minhaj47.github.io/portfolio/`

### 5. **Testing Locally**

Test the production build locally before deploying:

```bash
# Build the site
npm run build

# Serve it locally
cd out && python3 -m http.server 8000
```

Then open: `http://localhost:8000/portfolio/`

**Important:** Use `/portfolio/` path to simulate GitHub Pages subdirectory!

### 6. **Common Issues & Solutions**

#### Issue: Images show locally but not on GitHub Pages

**Solution:**
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check browser console (F12) for 404 errors
- Verify the exact path being requested

#### Issue: 404 errors for images

**Expected URL:**
```
https://minhaj47.github.io/portfolio/profile.jpg  ✅
```

**Wrong URLs:**
```
https://minhaj47.github.io/profile.jpg            ❌ Missing basePath
/profile.jpg                                      ❌ Absolute from root
```

#### Issue: Only some images load

**Check:**
- File names are case-sensitive (`hack5.JPG` vs `hack5.jpg`)
- All images are in the `public/` directory
- No special characters in filenames

### 7. **Debug Steps**

If images still don't show:

```bash
# 1. Check if images are in the build
ls -la out/

# 2. Check specific images
ls -la out/hackathon/

# 3. Verify .nojekyll exists
ls -la out/.nojekyll

# 4. Test the build script
npm run test:build
```

### 8. **Browser Console Debugging**

Open browser console (F12) and check for:

```
Failed to load resource: https://minhaj47.github.io/portfolio/profile.jpg
```

This tells you the exact URL being requested and helps identify path issues.

### 9. **Verify in Built HTML**

Check the generated HTML:

```bash
# Search for image paths in the built HTML
grep -r "profile" out/index.html
```

Should show paths like: `/portfolio/profile.jpg` or `/_next/static/...`

## Quick Checklist

Before deploying, verify:

- [ ] All images are in `public/` folder
- [ ] Image paths start with `/` in components
- [ ] Build completes successfully: `npm run build`
- [ ] Images exist in `out/` directory after build
- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] Waited 2-3 minutes after push for deployment
- [ ] Cleared browser cache after deployment

## Test Commands

```bash
# Full test
npm run test:build

# Quick build test
npm run build && ls -la out/ | grep -E "(jpg|jpeg|png|JPG)"

# Local preview
npm run build && cd out && python3 -m http.server 8000
```

## Still Having Issues?

1. **Check the Actions log** on GitHub for build errors
2. **Compare URLs** - what's in the HTML vs what's being requested
3. **Try incognito mode** to rule out caching
4. **Check file permissions** - images should be readable

## Next.js Image Component Behavior

With `output: 'export'` and `unoptimized: true`:
- Images are copied as-is to the `out/` directory
- The `basePath` is automatically prepended
- No image optimization occurs (images keep original size)

Your configuration is correct! The most common issue is the GitHub Pages source setting.
