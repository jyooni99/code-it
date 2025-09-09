"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("화면에 해당 요소가 감지되었습니다.");
        } else {
          setIsVisible(false);
          console.log("화면에 해당 요소가 사라졌습니다.");
        }
      });
    });

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="flex h-[400dvh] items-center justify-center">
      <div
        ref={ref}
        className={`h-48 w-48 bg-amber-300 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      ></div>
    </div>
  );
}
