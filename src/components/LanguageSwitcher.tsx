'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const currentLang = params.lang as 'de' | 'tr';
  const switchLang = currentLang === 'de' ? 'tr' : 'de';
  const newPath = pathname.replace(`/${currentLang}`, `/${switchLang}`);

  const handleClick = () => {
    if (pathname !== newPath) {
      router.push(newPath);
    }
  };

  return (
    <div>
    <button onClick={handleClick} className='btndetr'>
      {switchLang.toUpperCase()}
    </button>
       
    </div>
    
  );
}
