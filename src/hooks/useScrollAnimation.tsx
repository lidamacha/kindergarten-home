import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Component wrapper for easy use
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur";
  delay?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    };

    const transforms: Record<string, React.CSSProperties> = {
      "fade-up": { transform: isVisible ? "translateY(0)" : "translateY(40px)" },
      "fade-down": { transform: isVisible ? "translateY(0)" : "translateY(-40px)" },
      "fade-left": { transform: isVisible ? "translateX(0)" : "translateX(40px)" },
      "fade-right": { transform: isVisible ? "translateX(0)" : "translateX(-40px)" },
      scale: { transform: isVisible ? "scale(1)" : "scale(0.9)" },
      blur: { 
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        filter: isVisible ? "blur(0)" : "blur(10px)" 
      },
    };

    return { ...baseStyles, ...transforms[animation] };
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
};

// Hook for staggered children animations
export const useStaggerAnimation = (
  itemCount: number,
  options: UseScrollAnimationOptions & { staggerDelay?: number } = {}
) => {
  const { staggerDelay = 100, ...scrollOptions } = options;
  const { ref, isVisible } = useScrollAnimation(scrollOptions);

  const getItemStyle = (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transition: `all 500ms cubic-bezier(0.4, 0, 0.2, 1) ${index * staggerDelay}ms`,
  });

  return { ref, isVisible, getItemStyle };
};
