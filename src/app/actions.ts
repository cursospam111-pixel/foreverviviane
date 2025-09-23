
'use server';

import { explainIngredientBenefits } from '@/ai/flows/explain-ingredient-benefits';

export async function getIngredientExplanation(ingredientName: string) {
  try {
    const result = await explainIngredientBenefits({ ingredientName });
    return { success: true, data: result.explanation };
  } catch (error) {
    console.error('Error fetching ingredient explanation:', error);
    return { success: false, error: 'Não foi possível obter a explicação no momento. Tente novamente mais tarde.' };
  }
}
