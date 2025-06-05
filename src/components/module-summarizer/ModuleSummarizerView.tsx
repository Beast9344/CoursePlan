'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { summarizeModule, type SummarizeModuleInput, type SummarizeModuleOutput } from '@/ai/flows/module-summarizer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


const formSchema = z.object({
  moduleContent: z.string().min(50, { message: 'Module content must be at least 50 characters.' }).max(10000, {message: 'Module content must be less than 10,000 characters.'}),
});

type FormData = z.infer<typeof formSchema>;

export function ModuleSummarizerView() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      moduleContent: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setSummary(null);
    try {
      const input: SummarizeModuleInput = { moduleContent: data.moduleContent };
      const output: SummarizeModuleOutput = await summarizeModule(input);
      setSummary(output.summary);
      toast({
        title: "Summary Generated!",
        description: "The module content has been successfully summarized.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error summarizing module:', error);
      setSummary('Failed to generate summary. Please try again.');
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center">
            <Wand2 className="mr-2 h-6 w-6 text-primary" />
            AI Module Summarizer
          </CardTitle>
          <CardDescription>
            Paste your Moodle module content below to get a concise AI-generated summary.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="moduleContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="moduleContent">Module Content</FormLabel>
                    <FormControl>
                      <Textarea
                        id="moduleContent"
                        placeholder="Enter the full text content of the module here..."
                        className="min-h-[200px] resize-y"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Summary
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {summary && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap rounded-md border bg-muted/30 p-4 text-sm">
              {summary}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
