import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { end: 12, suffix: '', label: 'Publications' },
  { end: 60, suffix: 'M+', label: 'Patient records' },
  { end: 3, suffix: '', label: 'National EHR systems' },
  { end: 8, suffix: '', label: 'Peer-reviewed' },
];

const StatBadge = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 1800, suffix);
  return (
    <div ref={ref} className="bg-card rounded-xl p-5 shadow-sm gradient-border-top card-hover text-center">
      <div className="text-2xl font-bold gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>{count}</div>
      <div className="text-xs text-muted-foreground mt-1 font-medium">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16"
      style={{
        background: 'radial-gradient(ellipse at 20% 20%, rgba(107,59,126,0.1) 0%, rgba(196,168,130,0.06) 50%, rgba(240,238,242,1) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left */}
          <div className="md:col-span-3 space-y-6">
            <span className="section-label gradient-text">A short introduction</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hi, I'm Iressa
            </h1>
            <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed max-w-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              A clinician data scientist with a bit of experience across medicine, technology, and business — basically a bit of everything, because I'm sort of ADHD-ish.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              I-Han (Iressa) Cheng · MD · MSc Distinction, UCL · Incoming DPhil, Oxford NDORMS. Currently working on fairness-aware AI for musculoskeletal population health using UK Biobank, CPRD &amp; Taiwan NHIRD via OMOP CDM.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://orcid.org/0009-0004-5400-1022" target="_blank" rel="noopener" className="px-5 py-2 rounded-full text-sm font-medium border-2 border-transparent gradient-bg text-white shimmer-btn">
                12 Publications
              </a>
              <a href="https://github.com/iressa8655" target="_blank" rel="noopener" className="px-5 py-2 rounded-full text-sm font-medium border-2 text-foreground hover:shadow-md transition-shadow" style={{ borderImage: 'linear-gradient(135deg, #6B3B7E, #C4A882) 1' }}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ihanc" target="_blank" rel="noopener" className="px-5 py-2 rounded-full text-sm font-medium border-2 text-foreground hover:shadow-md transition-shadow" style={{ borderImage: 'linear-gradient(135deg, #6B3B7E, #C4A882) 1' }}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Headshot */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg ring-4 ring-white/50" style={{ background: 'linear-gradient(135deg, #6B3B7E, #C4A882)' }}>
              <img
                id="headshot"
                src="/headshot.jpg"
                alt="I-Han (Iressa) Cheng"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stat badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map(s => (
            <StatBadge key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
