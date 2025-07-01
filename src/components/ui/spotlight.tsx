"use client";

import { useState, useEffect } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function Spotlight() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mousePosition = useMousePosition();

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.1), transparent 80%)`,
      }}
    />
  );
}
