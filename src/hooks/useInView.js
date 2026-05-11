import { useEffect, useRef, useState } from "react";

const useInView = (options = { threshold: 0.15, once: false }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (options.once) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(node);
          }
        } else {
          setInView(entry.isIntersecting);
        }
      },
      { threshold: options.threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return { ref, inView };
};

export default useInView;