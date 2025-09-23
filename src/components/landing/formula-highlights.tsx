import { Button } from '@/components/ui/button';

const highlights = [
  { number: '99,7%', text: 'Puro Gel de Aloe Vera' },
  { number: '100%', text: 'Processado Asepticamente' },
  { number: '0%', text: 'Adição de Conservantes' },
];

const FormulaHighlights = () => {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {highlights.map((highlight) => (
            <div key={highlight.text}>
              <p className="text-6xl font-bold text-primary md:text-7xl">{highlight.number}</p>
              <p className="mt-2 text-lg font-bold text-white">{highlight.text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
          ...e muito mais, para uma vida mais saudável e um bem-estar incomparável.
        </p>
        <Button variant="link" className="mt-4 text-lg text-primary" asChild>
          <a href="#kits">Quero todos os benefícios</a>
        </Button>
      </div>
    </section>
  );
};

export default FormulaHighlights;
