const WhyForever = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Por que a Forever é <span className="text-primary">número 1</span> em Aloe no mundo?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubra em detalhes o que nos torna líderes mundiais na produção de Aloe Vera.
          </p>
        </div>
        <div className="mt-12">
          <div className="aspect-video overflow-hidden rounded-2xl border-4 border-primary shadow-2xl shadow-primary/20">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/7bIlvRsCFss"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyForever;
