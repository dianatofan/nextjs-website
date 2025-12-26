'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressTOC({ items }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px',
      }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-50 w-48 h-auto">
      <ul className="space-y-2">
        {items.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className={`
                text-left text-sm transition-all duration-200 w-full py-1.5 px-3 rounded-md
                ${
                  activeId === id
                    ? 'text-primary font-semibold bg-gray-100'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
