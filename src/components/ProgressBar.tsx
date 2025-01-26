import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/20">
      <motion.div
        className="h-full bg-white"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};