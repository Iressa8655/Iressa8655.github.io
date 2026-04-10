import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const awards = [
  { year: '2026', name: 'Stanford Advanced OpenSim Workshop', org: '1 of 30 globally selected', sparkle: true },
  { year: '2025', name: 'UCL Dean\'s List', org: 'MSc Musculoskeletal Science & Medical Engineering' },
  { year: '2025', name: 'Outstanding Degree Thesis — Honourable Mention', org: 'Taiwan Association of Architecture and Medicine' },
  { year: '2025', name: 'MedTech Innovation Fellow', org: 'Ongoing' },
  { year: '2024', name: 'Academia Sinica Hackathon — 1st Place', org: 'AI/data science competition', sparkle: true },
  { year: '2024', name: 'Orthopod Scholars Programme', org: 'Sheffield Orthoplastics Society' },
  { year: '2024', name: 'University of Glasgow International Leadership Scholarship', org: 'Fully funded' },
  { year: '2023', name: 'IRCAD Best Prototype', org: 'Medical innovation' },
];

const Awards = () => {
  const ref = useScrollAnimation();

  return (
    <section id="awards" className="py-24 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto px-6 scroll-animate">
        <span className="section-label gradient-text">Awards</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">Awards &amp; Honours</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((a, i) => (
            <div key={i} className="bg-card rounded-xl p-5 shadow-sm gradient-border-top card-hover">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold gradient-text">{a.year}</span>
                {a.sparkle && <span className="text-amber-500">✦</span>}
              </div>
              <h3 className="font-semibold text-foreground text-sm leading-snug mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{a.name}</h3>
              <p className="text-xs text-muted-foreground">{a.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
