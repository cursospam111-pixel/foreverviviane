import Hero from '@/components/landing/hero';
import TextCarousel from '@/components/landing/text-carousel';
import Benefits from '@/components/landing/benefits';
import WhyForever from '@/components/landing/why-forever';
import ProductDetails from '@/components/landing/product-details';
import HowItWorks from '@/components/landing/how-it-works';
import WhoAmI from '@/components/landing/who-am-i';
import HowToBuyVideo from '@/components/landing/how-to-buy-video';
import Kits from '@/components/landing/kits';
import HowToBuy from '@/components/landing/how-to-buy';
import ProvenResults from '@/components/landing/proven-results';
import FormulaHighlights from '@/components/landing/formula-highlights';
import WhyChoose from '@/components/landing/why-choose';
import Faq from '@/components/landing/faq';
import QualitySeals from '@/components/landing/quality-seals';
import Footer from '@/components/landing/footer';
import WhatsAppButton from '@/components/landing/whatsapp-button';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <main>
        <Hero />
        <TextCarousel />
        <Benefits />
        <WhyForever />
        <ProductDetails />
        <HowItWorks />
        <WhoAmI />
        <HowToBuyVideo />
        <Kits />
        <HowToBuy />
        <ProvenResults />
        <FormulaHighlights />
        <WhyChoose />
        <Faq />
        <QualitySeals />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
