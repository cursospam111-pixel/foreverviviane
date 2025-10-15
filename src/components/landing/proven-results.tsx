import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const results = [
  {
    title: 'Sistema Digestivo Saudável',
    description: 'Promove a saúde gastrointestinal e ajuda na absorção de nutrientes.',
  },
  {
    title: 'Mais Energia e Disposição',
    description: 'Rico em nutrientes que apoiam a vitalidade para as tarefas do dia a dia.',
  },
  {
    title: 'Fortalece a Imunidade',
    description: 'Ajuda a fortalecer as defesas naturais do corpo.',
  },
    {
    title: 'Pele Mais Saudável',
    description: 'A hidratação e os nutrientes do Aloe Vera contribuem para uma pele radiante.',
  },
];

const ProvenResults = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                        Resultados Comprovados <span className="text-primary">Benefícios Importantes</span>
                    </h2>
                </div>
                <div className="mt-12 grid max-w-4xl gap-x-8 gap-y-10">
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
            <div className="flex flex-col items-center justify-center gap-8">
                
                <Image
                    src="https://i.imgur.com/S3fF7wj.png"
                    alt="Resultados comprovados do Aloe Vera"
                    width={750}
                    height={750}
                    className="relative z-10 w-full max-w-md rounded-2xl object-cover shadow-2xl"
                    data-ai-hint="woman smiling"
                />
                <Button
                    className="rounded-full animated-gradient px-8 py-7 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105 focus-visible:ring-white/50 sm:px-10 sm:py-8 sm:text-xl"
                    size="lg"
                    asChild
                    >
                    <a href="#kits">
                        Faça parte da equipe Forever
                    </a>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
