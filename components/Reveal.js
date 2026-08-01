"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", delay, className = "", style, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? ` d${delay}` : "";
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? " in" : ""}${delayClass} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
