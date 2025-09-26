import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Vegan, AlertTriangle, Ban } from 'lucide-react';

const curiosities = [
  {
    icon: <Vegan className="h-10 w-10 text-primary" />,
    title: 'Alimentação Vegana',
    description: 'A Aloe Vera pode ser utilizada na alimentação vegana.',
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-primary" />,
    title: 'Maiores de 19 Anos',
    description: 'Recomendada apenas para maiores de 19 anos.',
  },
  {
    icon: <Ban className="h-10 w-10 text-primary" />,
    title: 'Contraindicações',
    description: 'Não indicada para gestantes, lactantes ou pessoas em tratamento de apendicite.',
  },
];

const Curiosities = () => {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            <span className="text-primary">Curiosidades</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {curiosities.map((curiosity, index) => (
            <Card key={index} className="flex flex-col items-center rounded-2xl border-border bg-black p-8 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
              <CardHeader>{curiosity.icon}</CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-2xl font-bold">{curiosity.title}</CardTitle>
                <p className="text-muted-foreground">{curiosity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curiosities;
