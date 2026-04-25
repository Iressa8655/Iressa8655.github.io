import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Top' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'awards', label: 'Awards' },
  { id: 'documents', label: 'CV' },
  { id: 'contact', label: 'Contact' },
];

const SectionBookmarks = () => {
  const [active, setActive] = useState<string>('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {sections.map(s => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => handleClick(s.id)}
            className="group relative flex items-center justify-end"
            aria-label={`Jump to ${s.label}`}
          >
            <span
              className={`absolute right-6 whitespace-nowrap text-xs font-medium px-2 py-1 rounded-md bg-card shadow-sm border border-border transition-all duration-300 ${
                isActive
                  ? 'opacity-100 translate-x-0 gradient-text'
                  : 'opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-foreground'
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 gradient-bg shadow-md'
                  : 'w-2 h-2 bg-muted-foreground/40 group-hover:bg-muted-foreground/70'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
};

export default SectionBookmarks;
