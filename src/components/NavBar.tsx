'use client';

import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

export default function NavBar({ currentLang }: { currentLang: 'de' | 'tr' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navData = require(`../data/${currentLang}.json`);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleSectionNavigation = (sectionId: string) => {
    if (pathname === `/${currentLang}` || pathname === `/${currentLang}/`) {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -100; // Höhe der festen Navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setMenuOpen(false);
    } else {
      router.push(`/${currentLang}/#${sectionId}`);
    }
  };

  const navClass = clsx(
    'fixed top-0 left-0 w-full h-20 shadow-md flex items-center justify-between px-4 lg:px-10 transition-colors duration-300 z-[100]',
    {
      'bg-[var(--color-bg-navi)]': !isScrolled,
      'bg-[var(--color-bg-navi-scrolled)]': isScrolled,
    }
  );

  return (
    <>
      {/* Top Navbar (Mobile + Tablet) */}
      {!menuOpen && (
        <nav className={`${navClass} lg:hidden`}>
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8 text-[var(--color-heading)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href={`/${currentLang}`}>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={60}
              height={50}
              className="rounded-full"
              priority
            />
          </Link>

          <LanguageSwitcher />
        </nav>
      )}

      {/* Mobile Menu (Mobile + Tablet) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen z-[90] bg-[var(--color-bg-navi-mobile)] flex flex-col items-center justify-center gap-8 text-2xl lg:hidden"
          >
            <button
              className="absolute top-6 left-6"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8 text-[var(--color-heading)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button onClick={() => handleSectionNavigation('home')}>{navData.nav.home}</button>
            <Link href={`/${currentLang}/about`} onClick={() => setMenuOpen(false)}>{navData.nav.about}</Link>
            <button onClick={() => handleSectionNavigation('angebote')}>{navData.nav.angebote}</button>
            <button onClick={() => handleSectionNavigation('costs')}>{navData.nav.cost}</button>
            <Link href={`/${currentLang}/contact`} onClick={() => setMenuOpen(false)}>{navData.nav.contact}</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <div className={clsx(
        'hidden lg:flex fixed top-0 left-0 w-full h-30 shadow-md z-[100] items-center justify-between px-10 transition-colors duration-300',
        {
          'bg-[var(--color-bg-navi)]': !isScrolled,
          'bg-[var(--color-bg-navi-scrolled)]': isScrolled,
        }
      )}>
        {/* Left Links */}
        <div className="flex gap-4 lg:gap-4">
          <button onClick={() => handleSectionNavigation('home')} className='text-xl lg:text-2xl'>{navData.nav.home}</button>
          <Link href={`/${currentLang}/about`} className='text-xl lg:text-2xl'>{navData.nav.about}</Link>
          <button onClick={() => handleSectionNavigation('angebote')} className='text-xl lg:text-2xl'>{navData.nav.angebote}</button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 ">
          <Link href={`/${currentLang}`}>
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={100}
              height={80}
              className="rounded-full lg:mr-1 "
              priority
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button onClick={() => handleSectionNavigation('costs')} className='text-xl lg:text-2xl'>{navData.nav.cost}</button>
          <Link href={`/${currentLang}/contact`} className='text-xl lg:text-2xl'>{navData.nav.contact}</Link>
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
}
