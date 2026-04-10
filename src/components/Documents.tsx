import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const docs = [
  { icon: '📄', name: 'Full Research CV', link: 'https://www.dropbox.com/scl/fi/mhwul5wbintzmmf89pvfj/HDRUK_I_Han_Cheng.pdf?rlkey=uvyki72atjhu3jedm3izss4q9&dl=0' },
  { icon: '🎓', name: 'UCL Award Statement', link: 'https://www.dropbox.com/scl/fi/pfzyaghb0k38fklet16c3/UCL-Statement-of-award.pdf?rlkey=xf69hysqbdyojl6ahedzmdeht&dl=0' },
  { icon: '📋', name: 'UCL Official Transcript', link: 'https://www.dropbox.com/scl/fi/iwvtjdh964jwk3uch4h0c/official-transcript-211125.pdf?rlkey=p9framdadgj95qj5kzmww3sju&dl=0' },
  { icon: '🏛', name: 'Oxford DPhil Offer', link: 'https://www.dropbox.com/scl/fi/wob6vl7cpccptm1uwd90k/7.-University_of_Oxford_DPhil_Offer_Artificial_Intelligence_for_Musculoskeletal_Global_Health.pdf?rlkey=ljsfrk0jipt8x5jcne27b1wld&dl=0' },
  { icon: '🦴', name: 'MSc Dissertation', link: 'https://www.dropbox.com/scl/fi/coupg9tesnxgwb2869rj6/4.-Distinction_Level_MSc_Dissertation_MSK_Simulation_Optimising_Tendon_Transfer_Surgery.pdf?rlkey=b1m60qawcs8wm1bu9vf0yakq5&dl=0' },
  { icon: '🤖', name: 'Stanford OpenSim', link: 'https://www.dropbox.com/scl/fi/8ja8s12j0j9vgyq1k4s76/8.-Selective_Admission_Stanford_OpenSim_Advanced_User_Workshop_MSK_Simulation_and_AI.pdf?rlkey=lp1sws8fb5fn0dvv2wvat4on4&dl=0' },
  { icon: '📊', name: 'RA Bone Health Paper', link: 'https://www.dropbox.com/scl/fi/pt07tm8pebvizpt94uicw/1.-Peer_Reviewed_Clinical_Research_Real_World_Data_Biologic_Therapies_IJRD-fullpaper.pdf?rlkey=v3prp58qlthazeqstdbn4sa7r&dl=0' },
  { icon: '🏆', name: 'EFORT 2026 Acceptance', link: 'https://www.dropbox.com/scl/fi/66x8777gmmzqcf0wk6vgn/10.-International_EFORT_Congress_2026_Poster_Walk_Acceptance_Foot_and_Ankle_Orthopaedics.pdf?rlkey=un8mwxx6b24a4e43e9suy1qe8&dl=0' },
];

const Documents = () => {
  const ref = useScrollAnimation();

  return (
    <section id="documents" className="py-24" style={{ backgroundColor: '#F7F3F8' }}>
      <div ref={ref} className="max-w-6xl mx-auto px-6 scroll-animate">
        <span className="section-label gradient-text">Documents</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">CV &amp; Evidence Documents</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {docs.map((d, i) => (
            <a
              key={i}
              href={d.link}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm border border-border card-hover group"
            >
              <span className="text-2xl">{d.icon}</span>
              <span className="font-medium text-sm text-foreground group-hover:gradient-text transition-colors">{d.name} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
