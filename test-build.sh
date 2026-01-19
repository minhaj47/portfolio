#!/bin/bash

# Test Build Script for GitHub Pages Deployment
# This script helps verify your build will work correctly on GitHub Pages

echo "🔍 Testing Next.js Static Export for GitHub Pages"
echo "=================================================="
echo ""

# Step 1: Clean previous builds
echo "Step 1: Cleaning previous builds..."
rm -rf .next out
echo "✅ Cleaned"
echo ""

# Step 2: Build the project
echo "Step 2: Building the project..."
NODE_ENV=production npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Check the errors above."
    exit 1
fi
echo "✅ Build successful"
echo ""

# Step 3: Check if out directory exists
echo "Step 3: Verifying output directory..."
if [ ! -d "out" ]; then
    echo "❌ 'out' directory not found!"
    echo "   Make sure 'output: \"export\"' is set in next.config.ts"
    exit 1
fi
echo "✅ Output directory created"
echo ""

# Step 4: Check for .nojekyll
echo "Step 4: Checking for .nojekyll..."
if [ ! -f "out/.nojekyll" ]; then
    echo "⚠️  .nojekyll not found, creating it..."
    touch out/.nojekyll
fi
echo "✅ .nojekyll present"
echo ""

# Step 5: List generated files
echo "Step 5: Generated files in 'out' directory:"
ls -lh out/ | head -20
echo ""

# Step 6: Check for images
echo "Step 6: Checking images..."
if [ -f "out/profile.jpg" ]; then
    echo "✅ profile.jpg found"
else
    echo "⚠️  profile.jpg not found in out directory"
fi

if [ -f "out/profile1.jpeg" ]; then
    echo "✅ profile1.jpeg found"
else
    echo "⚠️  profile1.jpeg not found in out directory"
fi

if [ -d "out/hackathon" ]; then
    echo "✅ hackathon directory found"
    echo "   Files: $(ls out/hackathon | wc -l) images"
else
    echo "⚠️  hackathon directory not found in out directory"
fi
echo ""

# Step 7: Check HTML files
echo "Step 7: Checking HTML files..."
html_count=$(find out -name "*.html" | wc -l)
echo "✅ Found $html_count HTML file(s)"
echo ""

# Step 8: Test with local server (optional)
echo "Step 8: Testing locally..."
echo "=================================================="
echo ""
echo "✅ Build test complete!"
echo ""
echo "To test locally with the production build:"
echo "  cd out && python3 -m http.server 8000"
echo ""
echo "Then open: http://localhost:8000/portfolio/"
echo "(Note: The /portfolio/ path simulates GitHub Pages subdirectory)"
echo ""
echo "Or use npx serve:"
echo "  npx serve out -p 8000"
echo ""
