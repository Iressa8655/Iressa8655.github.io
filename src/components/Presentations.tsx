import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const entries = [
  { year: '2026', event: '27th EFORT Congress, Málaga', desc: 'Poster walk — data-driven biomechanical modelling', link: true },
  { year: '2026', event: 'ASiT Robotics Conference', desc: 'Podium speaker — patient-specific biomechanical simulation for surgical decision-making' },
  { year: '2025', event: 'Royal Society Summer Science Exhibition', desc: 'Public engagement contributor — VR & haptic systems in surgery' },
  { year: '2025', event: 'International Conference on Preventive Medicine & Public Health', desc: 'Invited speaker — COVID-19 ILD antivirals' },
  { year: '2025', event: 'Guttmann Rehabilitation Conference', desc: 'QI audit — 10% patient satisfaction improvement, RNOH Spinal Cord Injury Centre' },
  { year: '2024', event: 'AI in Orthopaedics, Royal College of Surgeons England', desc: 'Podium (invited) — AI-driven real-world cohort study using linked health data', link: true },
];

const Presentations = () => {
  const ref = useScrollAnimation();

  return (
    <section id="presentations" className="py-24" style={{ backgroundColor: '#F7F3F8' }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 scroll-animate">
        <span className="section-label gradient-text">Presentations</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">Presentations &amp; Outreach</h2>

        <div className="max-w-2xl space-y-0">
          {entries.map((e, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full gradient-bg flex-shrink-0 mt-1.5" />
                {i < entries.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
              </div>
              <div className="pb-8">
                <span className="text-xs font-bold gradient-text">{e.year}</span>
                <p className="font-semibold text-foreground text-sm mt-0.5">{e.event}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.desc}</p>
                {e.link && (
                  <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium cursor-pointer hover:text-foreground transition-colors">
                    📄 Document
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;
