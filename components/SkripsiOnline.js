'use client';
import { useState, useEffect } from "react";

export default function StickyHeading({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0].id;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - 80) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="sticky top-14 bg-gray-800 text-white py-2 px-4 shadow-md z-40">
      <p className="font-bold text-lg">{sections.find(s => s.id === activeSection)?.title}</p>
    </div>
  );
}
