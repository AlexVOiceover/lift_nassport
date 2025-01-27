import React from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { PreStatement } from '../../types/types';

interface BuiltSentencesProps {
  sentences: PreStatement[];
  onSelectSentence: (sentence: PreStatement, index: number) => void;
}

const BuiltSentences: React.FC<BuiltSentencesProps> = ({
  sentences,
  onSelectSentence,
}) => {
  return (
    <div className='bg-gray-200 text-black rounded-md text-lg font-medium text-left min-h-[100px]'>
      {sentences.length > 0
        ? sentences.map((sentence, index) => (
            <div
              key={index}
              className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-md flex justify-between items-center'
              onClick={() => onSelectSentence(sentence, index)}
            >
              <span>
                {sentence.subject} {sentence.verb} {sentence.object}{' '}
                {sentence.adverbial}
              </span>
              <span>{sentence.isPublic ? <FaLockOpen /> : <FaLock />}</span>
            </div>
          ))
        : 'No statements yet.'}
    </div>
  );
};

export default BuiltSentences;
