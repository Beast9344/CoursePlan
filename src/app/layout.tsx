import type {Metadata} from 'next';
import './globals.css';
import {AppLayout} from '@/components/layout/AppLayout';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

export const metadata: Metadata = {
  title: 'Payroll Fundamentals',
  description: 'Your AI-powered learning assistant for Payroll Fundamentals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <AppLayout>{children}</AppLayout>
        <Toaster />
      </body>
    </html>
  );
}
