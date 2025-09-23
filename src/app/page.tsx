import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import HowItWorks from '@/components/landing/how-it-works';
import Ingredients from '@/components/landing/ingredients';
import Testimonials from '@/components/landing/testimonials';
import Kits from '@/components/landing/kits';
import HowToBuy from '@/components/landing/how-to-buy';
import Warranty from '@/components/landing/warranty';
import About from '@/components/landing/about';
import ProvenResults from '@/components/landing/proven-results';
import FormulaHighlights from '@/components/landing/formula-highlights';
import WhyChoose from '@/components/landing/why-choose';
import Faq from '@/components/landing/faq';
import QualitySeals from '@/components/landing/quality-seals';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Ingredients />
        <Testimonials />
        <Kits />
        <HowToBuy />
        <Warranty />
        <About />
        <ProvenResults />
        <FormulaHighlights />
        <WhyChoose />
        <Faq />
        <QualitySeals />
      </main>
      <Footer />
    </div>
  );
}
