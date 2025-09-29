import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Apoio à Digestão',
    description: 'O Aloe Vera ajuda a manter um sistema digestivo saudável e a absorção de nutrientes.',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: 'Fonte de Nutrientes',
    description: 'Rico em vitaminas, minerais e aminoácidos que promovem saúde e bem-estar geral.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Suporte Imunológico',
    description: 'Fortalece o sistema imunológico com seus compostos naturais.',
  },
];

const Benefits = () => {
  return (
    <section 
      className="relative bg-black py-20 sm:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.imgur.com/KAcQybG.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Alguns benefícios do Forever Aloe Vera Gel que vão{' '}
            <span className="text-primary">surpreender</span> você!
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col items-center rounded-2xl border-border bg-card/80 p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
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