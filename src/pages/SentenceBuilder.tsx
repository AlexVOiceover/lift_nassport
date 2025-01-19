import React, { useState } from 'react';

const SentenceBuilderPage: React.FC = () => {
  const [sentence, setSentence] = useState<string[]>([
    'Dave',
    'needs',
    'time to reflect',
    'at the end of the day',
  ]);

  const handleWordClick = (word: string) => {
    setSentence((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  return (
    <div className='flex flex-col items-center justify-start h-screen p-4 bg-gray-900 text-white'>
      {/* Header */}
      <header className='w-full mb-4'>
        <h1 className='text-2xl font-bold text-center'>Sentence Builder</h1>
      </header>

      {/* Main Sentence Builder Area */}
      <main className='flex flex-col items-center w-full max-w-lg gap-4'>
        {/* Sentence Preview */}
        <div className='w-full p-4 border border-gray-700 rounded-lg bg-gray-800'>
          <p className='text-base'>{sentence.join(' ')}</p>
        </div>

        {/* Words Display Area */}
        <div className='w-full flex flex-wrap gap-2'>
          {['Dave', 'needs', 'time to reflect', 'at the end of the day'].map(
            (word) => (
              <button
                key={word}
                onClick={() => handleWordClick(word)}
                className={`px-3 py-1 rounded-full text-sm ${
                  sentence.includes(word)
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-700 text-gray-300'
                } hover:bg-purple-500`}
              >
                {word}
              </button>
            )
          )}
        </div>

        {/* Privacy Options */}
        <div className='flex justify-between w-full'>
          <button className='px-4 py-2 text-sm font-medium bg-gray-700 rounded-lg hover:bg-purple-500'>
            Private
          </button>
          <button className='px-4 py-2 text-sm font-medium bg-gray-700 rounded-lg hover:bg-green-500'>
            Shared
          </button>
        </div>
      </main>
    </div>
  );
};

export default SentenceBuilderPage;
