"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let revealObserver: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
    }

    if (revealObserver) {
      reveals.forEach((element) => revealObserver.observe(element));
    } else {
      reveals.forEach((element) => element.classList.add("visible"));
    }

    const faqItems = Array.from(document.querySelectorAll<HTMLElement>("[data-faq]"));
    const faqCleanups = faqItems.map((item) => {
      const question = item.querySelector<HTMLElement>(".faq-q");
      if (!question) return () => undefined;

      const onClick = () => {
        const isOpen = item.classList.contains("open");
        faqItems.forEach((faqItem) => faqItem.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      };

      question.addEventListener("click", onClick);
      return () => question.removeEventListener("click", onClick);
    });

    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (nav) {
        nav.style.background = window.scrollY > 60 ? "rgba(8,12,11,0.97)" : "rgba(8,12,11,0.85)";
      }

      document.querySelectorAll<HTMLElement>(".design-system-layout .section[id]").forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;
        const link = document.querySelector<HTMLElement>(`.sidebar .nav-link[href="#${section.id}"]`);
        if (!link) return;
        link.classList.toggle("active", window.scrollY >= sectionTop && window.scrollY < sectionBottom);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver?.disconnect();
      faqCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
