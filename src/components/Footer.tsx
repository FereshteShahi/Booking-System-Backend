import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

export default function Footer({ currentLang }: { currentLang: 'de' | 'tr' }) {
  const footerData = require(`../data/${currentLang}.json`);

  return (
    <div className="flex justify-between text-[11px] bg-[var(--color-button-hover)]  px-7 py-1  md:p-3 md:text-lg">
      <Image
  src="/images/logo.jpg"
  alt="Logo"
  width={35}
  height={45}
  className="rounded-full md:w-[60px] md:h-[65px]"
  priority
/>

        <div className="flex justify-center items-center ">
      <Link href={`/${currentLang}/impressum`} className="font-bold   ">
        {footerData.footer.impressum}
      </Link>

      <Link href={`/${currentLang}/datenschutz`} className="font-bold ml-[-15] ">
        {footerData.footer.datenschutz}
      </Link>
      </div>
    </div>
  );
} 
