import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {

  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="items-center gap-12 md:grid md:grid-cols-2">
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Como <span className="text-primary">FOREVER ALOE VERA GEL</span> age no seu corpo?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Sua fórmula pura e rica em nutrientes atua diretamente no sistema digestivo, ajudando na absorção de nutrientes e promovendo um equilíbrio saudável. Os compostos naturais do Aloe Vera trabalham para fortalecer o sistema imunológico e aumentar a sua energia e vitalidade.
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
             
              <Image
                src="https://imgur.com/onbrMxg.png"
                alt="Product bottle with aloe vera leaf"
                width={600}
                height={500}
                data-ai-hint="aloe vera product"
                className="rounded-2xl object-cover shadow-2xl"
              />
            
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
