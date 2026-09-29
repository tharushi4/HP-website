import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TerraVenture | Luxury Expeditions & Experiential Travel',
  description: 'Handcrafted luxury journeys and small-group expeditions to the world’s most breathtaking natural and cultural wonders.',
  keywords: ['luxury travel', 'tourism', 'expeditions', 'safari', 'alps trek', 'amalfi coast', 'kyoto'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
