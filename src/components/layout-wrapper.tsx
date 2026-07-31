'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Pages where header and footer should be shown
  const showLayoutPages = ['/', '/projects', '/portofolio']; // ADD THE REST LATER

  const shouldShowLayout = showLayoutPages.includes(pathname);

  return (
    <>
      {shouldShowLayout && <Header />}
      <main className="flex-1">{children}</main>
      {shouldShowLayout && <Footer />}
    </>
  );
}