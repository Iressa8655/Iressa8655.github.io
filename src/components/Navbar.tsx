import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type SubPage = { label: string; href: string; external?: boolean };

const subPages: SubPage[] = [
  { label: 'CV & Accomplishments', href: '/' },
  { label: 'Medicine', href: 'https://iressa8655.github.io/digital-garden/Medicine/', external: true },
  { label: 'Technology', href: 'https://iressa8655.github.io/digital-garden/Technology/', external: true },
  { label: 'Business', href: 'https://iressa8655.github.io/digital-garden/Business/', external: true },
  { label: 'Personal Development', href: 'https://iressa8655.github.io/digital-garden/Personal-Development/', external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHome = () => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={handleHome}
          className="gradient-text font-bold text-xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          I-Han Cheng
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {subPages.map(page => {
            const active = !page.external && location.pathname === page.href;
            const className = `text-sm font-medium px-3 py-2 rounded-full transition-colors ${
              active
                ? 'gradient-bg text-white shimmer-btn'
                : 'text-muted-foreground hover:text-foreground'
            }`;
            if (page.external) {
              return (
                <a key={page.href} href={page.href} className={className}>
                  {page.label}
                </a>
              );
            }
            return (
              <Link
                key={page.href}
                to={page.href}
                onClick={() => setMobileOpen(false)}
                className={className}
              >
                {page.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border px-6 py-4 space-y-3">
          {subPages.map(page => {
            const active = !page.external && location.pathname === page.href;
            const className = `block w-full text-left text-sm font-medium transition-colors ${
              active ? 'gradient-text' : 'text-muted-foreground hover:text-foreground'
            }`;
            if (page.external) {
              return (
                <a
                  key={page.href}
                  href={page.href}
                  onClick={() => setMobileOpen(false)}
                  className={className}
                >
                  {page.label}
                </a>
              );
            }
            return (
              <Link
                key={page.href}
                to={page.href}
                onClick={() => setMobileOpen(false)}
                className={className}
              >
                {page.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
