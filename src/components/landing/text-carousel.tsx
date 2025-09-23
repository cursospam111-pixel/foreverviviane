"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Leaf } from "lucide-react";

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
        <CarouselContent className="-ml-2 flex items-center">
          {messages.map((message, index) => (
            <CarouselItem key={index} className="pl-4 basis-auto">
              <div className="p-1 flex items-center gap-4">
                <p className="font-bold text-primary-foreground text-center font-headline whitespace-nowrap">
                  {message}
                </p>
                {index < messages.length -1 && <Leaf className="h-5 w-5 text-primary-foreground" />}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default TextCarousel;
