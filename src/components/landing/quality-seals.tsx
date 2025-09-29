import Image from 'next/image';

const seals = [
  { 
    name: 'Vegan Friendly', 
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-vegan"><path d="M2 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/><path d="M12 2v20"/><path d="M11.3 2.1a3.5 3.5 0 0 1 5.6 0"/><path d="M11.3 21.9a3.5 3.5 0 0 0 5.6 0"/></svg>
    ) 
  },
  { 
    name: 'Kosher', 
    logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-of-david"><path d="M12 2l3.09 5.25L21 8l-4.5 4.5L18 22l-6-4.5L6 22l1.5-9.5L3 8l5.91-.75L12 2z"/></svg>
    ) 
  },
  { 
    name: 'Leaping Bunny', 
    logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rabbit"><path d="M13 16a3 3 0 0 1 2.24 5.24"/><path d="M11 16a3 3 0 0 0-2.24 5.24"/><path d="M15.5 14.5c0-2-1.5-4-4-4h-1c-2.5 0-4 2-4 4"/><path d="M18 12a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h8v-2Z"/><path d="M18.8 6.2C18.1 3 15.3 1 12 1s-6.1 2-6.8 5.2"/><path d="M6.4 9.1C6.1 8 6 6.8 6 5.5"/><path d="M17.6 9.1c.3-1.1.4-2.3.4-3.6"/></svg>
    ) 
  },
  { 
    name: 'IASC', 
    logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
    )
  },
  { 
    name: 'Halal', 
    logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    ) 
  },
  { 
    name: 'Gluten Free', 
    logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wheat-off"><path d="M2 22 22 2"/><path d="M17 22v-5.5a2.5 2.5 0 0 0-5 0V22"/><path d="M11.5 8.5 9 6"/><path d="m2 15 5-5"/><path d="M21.5 13.5 17 9l-2.5 2.5"/><path d="M22 10v4.5a2.5 2.5 0 0 1-5 0V10"/></svg>
    )
  },
];

const QualitySeals = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Qualidade Certificada
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Reconhecimento internacional que garante pureza e confiança no consumo.
          </p>
        </div>
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
                {seals.map((seal) => (
                    <div key={seal.name} className="flex flex-col items-center gap-3 text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                            {seal.logo}
                        </div>
                        <p className="font-semibold text-white">{seal.name}</p>
                    </div>
                ))}
            </div>
            <div className="relative flex items-center justify-center">
                <div className="absolute h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
                <Image
                    src="https://digitalvante.com/wp-content/uploads/2025/09/width_1080-6.png"
                    alt="Garrafa de Forever Aloe Vera Gel"
                    width={300}
                    height={380}
                    data-ai-hint="aloe vera bottle"
                    className="relative z-10 drop-shadow-2xl"
                />
            </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl font-bold text-white">
            Forever Aloe Vera Gel: <span className="text-primary">Certificação e qualidade reconhecida mundialmente.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualitySeals;
