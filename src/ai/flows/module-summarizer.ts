// src/ai/flows/module-summarizer.ts
'use server';

/**
 * @fileOverview A module summarization AI agent.
 *
 * - summarizeModule - A function that summarizes a given module's content.
 * - SummarizeModuleInput - The input type for the summarizeModule function.
 * - SummarizeModuleOutput - The return type for the summarizeModule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeModuleInputSchema = z.object({
  moduleContent: z
    .string()
    .describe('The content of the module to be summarized.'),
});
export type SummarizeModuleInput = z.infer<typeof SummarizeModuleInputSchema>;

const SummarizeModuleOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the module content.'),
});
export type SummarizeModuleOutput = z.infer<typeof SummarizeModuleOutputSchema>;

export async function summarizeModule(input: SummarizeModuleInput): Promise<SummarizeModuleOutput> {
  return summarizeModuleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeModulePrompt',
  input: {schema: SummarizeModuleInputSchema},
  output: {schema: SummarizeModuleOutputSchema},
  prompt: `You are an expert learning assistant. Your task is to summarize the key concepts of a given module content so the learner can efficiently focus on the most important information and save time.

Module Content: {{{moduleContent}}}`,
});

const summarizeModuleFlow = ai.defineFlow(
  {
    name: 'summarizeModuleFlow',
    inputSchema: SummarizeModuleInputSchema,
    outputSchema: SummarizeModuleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
