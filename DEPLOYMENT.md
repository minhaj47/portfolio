# GitHub Pages Deployment Guide

## Setup Instructions

Follow these steps to deploy your portfolio to GitHub Pages:

### 1. Push to GitHub

If you haven't already, initialize git and push your project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/minhaj47/portfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/minhaj47/portfolio`
2. Click on **Settings** tab
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
5. Save the setting

**⚠️ CRITICAL:** This step is required for images to load correctly!

### 3. Automatic Deployment

The GitHub Action will automatically trigger when you push to the `main` branch. You can also manually trigger it from the Actions tab.

### 4. Access Your Site

Once deployed, your portfolio will be available at:
`https://minhaj47.github.io/portfolio`

## Configuration Details

### Next.js Configuration

The `next.config.ts` has been configured with:

- `output: 'export'` - Enables static HTML export
- `images.unoptimized: true` - Required for static export
- `basePath` and `assetPrefix` - Set to `/portfolio` for GitHub Pages subdirectory

### GitHub Actions Workflow

The workflow (`.github/workflows/deploy.yml`) automatically:

1. Checks out your code
2. Sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Builds the Next.js project
5. Uploads the `out` directory
6. Deploys to GitHub Pages

## Manual Build

To test the production build locally:

```bash
npm run build
```

This will create an `out` directory with your static site.

## Troubleshooting

### Images Not Loading

**This is the most common issue!** See detailed solutions in [IMAGE-TROUBLESHOOTING.md](IMAGE-TROUBLESHOOTING.md)

**Quick fixes:**

1. Verify GitHub Pages source is set to "GitHub Actions" (not "Deploy from a branch")
2. Wait 2-3 minutes after deployment for changes to appear
3. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
4. Check browser console (F12) for 404 errors

If images are not showing on GitHub Pages:

1. **Check the browser console** for 404 errors - this will show the actual path being requested
2. **Verify basePath** - Images should load from `https://minhaj47.github.io/portfolio/profile.jpg`
3. **Clear browser cache** - Hard refresh with Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
4. **Wait for deployment** - It can take 2-3 minutes for changes to appear

**Common Image Issues:**

- ✅ **Use Next.js Image component**: `import Image from "next/image"`
- ✅ **Use relative paths**: `/profile.jpg` not `profile.jpg`
- ✅ **Files in public folder**: All images must be in `/public/` directory
- ✅ **Case-sensitive**: `hack5.JPG` vs `hack5.jpg` matters on GitHub Pages

**Example correct usage:**

```tsx
import Image from "next/image";

<Image src="/profile.jpg" alt="Profile" width={200} height={200} />;
```

### Other Issues

- **404 errors**: Make sure GitHub Pages is set to use GitHub Actions as the source
- **CSS not loading**: Check that the basePath is correctly configured
- **Build fails**: Review the Actions tab for error logs
- **Blank page**: Check browser console for JavaScript errors

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Updating Your Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Action will automatically rebuild and redeploy your site.
