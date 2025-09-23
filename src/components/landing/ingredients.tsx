'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2, Star } from 'lucide-react';
import { getIngredientExplanation } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";


const ingredients = [
  {
    id: 'ingredient-aloe',
    name: 'Puro Gel de Aloe Vera',
    description: 'O principal componente, conhecido por suas propriedades digestivas e nutritivas.',
  },
  {
    id: 'ingredient-vitamin-c',
    name: 'Vitamina C',
    description: 'Um poderoso antioxidante que ajuda a proteger as células e a apoiar o sistema imunológico.',
  },
  {
    id: 'ingredient-citric-acid',
    name: 'Ácido Cítrico',
    description: 'Regulador de acidez natural que ajuda a preservar a frescura do gel.',
  },
];

const Ingredients = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState<{name: string, explanation: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLearnMore = async (ingredientName: string) => {
    setIsLoading(true);
    setIsDialogOpen(true);
    setSelectedIngredient({ name: ingredientName, explanation: '' });

    const result = await getIngredientExplanation(ingredientName);
    
    if (result.success) {
      setSelectedIngredient({ name: ingredientName, explanation: result.data as string });
    } else {
      toast({
        variant: "destructive",
        title: "Erro",
        description: result.error,
      });
      setIsDialogOpen(false);
    }
    setIsLoading(false);
  };

  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            O segredo do suco de Aloe Vera mais <span className="text-primary">puro e poderoso</span> do mundo
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ingredients.map((ingredient) => {
            const image = PlaceHolderImages.find((p) => p.id === ingredient.id);
            return (
              <Card key={ingredient.id} className="flex flex-col items-center rounded-2xl border-border bg-black p-6 text-center shadow-lg">
                <CardHeader className="items-center">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={100}
                      height={100}
                      data-ai-hint={image.imageHint}
                      className="rounded-full"
                    />
                  )}
                  <CardTitle className="mt-4 text-2xl font-bold">{ingredient.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{ingredient.description}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="link" className="text-primary" onClick={() => handleLearnMore(ingredient.name)}>
                        Saiba mais
                    </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 flex items-center justify-center gap-4 rounded-xl bg-black p-4">
          <div className="flex items-center text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
          </div>
          <p className="text-lg font-bold text-white">
            4,9/5 <span className="font-light text-muted-foreground">| Milhares de clientes satisfeitos</span>
          </p>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">{selectedIngredient?.name}</DialogTitle>
          </DialogHeader>
          {isLoading ? (
            <div className="flex h-32 items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <DialogDescription className="mt-2 text-base text-white">
              {selectedIngredient?.explanation}
            </DialogDescription>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Ingredients;
