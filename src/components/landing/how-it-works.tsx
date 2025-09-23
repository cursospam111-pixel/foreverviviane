import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HowItWorks = () => {
    const productImage = PlaceHolderImages.find(p => p.id === 'product-with-tape');

  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="items-center gap-12 md:grid md:grid-cols-2">
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Como <span className="text-primary">LIFT DETOX BLACK</span> te faz emagrecer?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Sua fórmula avançada atua diretamente na queima de gordura localizada, acelera o metabolismo e inibe o apetite. Os ingredientes naturais trabalham em sinergia para desintoxicar o corpo, resultando em uma perda de peso eficaz e duradoura.
            </p>
            <Button
              className="mt-8 rounded-xl bg-primary px-8 py-6 text-lg font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#e0b112]"
              size="lg"
              asChild
            >
              <a href="#kits">É ISSO QUE PRECISO</a>
            </Button>
          </div>
          <div className="flex items-center justify-center">
             {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={productImage.description}
                width={600}
                height={500}
                data-ai-hint={productImage.imageHint}
                className="rounded-2xl object-cover shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 px-4 md:px-6">
        <hr className="border-t-2 border-primary" />
      </div>
    </section>
  );
};

export default HowItWorks;
