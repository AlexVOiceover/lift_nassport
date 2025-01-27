// BuiltSentences.tsx
import React from 'react';
import { FaLock, FaLockOpen, FaExclamationCircle } from 'react-icons/fa';
import { PreStatement } from '../../types/types';

interface BuiltSentencesProps {
  sentences: PreStatement[];
  onSelectSentence: (sentence: PreStatement, index: number) => void;
}

const BuiltSentences: React.FC<BuiltSentencesProps> = ({
  sentences,
  onSelectSentence,
}) => {
  // Helper function to determine if a sentence is incomplete
  const isIncomplete = (sentence: PreStatement): boolean => {
    return (
      sentence.verb.includes('???') ||
      sentence.object.includes('???') ||
      (sentence.adverbial ? sentence.adverbial.includes('???') : false)
    );
  };

  return (
    <div className='bg-gray-200 text-black rounded-md text-lg font-medium text-left min-h-[100px] p-2'>
      {sentences.length > 0
        ? sentences.map((sentence, index) => {
            const incomplete = isIncomplete(sentence); // Check if the sentence is incomplete

            return (
              <div
                key={index}
                className={`cursor-pointer px-2 py-1 rounded-md flex justify-between items-center mb-2 ${
                  incomplete ? 'bg-yellow-100' : 'hover:bg-gray-300'
                }`}
                onClick={() => onSelectSentence(sentence, index)}
              >
                <span className='flex items-center'>
                  {sentence.subject} {sentence.verb} {sentence.object}{' '}
                  {sentence.adverbial}
                  {incomplete && (
                    <FaExclamationCircle
                      className='ml-2 text-yellow-600'
                      title='Incomplete Statement'
                    />
                  )}
                </span>
                <span>{sentence.isPublic ? <FaLockOpen /> : <FaLock />}</span>
              </div>
            );
          })
        : 'No statements yet.'}
    </div>
  );
};

export default BuiltSentences;
