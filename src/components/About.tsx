import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  { year: '2026', degree: 'DPhil Clinical Epidemiology & Medical Statistics', institution: 'Oxford NDORMS', tag: 'Incoming', tagStyle: '' },
  { year: '2025', degree: 'MSc Musculoskeletal Science & Medical Engineering', institution: 'UCL', tag: 'Distinction · Dean\'s List', tagStyle: 'bg-amber-100 text-amber-800' },
  { year: '2024', degree: 'Doctor of Medicine (MD)', institution: 'Chung Shan Medical University, Taiwan', tag: 'GPA 3.81/4.0', tagStyle: '' },
];

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-background">
      <div ref={ref} className="max-w-6xl mx-auto px-6 scroll-animate">
        <span className="section-label gradient-text">About</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I am a clinician-scientist with clinical training across Taiwan, the UK, and the US, and a research focus on large-scale health data analysis, musculoskeletal disease, and fairness-aware machine learning.
            </p>
            <p>
              My incoming DPhil at Oxford NDORMS (supervised by Dr Sara Khalid, Planetary Health Informatics Lab) focuses on transportable MSK risk prediction using EHR data from UK Biobank, CPRD, and Taiwan NHIRD — harmonised through the OMOP Common Data Model.
            </p>
            <p>
              I also build things: I founded Zenmotion, an AI rehabilitation platform (UCL Venture Builder), and extended the BHF Data Science Centre's standard pipeline with a gout phenotyping module in PySpark.
            </p>
          </div>

          {/* Education timeline */}
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Education</h3>
            {education.map((ed, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full gradient-bg flex-shrink-0 mt-1.5" />
                  {i < education.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                </div>
                <div className="pb-2">
                  <span className="text-xs font-semibold text-muted-foreground">{ed.year}</span>
                  <p className="font-semibold text-foreground text-sm mt-0.5">{ed.degree}</p>
                  <p className="text-xs text-muted-foreground">{ed.institution}</p>
                  <span className={`inline-block mt-2 text-xs px-3 py-0.5 rounded-full font-medium ${ed.tagStyle || 'bg-muted text-muted-foreground'}`}>
                    {ed.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
