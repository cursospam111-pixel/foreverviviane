'use server';

/**
 * @fileOverview AI flow to explain the benefits of Lift Detox Black ingredients for weight loss.
 *
 * - explainIngredientBenefits - A function that generates explanations of the key ingredients and their specific benefits for weight loss.
 * - ExplainIngredientBenefitsInput - The input type for the explainIngredientBenefits function.
 * - ExplainIngredientBenefitsOutput - The return type for the explainIngredientBenefits function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainIngredientBenefitsInputSchema = z.object({
  ingredientName: z
    .string()
    .describe('The name of the ingredient in Lift Detox Black.'),
});
export type ExplainIngredientBenefitsInput = z.infer<typeof ExplainIngredientBenefitsInputSchema>;

const ExplainIngredientBenefitsOutputSchema = z.object({
  explanation: z
    .string()
    .describe(
      'A detailed explanation of how the ingredient helps with weight loss.'
    ),
});
export type ExplainIngredientBenefitsOutput = z.infer<typeof ExplainIngredientBenefitsOutputSchema>;

export async function explainIngredientBenefits(
  input: ExplainIngredientBenefitsInput
): Promise<ExplainIngredientBenefitsOutput> {
  return explainIngredientBenefitsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainIngredientBenefitsPrompt',
  input: {schema: ExplainIngredientBenefitsInputSchema},
  output: {schema: ExplainIngredientBenefitsOutputSchema},
  prompt: `You are a health and wellness expert. Explain how {{{ingredientName}}} helps with weight loss. Provide a detailed explanation.`,
});

const explainIngredientBenefitsFlow = ai.defineFlow(
  {
    name: 'explainIngredientBenefitsFlow',
    inputSchema: ExplainIngredientBenefitsInputSchema,
    outputSchema: ExplainIngredientBenefitsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
