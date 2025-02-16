import { metropolis } from './utils/local-font';
import '../../node_modules/image-compare-viewer/dist/image-compare-viewer.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={metropolis.className}>
      <head>
        <title>Diana Tofan</title>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
