#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script optimizes images in the public folder by:
 * - Resizing large images to reasonable dimensions
 * - Compressing images to reduce file size
 * - Converting to WebP format for better compression
 * 
 * Run: node optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');
const BACKUP_DIR = path.join(__dirname, 'public-backup');

// Configuration
const CONFIG = {
  maxWidth: 1920,
  maxHeight: 1920,
  quality: 80,
  formats: ['webp', 'original'], // Generate WebP and keep original
  excludePatterns: [/\.svg$/, /\.ico$/],
};

async function optimizeImage(inputPath, outputPath, options = {}) {
  const ext = path.extname(inputPath).toLowerCase();
  
  // Skip non-image files
  if (CONFIG.excludePatterns.some(pattern => pattern.test(inputPath))) {
    console.log(`⏭️  Skipping: ${path.basename(inputPath)}`);
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`📸 Processing: ${path.basename(inputPath)} (${metadata.width}x${metadata.height}, ${(metadata.size / 1024).toFixed(0)}KB)`);

    // Resize if needed
    let processedImage = image;
    if (metadata.width > CONFIG.maxWidth || metadata.height > CONFIG.maxHeight) {
      processedImage = processedImage.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Generate WebP version
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await processedImage
      .clone()
      .webp({ quality: CONFIG.quality })
      .toFile(webpPath);
    
    const webpStats = await fs.stat(webpPath);
    console.log(`   ✅ WebP created: ${path.basename(webpPath)} (${(webpStats.size / 1024).toFixed(0)}KB)`);

    // Optimize original format (use temp file if input === output)
    const tempPath = outputPath + '.tmp';
    if (ext === '.jpg' || ext === '.jpeg') {
      await processedImage
        .jpeg({ quality: CONFIG.quality, progressive: true })
        .toFile(tempPath);
    } else if (ext === '.png') {
      await processedImage
        .png({ quality: CONFIG.quality, compressionLevel: 9 })
        .toFile(tempPath);
    }

    // Replace original with optimized version
    await fs.rename(tempPath, outputPath);

    const optimizedStats = await fs.stat(outputPath);
    const originalSize = metadata.size / 1024;
    const newSize = optimizedStats.size / 1024;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`   ✅ Optimized: ${path.basename(outputPath)} (${newSize.toFixed(0)}KB, saved ${savings}%)`);
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir, backupDir, outputDir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const inputPath = path.join(dir, entry.name);
    const backupPath = path.join(backupDir, entry.name);
    const outputPath = path.join(outputDir, entry.name);

    if (entry.isDirectory()) {
      // Create directories in backup and output
      await fs.mkdir(backupPath, { recursive: true });
      await fs.mkdir(outputPath, { recursive: true });
      
      // Process subdirectory
      await processDirectory(inputPath, backupPath, outputPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        // Backup original
        await fs.copyFile(inputPath, backupPath);
        
        // Optimize
        await optimizeImage(inputPath, outputPath);
      } else {
        // Just copy non-image files
        await fs.copyFile(inputPath, outputPath);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  try {
    // Check if sharp is installed
    try {
      require.resolve('sharp');
    } catch (e) {
      console.error('❌ Sharp is not installed. Please run: npm install --save-dev sharp');
      process.exit(1);
    }

    // Create backup directory
    console.log('📦 Creating backup...');
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    
    // Copy everything to backup first
    await fs.cp(PUBLIC_DIR, BACKUP_DIR, { recursive: true });
    console.log('✅ Backup created\n');

    // Process all images
    console.log('🔧 Optimizing images...\n');
    await processDirectory(PUBLIC_DIR, BACKUP_DIR, PUBLIC_DIR);

    console.log('\n✨ Image optimization complete!');
    console.log(`📁 Original files backed up to: ${BACKUP_DIR}`);
    console.log('\n💡 Tips:');
    console.log('   - WebP images are smaller and load faster');
    console.log('   - Original formats are optimized as fallbacks');
    console.log('   - Update your code to use WebP with fallbacks');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
