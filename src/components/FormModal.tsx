import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { Question, FormState } from '../types';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const ACCESS_KEY = '41aec8b2-d65f-46e4-842d-340a06807c94';

const questions: Question[] = [
  {
    id: 'name',
    type: 'text',
    question: '👋 What\'s your name?',
    placeholder: 'Type your name...',
    validation: (value: string) => value.length >= 2 ? null : 'Name must be at least 2 characters',
  },
  {
    id: 'email',
    type: 'email',
    question: '📧 What\'s your email address?',
    placeholder: 'name@example.com',
    validation: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Please enter a valid email address',
  },
  {
    id: 'company',
    type: 'text',
    question: '🏢 What company are you from?',
    placeholder: 'Company name...',
    validation: (value: string) => value.length >= 2 ? null : 'Company name must be at least 2 characters',
  },
  {
    id: 'appointment',
    type: 'text',
    question: '📅 When\'s a good time to chat?',
    placeholder: '26 of January works best for me, at 12AM',
    validation: (value: string) => value.length >= 5 ? null : 'Please provide a specific date and time',
  },
];

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formState, setFormState] = useState<FormState>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateField = (value: string) => {
    const currentQ = questions[currentQuestion];
    if (currentQ.validation) {
      const error = currentQ.validation(value);
      setValidationError(error);
      return !error;
    }
    return true;
  };

  const submitForm = async (data: FormState) => {
    try {
      setIsSubmitting(true);
      setError(null);

      // Validate all fields before submission
      for (const question of questions) {
        const value = data[question.id];
        if (question.validation) {
          const error = question.validation(value);
          if (error) {
            throw new Error(`Invalid ${question.id}: ${error}`);
          }
        }
      }

      // Create a plain object with only the necessary data
      const formData = {
        access_key: ACCESS_KEY,
        name: data.name || '',
        email: data.email || '',
        company: data.company || '',
        appointment: data.appointment || '',
      };

      const response = await axios.post(WEB3FORMS_URL, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.status !== 200) {
        throw new Error(response.data.message || 'Submission failed');
      }

      setIsCompleted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
      setIsCompleted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = useCallback((value: string) => {
    if (!validateField(value)) {
      return;
    }

    setValidationError(null);
    const updatedFormState = {
      ...formState,
      [questions[currentQuestion].id]: value.trim()
    };
    setFormState(updatedFormState);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      submitForm(updatedFormState);
    }
  }, [currentQuestion, formState]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent, value: string) => {
    if (e.key === 'Enter' && !e.shiftKey && value.trim()) {
      e.preventDefault();
      handleNext(value);
    }
  }, [handleNext]);

  const progress = (currentQuestion / questions.length) * 100;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <ProgressBar progress={progress} />

          {isCompleted ? (
            <div className="text-center text-white space-y-6 py-12">
              <Sparkles className="w-16 h-16 mx-auto text-yellow-400 animate-pulse" />
              <h1 className="text-4xl font-bold">Perfect!</h1>
              <p className="text-xl text-gray-300">
                I'll get back to you shortly to confirm the appointment.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <QuestionCard
                key={questions[currentQuestion].id}
                question={questions[currentQuestion].question}
                currentIndex={currentQuestion}
                totalQuestions={questions.length}
              >
                <div className="space-y-4">
                  <input
                    type={questions[currentQuestion].type}
                    placeholder={questions[currentQuestion].placeholder}
                    className={`w-full bg-transparent border-b-2 px-2 py-4 text-2xl 
                             text-white placeholder-white/50 focus:outline-none
                             transition-colors duration-200 ${
                               validationError 
                                 ? 'border-red-400 focus:border-red-500' 
                                 : 'border-white/20 focus:border-white'
                             }`}
                    autoFocus
                    onKeyPress={(e) => {
                      const target = e.target as HTMLInputElement;
                      handleKeyPress(e, target.value);
                    }}
                    onChange={(e) => validateField(e.target.value)}
                    disabled={isSubmitting}
                  />
                  
                  {(validationError || error) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">{validationError || error}</span>
                    </motion.div>
                  )}
                </div>
              </QuestionCard>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};