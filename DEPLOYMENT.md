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
4. Under **Source**, select **GitHub Actions**

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

- **404 errors**: Make sure GitHub Pages is set to use GitHub Actions as the source
- **Images not loading**: Verify all image paths are relative
- **CSS not loading**: Check that the basePath is correctly configured
- **Build fails**: Review the Actions tab for error logs

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
