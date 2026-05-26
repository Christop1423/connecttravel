import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ConnectTravel - B2B Travel Marketplace',
  description: 'Connecting Tour Operators with Travel Agencies worldwide',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        {children}
      </body>
    </html>
  );
}
