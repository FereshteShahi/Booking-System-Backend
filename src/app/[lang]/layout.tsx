// app/[lang]/layout.tsx
import { notFound } from 'next/navigation';
import NavBar from '../../components/NavBar';
import Footer from "@/src/components/Footer";
import '@/src/app/globals.css';
import ScrollToTop from "@/src/components/ScrollToTop";

const locales = ['de', 'tr'];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!locales.includes(params.lang)) {
    notFound();
  }

  return (
    <html lang={params.lang}>
      <body className='pt-25 md:pt-35'>
        <NavBar currentLang={params.lang as 'de' | 'tr'} />
        {children}
         <ScrollToTop />
        <Footer currentLang={params.lang as 'de' | 'tr'} />
             

      </body>
    </html>
  );
}
