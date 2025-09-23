import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, FlaskConical, Sparkles, ThumbsUp } from 'lucide-react';

const differentials = [
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: 'Fórmula Aprovada',
    description: 'Composição 100% aprovada pela ANVISA, garantindo sua segurança e eficácia.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Ingredientes Naturais',
    description: 'Apenas ingredientes naturais e selecionados, sem pesticidas ou aditivos químicos.',
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: 'Tecnologia Avançada',
    description: 'Processo de extração e encapsulamento que preserva a máxima potência dos ativos.',
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: 'Resultados Comprovados',
    description: 'Milhares de clientes satisfeitos em todo o Brasil com resultados reais e duradouros.',
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Por que escolher o <span className="text-primary">Lift Detox Black</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubra os diferenciais que tornam nossa fórmula a melhor escolha para sua saúde e emagrecimento.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <Card key={item.title} className="rounded-2xl border-border bg-card p-6 text-center shadow-lg">
              <CardHeader className="items-center">{item.icon}</CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-xl font-bold">{item.title}</CardTitle>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
