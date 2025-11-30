/** @type {import('next').NextConfig} */

// Detect if we're building for GitHub Pages
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'webcv'; // Change this to your repo name

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages deployment
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}/` : '',
  // Ensure trailing slashes for static export
  trailingSlash: true,
}

module.exports = nextConfig
