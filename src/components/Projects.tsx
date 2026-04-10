import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    emoji: '⚕️',
    title: 'OMOP MSK Risk Prediction Pipeline',
    desc: 'Harmonised CPRD/HES, UK Biobank (500K+), and Taiwan NHIRD (23M+) to OMOP CDM. Fairness-aware contrastive learning for transportable MSK risk prediction across 5+ ethnic groups.',
    pills: ['PySpark', 'OMOP CDM', 'UK Biobank', 'CPRD', 'Contrastive Learning'],
    link: 'https://github.com/iressa8655/standard-pipeline',
  },
  {
    emoji: '🤖',
    title: 'Zenmotion — AI Rehabilitation Platform',
    desc: 'Founder. Designed and deployed a patient-facing AI platform from concept to working prototype in under 5 months. Consulted 8 clinicians and 15 patients. 87% pilot acceptance. UCL Venture Builder top cohort.',
    pills: ['Python/Flask', 'ML', 'UX Research', 'Clinical Validation'],
  },
  {
    emoji: '🦴',
    title: 'OpenSim Tendon Transfer Simulation',
    desc: 'MSc dissertation: validated surgical simulation across 11 configurations, 85% orthopaedic surgeon confidence. ASME V&V40 documented. Selected for EFORT 2026 and ASiT 2026 podium.',
    pills: ['OpenSim Moco', 'FEA', 'ASME V&V40', 'Biomechanics'],
    link: 'https://www.dropbox.com/scl/fi/coupg9tesnxgwb2869rj6/4.-Distinction_Level_MSc_Dissertation_MSK_Simulation_Optimising_Tendon_Transfer_Surgery.pdf?rlkey=b1m60qawcs8wm1bu9vf0yakq5&dl=0',
  },
  {
    emoji: '🧬',
    title: 'BHF DSC Gout Phenotyping Module',
    desc: 'Forked and extended the BHF Data Science Centre standard pipeline. Built a gout phenotyping module with ICD-10/SNOMED CT codelists and PySpark data quality validation.',
    pills: ['PySpark', 'ICD-10', 'SNOMED CT', 'Open source'],
    link: 'https://github.com/iressa8655/standard-pipeline',
  },
  {
    emoji: '📚',
    title: 'Stanford Code in Place — Section Leader',
    desc: 'Taught Python to beginner learners globally. Created coding tutorials and instructional materials. Stanford Code in Place 2026.',
    pills: ['Python', 'Teaching', 'Stanford'],
    link: 'https://github.com/iressa8655/code-in-place-2026',
  },
  {
    emoji: '🌱',
    title: 'Digital Research Garden',
    desc: 'Open science notes on clinical epidemiology, OMOP CDM, fairness-aware ML, and MSK simulation.',
    pills: ['Open science', 'GitHub Pages', 'Obsidian'],
    link: 'https://iressa8655.github.io/digital-garden',
  },
];

const Projects = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="py-24 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto px-6 scroll-animate">
        <span className="section-label gradient-text">Projects</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-sm border border-border card-hover group">
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="font-semibold text-foreground text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.pills.map(pill => (
                  <span key={pill} className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{pill}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener" className="text-xs font-medium gradient-text hover:opacity-80 transition-opacity">
                  View project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
