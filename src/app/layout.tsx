'use client';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityButton from './components/AccessibilityButton';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <Header />
          <AccessibilityButton />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
