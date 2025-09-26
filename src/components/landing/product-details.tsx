import Image from 'next/image';

const ProductDetails = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
            <Image
              src="https://imgur.com/XfS6lp4.png"
              alt="Garrafa de Forever Aloe Vera Gel com um copo"
              width={600}
              height={500}
              className="relative z-10 rounded-2xl object-cover shadow-2xl"
              data-ai-hint="aloe vera drink"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Bebida feita do <span className="text-primary">puro gel de Aloe</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Conforme indicado pela literatura científica, o suco é composto por fibras, vitaminas, aminoácidos, minerais e enzimas essenciais para o metabolismo diário.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-bold text-primary">Vitaminas:</h3>
                <p className="text-muted-foreground">A, B1, B2, B3, B6, B8, B12, E, C, ácido fólico e betacaroteno.</p>
              </div>
              <div>
                <h3 className="font-bold text-primary">Minerais:</h3>
                <p className="text-muted-foreground">magnésio, manganês, zinco, cobre, cromo, cálcio, sódio, potássio e ferro.</p>
              </div>
              <div>
                <h3 className="font-bold text-primary">Aminoácidos:</h3>
                <p className="text-muted-foreground">contém 19 dos 20 aminoácidos, incluindo 7 dos 8 essenciais.</p>
              </div>
            </div>
            <p className="mt-6 font-bold text-white">Não contém glúten.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
