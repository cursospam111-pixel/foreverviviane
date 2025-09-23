import { CheckCircle } from 'lucide-react';

const results = [
  {
    title: 'Metabolismo Acelerado',
    description: 'Promove um sistema digestivo saudável e queima calorias de forma mais eficiente.',
  },
  {
    title: 'Mais Energia e Disposição',
    description: 'Rico em nutrientes que apoiam a vitalidade para as tarefas do dia a dia.',
  },
  {
    title: 'Redução do Inchaço',
    description: 'Ajuda o corpo a eliminar a retenção de líquidos, diminuindo o inchaço corporal.',
  },
    {
    title: 'Inibição do Apetite',
    description: 'Suas fibras promovem saciedade, ajudando a controlar a fome excessiva.',
  },
];

const ProvenResults = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Resultados Comprovados — <span className="text-primary">Benefícios Importantes</span>
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-10 md:grid-cols-2">
          {results.map((result) => (
            <div key={result.title} className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-white">{result.title}</h3>
                <p className="mt-1 text-muted-foreground">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
