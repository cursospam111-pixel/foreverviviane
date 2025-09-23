import { BadgeCheck, Leaf, Rabbit, Vegan } from 'lucide-react';

const seals = [
  { icon: <BadgeCheck className="h-8 w-8" />, name: 'IASC Certified' },
  { icon: <Rabbit className="h-8 w-8" />, name: 'Não Testado em Animais' },
  { icon: <Vegan className="h-8 w-8" />, name: 'Vegan Friendly' },
  { icon: <Leaf className="h-8 w-8" />, name: '100% Natural' },
];

const QualitySeals = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 justify-items-center gap-y-8 text-white sm:grid-cols-4">
          {seals.map((seal) => (
            <div key={seal.name} className="flex flex-col items-center gap-3 text-center transition-colors hover:text-primary">
              <div className="text-primary">{seal.icon}</div>
              <p className="text-sm font-bold">{seal.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySeals;
