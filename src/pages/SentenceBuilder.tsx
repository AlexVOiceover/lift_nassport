import React, { useState } from 'react';
import SentenceButton from '../components/ui/SentenceButton';
import TilesGrid from '../components/ui/TilesGrid';
import TextInput from '../components/ui/TextInput';
import Modal from '../components/ui/Modal';
import data from '../data/data.json';

const SentenceBuilderPage: React.FC = () => {
  const [sentenceParts, setSentenceParts] = useState({
    subject: 'Dave',
    verb: '',
    object: '',
    adverbial: '',
  });

  //Control for the modals
  const [isVerbModalOpen, setIsVerbModalOpen] = useState(false);
  const [isTextInputModalOpen, setIsTextInputModalOpen] = useState(false);
  const [inputType, setInputType] = useState<'object' | 'adverbial'>('object');

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
            setInputType('object');
            setIsTextInputModalOpen(true);
          }}
        />
        <SentenceButton
          type='adverbial'
          label={sentenceParts.adverbial || 'Enter Adverbial'}
          onClick={() => {
            setInputType('adverbial');
            setIsTextInputModalOpen(true);
          }}
        />
      </div>
      {/* Modal for verb selection */}
      <Modal
        isOpen={isVerbModalOpen}
        onClose={() => setIsVerbModalOpen(false)}
        title='Select a Verb'
      >
        <TilesGrid
          items={data} // Pass the data with thirdPerson property
          onClick={(selectedVerb: { name: string; thirdPerson: string }) => {
            updatePart('verb', selectedVerb.thirdPerson); // Copy thirdPerson to the sentence
            setIsVerbModalOpen(false); // Close the modal
          }}
        />
      </Modal>
      {/* Modal for text input */}

      <Modal
        isOpen={isTextInputModalOpen}
        onClose={() => setIsTextInputModalOpen(false)}
        title={
          inputType === 'object'
            ? 'Enter an Object'
            : 'Enter an Adverbial Phrase'
        }
      >
        <TextInput
          initialValue={sentenceParts[inputType]}
          placeholder={
            inputType === 'object'
              ? 'Enter an object'
              : 'Enter an adverbial phrase'
          }
          onAccept={(value) => {
            updatePart(inputType, value);
            setIsTextInputModalOpen(false);
          }}
          onCancel={() => setIsTextInputModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default SentenceBuilderPage;
