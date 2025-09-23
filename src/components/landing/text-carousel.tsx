"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const messages = [
  "FRETE GRÁTIS PARA TODO O BRASIL",
  "NÃO PERCA ESSA OPORTUNIDADE ÚNICA",
  "COMPRA 100% SEGURA E GARANTIDA",
  "PEÇA JÁ O SEU ALOE VERA GEL",
];

const TextCarousel = () => {
  return (
    <section className="bg-primary py-3 overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {messages.map((message, index) => (
            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <p className="font-bold text-primary-foreground text-center font-headline whitespace-nowrap">
                  {message}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default TextCarousel;
