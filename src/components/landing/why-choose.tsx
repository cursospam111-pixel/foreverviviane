import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, FlaskConical, Sparkles, ThumbsUp } from 'lucide-react';

const differentials = [
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: 'Fórmula Pura',
    description: '99,7% de gel de Aloe Vera puro, certificado pelo IASC.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'Ingredientes Naturais',
    description: 'Livre de conservantes e feito com os melhores ingredientes naturais.',
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: 'Tecnologia Avançada',
    description: 'Processamento asséptico que mantém os nutrientes e a frescura do gel.',
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: 'Resultados Comprovados',
    description: 'Milhares de clientes satisfeitos em todo o mundo com resultados reais para a saúde.',
  },
];

const WhyChoose = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-28"
      style={{ backgroundImage: "url('https://i.imgur.com/iFTFf4N.jpg')" }}
    >
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Por que escolher o <span className="text-primary">Forever Aloe Vera Gel</span>?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Descubra os diferenciais que tornam nossa fórmula a melhor escolha para sua saúde e bem-estar.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <Card key={item.title} className="rounded-2xl border-border bg-card/80 p-6 text-center shadow-lg backdrop-blur-xl">
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
