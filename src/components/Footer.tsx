const Footer = () => (
  <footer className="py-10" style={{ backgroundColor: '#2C2025' }}>
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-sm" style={{ color: '#C4A882' }}>
        I-Han (Iressa) Cheng · London / Oxford, UK
      </p>
      <div className="flex justify-center gap-6 mt-4">
        {[
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ihanc' },
          { label: 'GitHub', href: 'https://github.com/iressa8655' },
          { label: 'ORCID', href: 'https://orcid.org/0009-0004-5400-1022' },
          { label: 'Digital Garden', href: 'https://iressa8655.github.io/digital-garden' },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener" className="text-xs hover:opacity-80 transition-opacity" style={{ color: '#9E7A8C' }}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
