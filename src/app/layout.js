import { metropolis } from './utils/local-font';

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
