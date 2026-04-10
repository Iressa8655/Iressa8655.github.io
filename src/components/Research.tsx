import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Publication = {
  year: string;
  type: string;
  featured?: boolean;
  title: string;
  venue: string;
  tags: string[];
  link?: string;
};

const publications: Publication[] = [
  {
    year: '2026', type: 'Preprint · Lead author', featured: true,
    title: 'Global burden and inequality of gout among the working-age population, 1990–2021',
    venue: 'medRxiv · GBD 2021 · 204 countries · joinpoint regression · inequality decomposition',
    tags: ['Global Health', 'MSK'],
    link: 'https://orcid.org/0009-0004-5400-1022',
  },
  {
    year: '2026', type: 'Preprint · Lead author', featured: true,
    title: 'Comparative risk of ILD following Paxlovid vs Molnupiravir in COVID-19 patients with autoimmune disease',
    venue: 'medRxiv · TriNetX 18,000+ patients · propensity-score matching · survival analysis',
    tags: ['Infectious Disease', 'Respiratory'],
    link: 'https://orcid.org/0009-0004-5400-1022',
  },
  {
    year: '2025', type: 'Peer-reviewed',
    title: 'Comparative effectiveness of TNF-α and IL-6 inhibitors on bone health outcomes in RA',
    venue: 'International Journal of Rheumatic Diseases, 2025',
    tags: ['MSK'],
  },
  {
    year: '2024', type: 'Peer-reviewed · Lead author',
    title: 'Long-term effects of biologic initiation in severe asthma: insights from ISAR',
    venue: 'JACI: In Practice, 2024',
    tags: ['Respiratory'],
  },
  {
    year: '2026', type: 'Preprint · Co-author',
    title: 'Application of impulse oscillometry for asthma management',
    venue: 'medRxiv, 2026',
    tags: ['Respiratory'],
  },
];

const filters = ['All', 'MSK', 'Respiratory', 'Global Health', 'Infectious Disease'];

const Research = () => {
  const [active, setActive] = useState('All');
  const ref = useScrollAnimation();

  const filtered = active === 'All' ? publications : publications.filter(p => p.tags.includes(active));

  return (
    <section id="research" className="py-24" style={{ backgroundColor: '#F7F3F8' }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 scroll-animate">
        <span className="section-label gradient-text">Research</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Research &amp; Publications</h2>
        <p className="text-muted-foreground mt-2 mb-8">8 peer-reviewed · 4 preprints</p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f ? 'gradient-bg text-white' : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((pub, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl p-6 shadow-sm card-hover transition-all duration-300 ${
                pub.featured ? 'border-l-4' : 'border border-border'
              }`}
              style={pub.featured ? { borderImage: 'linear-gradient(to bottom, #6B3B7E, #C4A882) 1' } : undefined}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold gradient-bg text-white px-2.5 py-0.5 rounded-full">{pub.year}</span>
                <span className="text-xs text-muted-foreground font-medium">{pub.type}</span>
                {pub.featured && <span className="text-xs font-semibold gradient-text">Featured</span>}
              </div>
              <h3 className="font-semibold text-foreground text-sm leading-snug mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{pub.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{pub.venue}</p>
              <div className="flex flex-wrap gap-1.5">
                {pub.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{tag}</span>
                ))}
              </div>
              {pub.link && (
                <a href={pub.link} target="_blank" rel="noopener" className="inline-block mt-3 text-xs font-medium gradient-text hover:opacity-80 transition-opacity">
                  View on ORCID →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://orcid.org/0009-0004-5400-1022"
            target="_blank"
            rel="noopener"
            className="inline-block gradient-bg text-white px-6 py-2.5 rounded-full text-sm font-medium shimmer-btn"
          >
            Full publication list on ORCID →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
