// components/ScrollToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; 

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className=" ml-[50%] mt-[-20px] mb-2 bg-[#f9f0d9] text-green-800 shadow-lg hover:shadow-xl p-3 rounded-full transition hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp size={30} />
    </button>
  );
}
