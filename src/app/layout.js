export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Diana Tofan</title>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
