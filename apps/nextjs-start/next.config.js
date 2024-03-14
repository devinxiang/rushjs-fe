/** @type {import('next').NextConfig} */
let commitHash = 'no-git-commit';
// Get git commit hash
try {
  commitHash = process.env.COMMIT_SHA || 'no-git-commit';
} catch (error) {
  console.error(`Get git commit hash failed.`);
}

console.log('commitHash', commitHash)
const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: async () => {
    return commitHash
  },
}

module.exports = nextConfig
