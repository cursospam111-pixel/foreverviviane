import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlayCircle, Star } from 'lucide-react';

const videoTestimonials = [
  { id: 'testimonial-video-1' },
  { id: 'testimonial-video-2' },
  { id: 'testimonial-video-3' },
];

const textTestimonials = [
  {
    id: 'testimonial-photo-1',
    name: 'Ana Silva',
    comment: 'Minha digestão melhorou muito desde que comecei a tomar! Sinto-me com mais energia e bem-estar. Recomendo!',
  },
  {
    id: 'testimonial-photo-2',
    name: 'Carlos Pereira',
    comment: 'O Forever Aloe Vera Gel é incrível! Notei uma grande diferença na minha saúde geral. Produto de alta qualidade.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Confira alguns depoimentos <span className="text-primary">reais</span> dos nossos clientes
          </h2>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {videoTestimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(p => p.id === testimonial.id);
            return (
              <div key={testimonial.id} className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={400}
                    height={300}
                    data-ai-hint={image.imageHint}
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/30"></div>
                <PlayCircle className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-red-600/80" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {textTestimonials.map((testimonial) => {
                const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                return (
                    <Card key={testimonial.name} className="rounded-2xl border-border bg-card p-6">
                        <CardContent className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                            {image && (
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                            <div>
                                <div className="flex items-center justify-center gap-1 md:justify-start">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                                </div>
                                <p className="mt-2 text-muted-foreground">&quot;{testimonial.comment}&quot;</p>
                                <p className="mt-4 font-bold text-white">{testimonial.name}</p>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
