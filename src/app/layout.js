import { CursorProvider } from '@/context/CursorContext';
import CustomCursor from '@/components/CustomCursor';
import { metropolis } from './utils/local-font';
import '../../node_modules/image-compare-viewer/dist/image-compare-viewer.min.css';
import 'animate.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={metropolis.className}>
      <head>
        <title>Diana Tofan</title>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body>
        <CursorProvider>
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
