'use client';

import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

export const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset hover state on route change
    setIsHovered(false);
  }, [pathname]);

  return (
    <CursorContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </CursorContext.Provider>
  );
}
