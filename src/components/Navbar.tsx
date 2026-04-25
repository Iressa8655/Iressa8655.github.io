import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavTab = { label: string; href: string; external?: boolean };

const tabs: NavTab[] = [
  { label: 'CV & Accomplishments', href: '/' },
  { label: 'Medicine', href: 'https://iressa8655.github.io/digital-garden/Medicine/', external: true },
  { label: 'Technology', href: 'https://iressa8655.github.io/digital-garden/Technology/', external: true },
  { label: 'Business', href: 'https://iressa8655.github.io/digital-garden/Business/', external: true },
  { label: 'Personal Development', href: 'https://iressa8655.github.io/digital-garden/Personal-Development/', external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleBrand = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const tabClass = (active: boolean) =>
    `whitespace-nowrap rounded-full font-medium transition-all duration-300 px-2.5 py-1.5 text-[11px] sm:px-3 sm:py-2 sm:text-sm ${
      active
        ? 'gradient-bg text-white shadow-sm'
        : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        <button
          onClick={handleBrand}
          className="gradient-text font-bold text-base sm:text-xl shrink-0"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          I-Han Cheng
        </button>

        <div className="flex items-center gap-0.5 sm:gap-1 flex-nowrap overflow-x-auto">
          {tabs.map((tab) => {
            const active = !tab.external && location.pathname === tab.href;
            if (tab.external) {
              return (
                <a key={tab.href} href={tab.href} className={tabClass(false)}>
                  {tab.label}
                </a>
              );
            }
            return (
              <Link
                key={tab.href}
                to={tab.href}
                onClick={(e) => {
                  if (location.pathname === tab.href) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={tabClass(active)}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
