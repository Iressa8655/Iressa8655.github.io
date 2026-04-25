import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CategoryPageProps {
  label: string;
  tagline: string;
  description: string;
}

const CategoryPage = ({ label, tagline, description }: CategoryPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main
        className="flex-1 flex items-center pt-32 pb-20"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(107,59,126,0.1) 0%, rgba(196,168,130,0.06) 50%, rgba(240,238,242,1) 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <span className="section-label gradient-text">{tagline}</span>
          <h1
            className="text-5xl md:text-6xl font-bold gradient-text"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {label}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          <div className="pt-6">
            <div className="inline-block px-6 py-3 rounded-full bg-card shadow-sm border border-border text-sm font-medium text-muted-foreground">
              Content coming soon
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
