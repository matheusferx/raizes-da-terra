import { useEffect, useRef, useState } from 'react';

export default function ScrollRevealSection({ children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current; 
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`reveal-section ${isVisible ? 'active' : ''}`}
    >
      {children}
    </section>
  );
}
