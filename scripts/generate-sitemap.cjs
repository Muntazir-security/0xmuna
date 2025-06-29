#!/usr/bin/env node

/**
 * Dynamic Sitemap Generator for Muntazir Mehdi Portfolio
 * 
 * This script generates a sitemap.xml file based on the routes and project data
 * in the portfolio website. It can be run manually or integrated into the build process.
 * 
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  domain: 'https://muntazirmehdi.com',
  outputPath: path.join(__dirname, '..', 'public', 'sitemap.xml'),
  lastModified: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
};

// Static routes configuration
const staticRoutes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: config.lastModified
  },
  {
    path: '/#about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: config.lastModified
  },
  {
    path: '/#portfolio',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: config.lastModified
  },
  {
    path: '/#contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: config.lastModified
  }
];

// Project data (mirrored from Portfolio.tsx)
const projectsData = [
  {
    id: 1,
    title: "Mitigating TCP SYN Flooding-Based DDoS Attack in SDN",
    description: "Advanced anomaly detection system protecting Software-Defined Networks from DDoS attacks",
    category: "Network Security"
  },
  {
    id: 2,
    title: "SABB Bank Management System",
    description: "Comprehensive Python-based banking system featuring multi-level authentication",
    category: "Financial Software"
  },
  {
    id: 3,
    title: "University Information Management System",
    description: "Intelligent recommendation engine for Malaysian Ministry of Higher Education",
    category: "Educational Technology"
  },
  {
    id: 4,
    title: "APU e-Bookstore Database Management System",
    description: "Robust database system for APU's e-Bookstore with normalized design",
    category: "Database Systems"
  },
  {
    id: 5,
    title: "Minimart Management System",
    description: "Low-level Assembly Language application for minimart operations",
    category: "Retail Management"
  },
  {
    id: 6,
    title: "Personal Task Management System",
    description: "Efficient CLI-based task management solution built in C",
    category: "Productivity Tools"
  }
];

// Static assets
const staticAssets = [
  {
    path: '/assets/documents/Muntazir Mehdi CV.pdf',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: config.lastModified
  }
];

/**
 * Generate URL entry for sitemap
 */
function generateUrlEntry(url, changefreq, priority, lastmod) {
  return `  <url>
    <loc>${config.domain}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

/**
 * Generate project URL entries
 */
function generateProjectUrls() {
  return projectsData.map(project => 
    generateUrlEntry(
      `/project/${project.id}`,
      'monthly',
      '0.8',
      config.lastModified
    )
  ).join('\n\n');
}

/**
 * Generate static route URL entries
 */
function generateStaticUrls() {
  return staticRoutes.map(route =>
    generateUrlEntry(
      route.path,
      route.changefreq,
      route.priority,
      route.lastmod
    )
  ).join('\n\n');
}

/**
 * Generate static asset URL entries
 */
function generateAssetUrls() {
  return staticAssets.map(asset =>
    generateUrlEntry(
      asset.path,
      asset.changefreq,
      asset.priority,
      asset.lastmod
    )
  ).join('\n\n');
}

/**
 * Generate complete sitemap XML
 */
function generateSitemap() {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${generateStaticUrls()}

  <!-- Project Detail Pages -->
${generateProjectUrls()}

  <!-- Static Assets -->
${generateAssetUrls()}

</urlset>`;

  return sitemapContent;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  try {
    const sitemapContent = generateSitemap();
    
    // Ensure directory exists
    const outputDir = path.dirname(config.outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write sitemap file
    fs.writeFileSync(config.outputPath, sitemapContent, 'utf8');
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${config.outputPath}`);
    console.log(`🌐 Domain: ${config.domain}`);
    console.log(`📊 Total URLs: ${staticRoutes.length + projectsData.length + staticAssets.length}`);
    console.log(`📅 Last Modified: ${config.lastModified}`);
    
    // Display URL summary
    console.log('\n📋 URL Summary:');
    console.log(`   Static Pages: ${staticRoutes.length}`);
    console.log(`   Project Pages: ${projectsData.length}`);
    console.log(`   Assets: ${staticAssets.length}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Generating sitemap for Muntazir Mehdi Portfolio...\n');
  writeSitemap();
  console.log('\n🎉 Sitemap generation completed!');
}

// Run the script if called directly
if (require.main === module) {
  main();
}

module.exports = {
  generateSitemap,
  config,
  projectsData,
  staticRoutes,
  staticAssets
}; 