import { useEffect } from 'react';

export default function useAnimateOnScroll(selector = '[data-animate]') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.getAttribute('data-delay')) || 0;

            setTimeout(() => {
              const animateClass = el.getAttribute('data-animate');
              if (animateClass) {
                el.classList.add(animateClass);
              }
              el.style.opacity = '1';
              observer.unobserve(el);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}
