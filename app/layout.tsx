import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from './components/navigation/Navigation';
import { NavigationMenu } from './components/navigation/menu/NavigationMenu';
import { SearchHeader } from './components/search/SearchHeader';
import { DecorativeCorner } from './components/DecorativeCorner';
import { Footer } from './components/footer/Footer';
import { BackgroundPattern } from './components/patterns/BackgroundPattern';

export const metadata: Metadata = {
  title: 'Kitchen Essentials Store',
  description: 'Find the best kitchen equipment for your cooking needs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body 
        className="bg-white flex flex-col min-h-screen font-cantarell overflow-x-hidden"
        suppressHydrationWarning
      >
        <DecorativeCorner />
        <Navigation />
        <SearchHeader />
        <div className="flex flex-1">
          <aside className="hidden md:block w-[239px] p-6 border-r border-gray-200 bg-white flex-shrink-0">
            <NavigationMenu />
          </aside>
          <main className="flex-1 relative">
            <BackgroundPattern />
            <div className="relative z-10">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}