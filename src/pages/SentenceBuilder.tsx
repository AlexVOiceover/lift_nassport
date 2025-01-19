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

  const [builtSentences, setBuiltSentences] = useState<string[]>([]); // List of built sentences
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

  const addSentence = () => {
    const sentenceText =
      `${sentenceParts.subject} ${sentenceParts.verb} ${sentenceParts.object} ${sentenceParts.adverbial}`.trim();
    if (sentenceText) {
      setBuiltSentences((prev) => [...prev, sentenceText]);
      setSentenceParts({
        subject: 'Dave',
        verb: '',
        object: '',
        adverbial: '',
      }); // Reset sentence parts
    }
  };

  const sentenceText =
    `${sentenceParts.subject} ${sentenceParts.verb} ${sentenceParts.object} ${sentenceParts.adverbial}`.trim();

  return (
    <div className='p-4 space-y-4'>
      {/* Display built sentences */}
      <div className='space-y-2 bg-gray-300 rounded-md text-lg font-medium'>
        {builtSentences.length > 0 ? (
          builtSentences.map((sentence, index) => (
            <div key={index} className='p-2 text-black rounded-md text-lg'>
              {sentence}
            </div>
          ))
        ) : (
          <div className='text-gray-500 italic'>No sentences built yet.</div>
        )}
      </div>

      {/* Display the current sentence */}
      <div className='flex items-center space-x-2'>
        <div className='flex-grow bg-gray-200 p-1 text-black rounded-md text-lg font-medium'>
          {sentenceText}
        </div>
        <button
          onClick={addSentence}
          className='bg-green-500 text-white px-4 py-2 rounded-lg'
        >
          +
        </button>
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
          items={data}
          onAccept={(selectedVerb) => {
            updatePart('verb', selectedVerb.thirdPerson);
            setIsVerbModalOpen(false);
          }}
          onCancel={() => setIsVerbModalOpen(false)}
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
