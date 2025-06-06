
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle, Timer, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sampleQuestions = [
  {
    id: 'q1',
    text: 'What is the primary purpose of a W-4 form?',
    options: [
      { id: 'opt1', text: 'To report annual income to the IRS.' },
      { id: 'opt2', text: 'To allow employers to withhold the correct federal income tax from an employee\'s pay.' },
      { id: 'opt3', text: 'To apply for unemployment benefits.' },
      { id: 'opt4', text: 'To summarize an employee\'s taxable income and withholdings for the year.' },
    ],
    correctAnswer: 'opt2',
  },
  {
    id: 'q2',
    text: 'Which of the following is NOT typically considered a pre-tax deduction?',
    options: [
      { id: 'opt1', text: 'Health insurance premiums (Section 125 plan)' },
      { id: 'opt2', text: 'Traditional 401(k) contributions' },
      { id: 'opt3', text: 'Roth 401(k) contributions' },
      { id: 'opt4', text: 'Flexible Spending Account (FSA) contributions' },
    ],
    correctAnswer: 'opt3',
  },
];

export function SampleQuizView() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [attempts, setAttempts] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (timeLeft === 0 || submitted) return;
    const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, submitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let currentScore = 0;
    sampleQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        currentScore++;
      }
    });
    const percentage = (currentScore / sampleQuestions.length) * 100;
    setScore(percentage);

    toast({
      title: `Quiz Submitted (Attempt ${attempts})`,
      description: `You scored ${percentage.toFixed(0)}%. ${percentage >= 80 ? 'Congratulations!' : 'Please review the material.'}`,
      variant: percentage >= 80 ? "default" : "destructive",
    });
  };

  const handleRetake = () => {
    if (attempts < 2) {
      setAttempts(attempts + 1);
      setTimeLeft(15 * 60);
      setAnswers({});
      setSubmitted(false);
      setScore(0);
      toast({ title: `Starting Attempt ${attempts + 1}`, description: "Good luck!" });
    } else {
      toast({ title: "Maximum Attempts Reached", description: "You have used all available attempts for this sample quiz.", variant: "destructive" });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-headline text-2xl flex items-center">
            <HelpCircle className="mr-2 h-6 w-6 text-primary" />
            Sample Module Quiz
          </CardTitle>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Timer className="mr-1 h-4 w-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>
            <span className="text-muted-foreground">Attempt: {attempts} of 2</span>
          </div>
        </div>
        <CardDescription>This is a sample quiz to demonstrate interactive knowledge checks. Graded quizzes and exams are completed within Moodle.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {sampleQuestions.map((q, index) => (
          <div key={q.id} className="space-y-3 p-4 border rounded-lg bg-secondary/30">
            <p className="font-medium text-foreground">{index + 1}. {q.text}</p>
            <RadioGroup
              onValueChange={(value) => handleAnswerChange(q.id, value)}
              value={answers[q.id]}
              disabled={submitted}
            >
              {q.options.map(opt => (
                <div key={opt.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.id} id={`${q.id}-${opt.id}`} />
                  <Label htmlFor={`${q.id}-${opt.id}`} className="font-normal text-sm">
                    {opt.text}
                    {submitted && opt.id === q.correctAnswer && <CheckCircle className="inline-block ml-2 h-4 w-4 text-green-500" />}
                    {submitted && answers[q.id] === opt.id && opt.id !== q.correctAnswer && <AlertCircle className="inline-block ml-2 h-4 w-4 text-red-500" />}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={timeLeft === 0}>Submit Answers</Button>
        ) : (
          <Button onClick={handleRetake} disabled={attempts >= 2}>
            {attempts < 2 ? `Retake Quiz (Attempt ${attempts + 1})` : 'Max Attempts Reached'}
          </Button>
        )}
      </CardFooter>
      {submitted && (
        <div className="p-6 border-t text-center">
          <p className={`text-xl font-semibold ${score >= 80 ? 'text-green-600' : 'text-red-600'}`}>
            Your Score: {score.toFixed(0)}%
          </p>
          {score < 80 && attempts < 2 && <p className="text-sm text-muted-foreground mt-1">You can retake the quiz once more.</p>}
          {score < 80 && attempts >= 2 && <p className="text-sm text-muted-foreground mt-1">Please review the module content.</p>}
          {score >= 80 && <p className="text-sm text-green-600 mt-1">Excellent work!</p>}
        </div>
      )}
    </Card>
  );
}
