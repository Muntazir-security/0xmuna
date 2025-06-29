#!/usr/bin/env node

/**
 * SEO Validation Script for Muntazir Mehdi Portfolio
 * 
 * This script validates SEO implementation including meta tags, structured data,
 * sitemap, robots.txt, and other SEO best practices.
 * 
 * Usage: node scripts/validate-seo.js
 */

const fs = require('fs');
const path = require('path');

// File paths
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');

/**
 * Colors for console output
 */
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

/**
 * Validation results tracker
 */
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  details: []
};

function addResult(type, category, test, status, message, recommendation = '') {
  results.details.push({ type, category, test, status, message, recommendation });
  results[status === 'PASS' ? 'passed' : status === 'FAIL' ? 'failed' : 'warnings']++;
}

/**
 * Read and parse HTML file
 */
function readHtmlFile() {
  try {
    return fs.readFileSync(indexHtmlPath, 'utf8');
  } catch (error) {
    log(colors.red, `❌ Error reading index.html: ${error.message}`);
    return null;
  }
}

/**
 * Validate essential meta tags
 */
function validateMetaTags(html) {
  const metaTests = [
    {
      test: 'Title Tag',
      regex: /<title>([^<]*)<\/title>/i,
      validate: (match) => match && match[1].length >= 30 && match[1].length <= 60,
      message: 'Title tag should be 30-60 characters',
      recommendation: 'Current title length: ' + (html.match(/<title>([^<]*)<\/title>/i)?.[1]?.length || 0)
    },
    {
      test: 'Meta Description',
      regex: /<meta\s+name="description"\s+content="([^"]*)"/i,
      validate: (match) => match && match[1].length >= 120 && match[1].length <= 160,
      message: 'Meta description should be 120-160 characters',
      recommendation: 'Current description length: ' + (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.length || 0)
    },
    {
      test: 'Meta Keywords',
      regex: /<meta\s+name="keywords"\s+content="([^"]*)"/i,
      validate: (match) => match && match[1].length > 0,
      message: 'Meta keywords present',
      recommendation: 'Consider if keywords are still relevant for your SEO strategy'
    },
    {
      test: 'Canonical URL',
      regex: /<link\s+rel="canonical"\s+href="([^"]*)"/i,
      validate: (match) => match,
      message: 'Canonical URL helps prevent duplicate content issues',
      recommendation: 'Add canonical URL: <link rel="canonical" href="https://muntazirmehdi.com/">'
    },
    {
      test: 'Viewport Meta Tag',
      regex: /<meta\s+name="viewport"\s+content="([^"]*)"/i,
      validate: (match) => match && match[1].includes('width=device-width'),
      message: 'Viewport meta tag for mobile responsiveness',
      recommendation: 'Viewport tag is properly configured'
    }
  ];

  metaTests.forEach(testCase => {
    const match = html.match(testCase.regex);
    const isValid = testCase.validate(match);
    
    addResult(
      'meta',
      'Meta Tags',
      testCase.test,
      isValid ? 'PASS' : 'FAIL',
      testCase.message,
      testCase.recommendation
    );
  });
}

/**
 * Validate Open Graph tags
 */
function validateOpenGraph(html) {
  const ogTests = [
    { tag: 'og:title', required: true },
    { tag: 'og:description', required: true },
    { tag: 'og:image', required: true },
    { tag: 'og:url', required: true },
    { tag: 'og:type', required: true },
    { tag: 'og:site_name', required: false },
    { tag: 'og:locale', required: false }
  ];

  ogTests.forEach(test => {
    const regex = new RegExp(`<meta\\s+property="${test.tag}"\\s+content="([^"]*)"`, 'i');
    const match = html.match(regex);
    const isPresent = match && match[1].length > 0;
    
    addResult(
      'og',
      'Open Graph',
      test.tag,
      isPresent ? 'PASS' : (test.required ? 'FAIL' : 'WARN'),
      isPresent ? `${test.tag} present` : `${test.tag} missing`,
      test.required ? 'Required for social media sharing' : 'Optional but recommended'
    );
  });
}

/**
 * Validate Twitter Card tags
 */
function validateTwitterCards(html) {
  const twitterTests = [
    { tag: 'twitter:card', required: true },
    { tag: 'twitter:title', required: true },
    { tag: 'twitter:description', required: true },
    { tag: 'twitter:image', required: true },
    { tag: 'twitter:creator', required: false },
    { tag: 'twitter:site', required: false }
  ];

  twitterTests.forEach(test => {
    const regex = new RegExp(`<meta\\s+(?:name|property)="${test.tag}"\\s+content="([^"]*)"`, 'i');
    const match = html.match(regex);
    const isPresent = match && match[1].length > 0;
    
    addResult(
      'twitter',
      'Twitter Cards',
      test.tag,
      isPresent ? 'PASS' : (test.required ? 'FAIL' : 'WARN'),
      isPresent ? `${test.tag} present` : `${test.tag} missing`,
      test.required ? 'Required for Twitter card display' : 'Optional but recommended'
    );
  });
}

/**
 * Validate structured data (JSON-LD)
 */
function validateStructuredData(html) {
  const jsonLdRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  const matches = [...html.matchAll(jsonLdRegex)];
  
  if (matches.length === 0) {
    addResult('schema', 'Structured Data', 'JSON-LD Present', 'FAIL', 'No JSON-LD structured data found', 'Add JSON-LD for better search engine understanding');
    return;
  }

  matches.forEach((match, index) => {
    try {
      const jsonData = JSON.parse(match[1].trim());
      const schemas = Array.isArray(jsonData) ? jsonData : [jsonData];
      
      schemas.forEach((schema, schemaIndex) => {
        addResult(
          'schema',
          'Structured Data',
          `Schema ${index + 1}.${schemaIndex + 1} (${schema['@type']})`,
          'PASS',
          `Valid ${schema['@type']} schema found`,
          'Schema.org markup enhances search results'
        );
      });
    } catch (error) {
      addResult(
        'schema',
        'Structured Data',
        `Schema ${index + 1}`,
        'FAIL',
        'Invalid JSON-LD syntax',
        `Fix JSON syntax error: ${error.message}`
      );
    }
  });
}

/**
 * Validate sitemap.xml
 */
function validateSitemap() {
  if (!fs.existsSync(sitemapPath)) {
    addResult('sitemap', 'Sitemap', 'Sitemap Exists', 'FAIL', 'sitemap.xml not found', 'Create sitemap.xml in public directory');
    return;
  }

  try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    
    // Check XML structure
    if (!sitemapContent.includes('<?xml version="1.0" encoding="UTF-8"?>')) {
      addResult('sitemap', 'Sitemap', 'XML Declaration', 'FAIL', 'Missing XML declaration', 'Add XML declaration at the top');
    } else {
      addResult('sitemap', 'Sitemap', 'XML Declaration', 'PASS', 'Valid XML declaration', '');
    }

    // Check namespace
    if (!sitemapContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
      addResult('sitemap', 'Sitemap', 'XML Namespace', 'FAIL', 'Missing sitemap namespace', 'Add proper sitemap namespace');
    } else {
      addResult('sitemap', 'Sitemap', 'XML Namespace', 'PASS', 'Valid sitemap namespace', '');
    }

    // Count URLs
    const urlMatches = sitemapContent.match(/<url>/g);
    const urlCount = urlMatches ? urlMatches.length : 0;
    
    addResult(
      'sitemap',
      'Sitemap',
      'URL Count',
      urlCount > 0 ? 'PASS' : 'FAIL',
      `${urlCount} URLs found in sitemap`,
      urlCount > 0 ? 'Good URL coverage' : 'Add URLs to sitemap'
    );

  } catch (error) {
    addResult('sitemap', 'Sitemap', 'Sitemap Parsing', 'FAIL', `Error reading sitemap: ${error.message}`, 'Fix sitemap file');
  }
}

/**
 * Validate robots.txt
 */
function validateRobotsTxt() {
  if (!fs.existsSync(robotsPath)) {
    addResult('robots', 'Robots.txt', 'Robots.txt Exists', 'FAIL', 'robots.txt not found', 'Create robots.txt in public directory');
    return;
  }

  try {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    
    // Check for sitemap reference
    if (robotsContent.includes('Sitemap:')) {
      addResult('robots', 'Robots.txt', 'Sitemap Reference', 'PASS', 'Sitemap referenced in robots.txt', '');
    } else {
      addResult('robots', 'Robots.txt', 'Sitemap Reference', 'FAIL', 'No sitemap reference found', 'Add "Sitemap: https://muntazirmehdi.com/sitemap.xml"');
    }

    // Check for user-agent directives
    if (robotsContent.includes('User-agent:')) {
      addResult('robots', 'Robots.txt', 'User-agent Directives', 'PASS', 'User-agent directives found', '');
    } else {
      addResult('robots', 'Robots.txt', 'User-agent Directives', 'FAIL', 'No user-agent directives', 'Add proper user-agent directives');
    }

  } catch (error) {
    addResult('robots', 'Robots.txt', 'Robots.txt Parsing', 'FAIL', `Error reading robots.txt: ${error.message}`, 'Fix robots.txt file');
  }
}

/**
 * Display results summary
 */
function displayResults() {
  console.log('\n' + '='.repeat(80));
  log(colors.bold + colors.blue, '🔍 SEO VALIDATION RESULTS');
  console.log('='.repeat(80));

  // Summary
  const total = results.passed + results.failed + results.warnings;
  log(colors.green, `✅ Passed: ${results.passed}/${total}`);
  log(colors.red, `❌ Failed: ${results.failed}/${total}`);
  log(colors.yellow, `⚠️  Warnings: ${results.warnings}/${total}`);

  // Overall score
  const score = Math.round((results.passed / total) * 100);
  const scoreColor = score >= 90 ? colors.green : score >= 70 ? colors.yellow : colors.red;
  log(scoreColor + colors.bold, `📊 SEO Score: ${score}%`);

  // Detailed results by category
  const categories = [...new Set(results.details.map(r => r.category))];
  
  categories.forEach(category => {
    console.log('\n' + '-'.repeat(60));
    log(colors.bold, `📁 ${category.toUpperCase()}`);
    console.log('-'.repeat(60));

    const categoryResults = results.details.filter(r => r.category === category);
    categoryResults.forEach(result => {
      const statusIcon = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⚠️';
      const statusColor = result.status === 'PASS' ? colors.green : result.status === 'FAIL' ? colors.red : colors.yellow;
      
      console.log(`${statusIcon} ${result.test}`);
      log(statusColor, `   ${result.message}`);
      if (result.recommendation) {
        log(colors.blue, `   💡 ${result.recommendation}`);
      }
    });
  });

  console.log('\n' + '='.repeat(80));
  
  // Recommendations
  const failedTests = results.details.filter(r => r.status === 'FAIL');
  if (failedTests.length > 0) {
    log(colors.red + colors.bold, '🚨 CRITICAL ISSUES TO FIX:');
    failedTests.forEach((test, index) => {
      console.log(`${index + 1}. ${test.test}: ${test.recommendation}`);
    });
    console.log();
  }

  const warningTests = results.details.filter(r => r.status === 'WARN');
  if (warningTests.length > 0) {
    log(colors.yellow + colors.bold, '💡 RECOMMENDATIONS:');
    warningTests.forEach((test, index) => {
      console.log(`${index + 1}. ${test.test}: ${test.recommendation}`);
    });
  }
}

/**
 * Main validation function
 */
function main() {
  log(colors.bold + colors.blue, '🚀 Starting SEO Validation for Muntazir Mehdi Portfolio...\n');

  const html = readHtmlFile();
  if (!html) {
    process.exit(1);
  }

  // Run all validations
  validateMetaTags(html);
  validateOpenGraph(html);
  validateTwitterCards(html);
  validateStructuredData(html);
  validateSitemap();
  validateRobotsTxt();

  // Display results
  displayResults();

  // Exit with appropriate code
  const exitCode = results.failed > 0 ? 1 : 0;
  log(colors.bold, `\n🏁 Validation completed with exit code: ${exitCode}`);
  process.exit(exitCode);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, validateMetaTags, validateOpenGraph, validateTwitterCards, validateStructuredData }; 