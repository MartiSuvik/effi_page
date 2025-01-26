import React from 'react';
import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: string;
  currentIndex: number;
  totalQuestions: number;
  children: React.ReactNode;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white">{question}</h2>
          <p className="text-white/60">
            Question {currentIndex + 1} of {totalQuestions}
          </p>
        </div>
        {children}
      </div>
    </motion.div>
  );
};