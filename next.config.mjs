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
  assetPrefix: isProduction ? 'https://dianatofan.net/' : '',
  basePath: '',
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
