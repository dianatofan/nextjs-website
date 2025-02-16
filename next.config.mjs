import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: isProduction ? 'export' : 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath: isProduction ? '/nextjs-website' : '',
  images: {
    unoptimized: true, // Ensure images are not optimized for static export
  },
  optimizeFonts: false,
};

export default nextConfig;
