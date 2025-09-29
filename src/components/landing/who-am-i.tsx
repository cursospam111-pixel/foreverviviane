import Image from 'next/image';
import { Button } from '@/components/ui/button';

const WhoAmI = () => {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 flex items-center justify-center md:order-1">
            <div className="absolute h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
            <Image
              src="https://picsum.photos/seed/viviane/500/500"
              alt="Viviane, sua consultora de bem-estar"
              width={400}
              height={400}
              className="relative z-10 rounded-full object-cover shadow-2xl"
              data-ai-hint="woman portrait"
            />
          </div>
          <div className="order-1 text-center md:order-2 md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Quem <span className="text-primary">sou eu?</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground mx-auto md:mx-0">
              Olá, eu sou a Viviane! Sou apaixonada por saúde e bem-estar, e minha missão é ajudar você a alcançar uma vida mais saudável e equilibrada. Há anos utilizo e recomendo o Forever Aloe Vera Gel pelos seus incríveis benefícios.
            </p>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground mx-auto md:mx-0">
              Estou aqui para te dar todo o suporte necessário, tirar suas dúvidas e garantir que você tenha a melhor experiência possível com nossos produtos. Conte comigo nessa jornada!
            </p>
            <Button
              className="mt-8 rounded-xl bg-primary px-8 py-6 text-lg font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#e0b112]"
              size="lg"
              asChild
            >
              <a href="#kits">Falar com a Viviane</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
