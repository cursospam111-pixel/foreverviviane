import { Button } from '@/components/ui/button';

const highlights = [
  { number: '99,7%', text: 'Puro Gel de Aloe Vera' },
  { number: '100%', text: 'Processado Asepticamente' },
];

const FormulaHighlights = () => {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
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
      </div>
    </section>
  );
};

export default FormulaHighlights;
