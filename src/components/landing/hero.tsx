import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CreditCard, ShieldCheck, Truck, BadgePercent } from 'lucide-react';

const Hero = () => {

  const badges = [
    { icon: <CreditCard />, text: 'PARCELAMENTO', label: 'EM ATÉ 12X' },
    { icon: <BadgePercent />, text: 'PAGAMENTO EM PIX', label: 'COM DESCONTO' },
    { icon: <ShieldCheck />, text: 'COMPRA SEGURA', label: 'E COM GARANTIA' },
    { icon: <Truck />, text: 'FRETE GRÁTIS', label: 'PARA TODO O BRASIL' },
  ];

  return (
    <section className="relative overflow-hidden bg-black pt-12 pb-20 md:pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-1 flex h-full min-h-[350px] items-center justify-center md:order-2 md:min-h-[500px]">
            <div className="absolute h-80 w-80 rounded-full bg-primary/50 blur-3xl md:bg-primary/30 md:h-[450px] md:w-[450px]" />
            
              <Image
                src="https://digitalvante.com/wp-content/uploads/2025/09/width_1080-6.png"
                alt="Main product bottle of Forever Aloe Vera Gel"
                width={300}
                height={380}
                priority
                data-ai-hint="aloe vera bottle"
                className="z-10 h-[380px] w-[300px] object-contain drop-shadow-2xl md:h-[430px] md:w-[350px]"
              />
            
          </div>
          <div className="z-10 order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
            <div className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-bold text-primary">
              Forever Aloe Vera Gel - A sua melhor escolha
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              O Poder do <span className="text-primary">Puro Aloe Vera</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground md:text-xl">
              Descubra o segredo para uma vida mais saudável com Forever Aloe Vera Gel.
            </p>
            <Button
              className="mt-8 rounded-full animated-gradient px-10 py-8 text-xl font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105 focus-visible:ring-white/50"
              size="lg"
              asChild
            >
              <a href="#kits">QUERO MEU ALOE VERA GEL</a>
            </Button>
            <div className="mt-12 grid w-full grid-cols-2 gap-8 px-8 sm:grid-cols-4 sm:gap-6 md:px-0">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-primary">{badge.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary sm:text-xs">{badge.label}</span>
                    <span className="text-base text-white sm:text-xs">{badge.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
