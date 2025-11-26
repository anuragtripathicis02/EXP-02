"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      document.body.classList.toggle("scrolled", scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
