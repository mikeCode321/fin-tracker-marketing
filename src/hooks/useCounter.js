import { useEffect, useRef, useState } from 'react';

export const useCounter = (target) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const dur = target > 10 ? 1400 : 700;
            const start = performance.now();
            
            const tick = (now) => {
              const t = Math.min((now - start) / dur, 1);
              const ease = 1 - Math.pow(1 - t, 3);
              setCount(Math.round(ease * target));
              
              if (t < 1) {
                requestAnimationFrame(tick);
              }
            };
            
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [target]);

  return { count, ref };
};