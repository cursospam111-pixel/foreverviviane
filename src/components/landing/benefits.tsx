import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem, TrendingUp, Waves } from 'lucide-react';

const benefits = [
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: 'Sem Estrias e Celulite',
    description: 'Os ativos deste gel ajudam a reduzir estrias e celulite de forma contínua com o uso.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Efeito Lift',
    description: 'Hidrata e renova a pele, melhorando a firmeza e o aspecto geral.',
  },
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: 'Regula o Intestino',
    description: 'Auxilia o funcionamento intestinal e a sensação de bem-estar.',
  },
];

const Benefits = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Alguns benefícios do novo Lift Detox Black que vão{' '}
            <span className="text-primary">surpreender</span> você!
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col items-center rounded-2xl border-border bg-card p-8 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
              <CardHeader>{benefit.icon}</CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-2xl font-bold">{benefit.title}</CardTitle>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
