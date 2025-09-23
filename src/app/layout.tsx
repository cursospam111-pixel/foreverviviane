import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Forever Aloe Vera Gel',
  description: 'O mais puro suco de Aloe Vera.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased font-light">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
