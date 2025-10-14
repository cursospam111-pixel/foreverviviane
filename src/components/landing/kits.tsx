import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BadgeCheck, Gift, ShieldCheck, Truck } from 'lucide-react';

const kits = [
  {
    id: 'kit-1-bottle',
    imageUrl: 'https://i.imgur.com/wf7ICc3.png',
    title: 'Leve 1 unidade do suco aloe e vera',
    description: 'Experimente o poder do Forever Aloe Vera Gel. Ideal para começar.',
    price: '169,90',
    installments: '12x de 17,90',
    checkoutUrl: 'https://forever-aloe-vera.pay.yampi.com.br/r/T4QQSSVWMI',
    bestValue: false,
  },
  {
    id: 'kit-2-bottles',
    imageUrl: 'https://i.imgur.com/ZY979sI.png',
    title: 'Leve 2 unidades do suco aloe e vera',
    description: 'Aproveite o dobro de benefícios com um desconto especial.',
    price: '319,80',
    installments: '6x de R$ 53,30',
    checkoutUrl: 'https://forever-aloe-vera.pay.yampi.com.br/r/BEK9WCQQ6R',
    bestValue: true,
  },
  {
    id: 'kit-5-bottles',
    imageUrl: 'https://i.imgur.com/A2x9jhv.png',
    title: 'Leve 3 unidades do suco aloe e vera',
    description: 'O melhor custo-benefício para resultados incríveis.',
    price: '467,70',
    installments: '12x de 47,59',
    checkoutUrl: 'https://forever-aloe-vera.pay.yampi.com.br/r/1B9DRICAEM',
    bestValue: false,
  },
];

const seals = [
    { icon: <ShieldCheck />, text: 'Compra Segura' },
    { icon: <BadgeCheck />, text: 'Satisfação Garantida' },
    { icon: <Gift />, text: 'Produto Original' },
    { icon: <Truck />, text: 'Entrega Rápida' },
]

const Kits = () => {
  return (
    <section id="kits" className="bg-card py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Escolha o seu <span className="text-primary">KIT IDEAL</span> para o seu bem-estar
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {kits.map((kit) => {
            return (
              <Card key={kit.id} className={`relative flex flex-col rounded-2xl border-2 shadow-lg ${kit.bestValue ? 'border-primary' : 'border-border'} bg-gradient-to-t from-primary/20 to-black`}>
                {kit.bestValue && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                    MAIS VENDIDO
                  </div>
                )}
                <CardHeader className="relative items-center">
                  {kit.imageUrl && (
                    <div className="relative h-48 w-full">
                      <div className="absolute inset-0 m-auto h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
                      <Image
                        src={kit.imageUrl}
                        alt={kit.title}
                        width={250}
                        height={250}
                        className="relative z-10 h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <CardTitle className="pt-4 text-center text-xl sm:text-2xl font-bold">{kit.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <CardDescription>{kit.description}</CardDescription>
                  <p className="mt-4 text-3xl font-bold text-white">R$ {kit.price}</p>
                  <p className="text-primary">{kit.installments}</p>
                </CardContent>
                <CardFooter className="flex-col">
                  <Button asChild className="w-full rounded-xl bg-primary py-6 text-lg font-bold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-[#e0b112]">
                    <a href={kit.checkoutUrl} target="_blank" rel="noopener noreferrer">
                      Comprar agora
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-y-8 gap-x-4 rounded-xl bg-black p-8 sm:grid-cols-4">
            {seals.map((seal, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-2 text-center">
                    <div className="text-primary">{seal.icon}</div>
                    <span className="text-xs sm:text-sm font-bold text-white">{seal.text}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Kits;
