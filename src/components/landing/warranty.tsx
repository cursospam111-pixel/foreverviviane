import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';

const Warranty = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-card p-12 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary bg-black md:h-32 md:w-32">
                <ShieldCheck className="h-12 w-12 text-primary md:h-16 md:w-16" />
            </div>
          <h2 className="mt-8 text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            7 DIAS DE GARANTIA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Temos total confiança na qualidade do nosso produto. Se por qualquer motivo você não estiver satisfeito com os resultados em 7 dias, nós devolvemos 100% do seu dinheiro, sem burocracia.
          </p>
          <Button
            className="mt-8 rounded-xl bg-primary px-8 py-6 text-lg font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#e0b112]"
            size="lg"
            asChild
          >
            <a href="#kits">QUERO CONFERIR AGORA</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Warranty;
