import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="contact"
      className="py-24"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(107,59,126,0.06) 0%, rgba(240,238,242,1) 70%)',
      }}
    >
      <div ref={ref} className="max-w-2xl mx-auto px-6 text-center scroll-animate">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-10">
          Open to research collaborations, clinical AI opportunities, and speaking invitations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:i-han.cheng.24@ucl.ac.uk" className="gradient-bg text-white px-6 py-2.5 rounded-full text-sm font-medium shimmer-btn">
            Email me
          </a>
          <a href="https://www.linkedin.com/in/ihanc" target="_blank" rel="noopener" className="px-6 py-2.5 rounded-full text-sm font-medium border-2 text-foreground hover:shadow-md transition-shadow" style={{ borderImage: 'linear-gradient(135deg, #6B3B7E, #C4A882) 1' }}>
            LinkedIn
          </a>
          <a href="https://orcid.org/0009-0004-5400-1022" target="_blank" rel="noopener" className="px-6 py-2.5 rounded-full text-sm font-medium border-2 text-foreground hover:shadow-md transition-shadow" style={{ borderImage: 'linear-gradient(135deg, #6B3B7E, #C4A882) 1' }}>
            ORCID
          </a>
          <a href="https://github.com/iressa8655" target="_blank" rel="noopener" className="px-6 py-2.5 rounded-full text-sm font-medium border-2 text-foreground hover:shadow-md transition-shadow" style={{ borderImage: 'linear-gradient(135deg, #6B3B7E, #C4A882) 1' }}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
