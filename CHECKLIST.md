# Pre-Deployment Checklist

Before deploying to GitHub Pages, make sure you've completed these steps:

## ✅ Content Updates

- [ ] Update personal information in components
- [ ] Replace placeholder text with your actual content
- [ ] Add your projects to the Projects section
- [ ] Update skills and technologies
- [ ] Add your profile image to `public/profile.jpg`
- [ ] Update social media links (GitHub, LinkedIn, etc.)

## ✅ SEO & Metadata

- [ ] Update page title and description in `app/layout.tsx`
- [ ] Add Open Graph metadata for social sharing
- [ ] Create a custom favicon (replace `app/favicon.ico`)
- [ ] Add meta descriptions for better SEO

## ✅ Testing

- [ ] Test responsive design on mobile devices
- [ ] Verify all links work correctly
- [ ] Test dark mode functionality
- [ ] Check all images load properly
- [ ] Validate forms (if any)
- [ ] Test navigation and scroll behavior
- [ ] Run `npm run build` locally to check for errors

## ✅ Performance

- [ ] Optimize images (compress large files)
- [ ] Remove unused dependencies
- [ ] Check Core Web Vitals in development
- [ ] Verify smooth animations and transitions

## ✅ Code Quality

- [ ] Run `npm run lint` and fix any issues
- [ ] Remove console.logs from production code
- [ ] Check for TypeScript errors
- [ ] Review and clean up commented code

## ✅ Configuration

- [ ] Verify `next.config.ts` settings
- [ ] Check that `.gitignore` includes necessary files
- [ ] Review GitHub Actions workflow file
- [ ] Confirm repository name matches basePath in config

## ✅ GitHub Setup

- [ ] Create repository: `https://github.com/minhaj47/portfolio`
- [ ] Initialize git and commit all changes
- [ ] Push to main branch
- [ ] Enable GitHub Pages in repository settings
- [ ] Set source to "GitHub Actions"

## ✅ Post-Deployment

- [ ] Verify site loads at: `https://minhaj47.github.io/portfolio`
- [ ] Test all functionality on live site
- [ ] Check for any broken links or images
- [ ] Test on different devices and browsers
- [ ] Share your portfolio link!

## 🔧 Common Issues

**Images not loading?**
- Ensure image paths are relative (e.g., `/profile.jpg`)
- The basePath will be automatically prepended

**CSS not working?**
- Check that the build completed successfully
- Verify GitHub Actions workflow ran without errors

**404 errors?**
- Confirm GitHub Pages source is set to "GitHub Actions"
- Wait a few minutes for DNS propagation

**Need to update content?**
- Just push changes to main branch
- GitHub Actions will automatically redeploy

## 📚 Additional Resources

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
