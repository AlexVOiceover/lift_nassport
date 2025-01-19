import React, { useState } from 'react';
import SentenceButton from '../components/ui/SentenceButton';
import TilesGrid from '../components/ui/TilesGrid';
import data from '../data/data.json';

const SentenceBuilderPage: React.FC = () => {
  const [sentenceParts, setSentenceParts] = useState({
    subject: 'Dave',
    verb: '',
    object: '',
    adverbial: '',
  });

  // Need this state to manage the modal for verb selection
  const [isVerbModalOpen, setIsVerbModalOpen] = useState(false);

  const updatePart = (part: 'verb' | 'object' | 'adverbial', value: string) => {
    setSentenceParts((prev) => ({
      ...prev,
      [part]: value,
    }));
  };

  const sentenceText =
    `${sentenceParts.subject} ${sentenceParts.verb} ${sentenceParts.object} ${sentenceParts.adverbial}`.trim();

  return (
    <div className='p-4 space-y-4'>
      {/* Display the sentence */}
      <div className='bg-gray-200 p-4 text-black rounded-md text-lg font-medium'>
        {sentenceText}
      </div>

      {/* Buttons for sentence parts */}
      <div className='flex space-x-2'>
        <SentenceButton
          type='subject'
          label={sentenceParts.subject}
          onClick={() => {}}
        />
        <SentenceButton
          type='verb'
          label={sentenceParts.verb || 'Choose Verb'}
          onClick={() => setIsVerbModalOpen(true)}
        />
        <SentenceButton
          type='object'
          label={sentenceParts.object || 'Enter Object'}
          onClick={() => {
            const enteredObject = prompt('Enter an object:'); // Replace with modal or custom UI
            if (enteredObject) updatePart('object', enteredObject);
          }}
        />
        <SentenceButton
          type='adverbial'
          label={sentenceParts.adverbial || 'Enter Adverbial'}
          onClick={() => {
            const enteredAdverbial = prompt('Enter an adverbial phrase:'); // Replace with modal or custom UI
            if (enteredAdverbial) updatePart('adverbial', enteredAdverbial);
          }}
        />
      </div>
      {/* Modal for verb selection */}
      {isVerbModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-lg shadow-lg p-4 w-3/4 h-3/4'>
            <h2 className='text-xl font-bold mb-4'>Select a Verb</h2>
            <TilesGrid
              items={data} // Pass the full data object
              onClick={(selectedVerb: string) => {
                updatePart('verb', selectedVerb); // Update the verb in the sentence
                setIsVerbModalOpen(false); // Close the modal
              }}
            />
            <button
              onClick={() => setIsVerbModalOpen(false)}
              className='mt-4 bg-red-500 text-white px-4 py-2 rounded-lg'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SentenceBuilderPage;
