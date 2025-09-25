// src/components/ScrollSection.js
import React, { useEffect, useRef, useState } from 'react';

export default function ScrollSection({ sections }) {
  const sectionRefs = useRef(sections.map(() => React.createRef()));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) setActiveIndex(idx);
        });
      },
      { threshold: 0.5 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (idx) => {
    sectionRefs.current[idx].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex">
      <nav className="mr-8">
        <ul>
          {sections.map((section, idx) => (
            <li
              key={section.id}
              className={activeIndex === idx ? 'font-bold text-blue-600' : ''}
              onClick={() => handleClick(idx)}
              style={{ cursor: 'pointer', marginBottom: '8px' }}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1">
        {sections.map((section, idx) => (
          <div
            key={section.id}
            ref={sectionRefs.current[idx]}
            id={section.id}
            style={{
              height: '60vh',
              marginBottom: '32px',
              border: '1px solid #ccc',
              padding: '24px',
            }}
          >
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
}
