import React, { useState } from 'react';
import SentenceButton from '../components/ui/SentenceButton';
import TilesGrid from '../components/ui/TilesGrid';
import TextInput from '../components/ui/TextInput';
import Modal from '../components/ui/Modal';
import data from '../data/data.json';
import { FaLock, FaLockOpen } from 'react-icons/fa';

const SentenceBuilderPage: React.FC = () => {
  const [sentenceParts, setSentenceParts] = useState({
    subject: 'Dave',
    verb: '',
    object: '',
    adverbial: '',
    isPublic: false,
  });

  const [builtSentences, setBuiltSentences] = useState<
    { text: string; isPublic: boolean }[]
  >([]); // List of built sentences with public status

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
    <div className='min-h-screen flex flex-col items-center pt-6 bg-gray-800 text-white'>
      {/* Page Title */}
      <h1 className='text-2xl font-bold mb-4'>Statements Builder</h1>

      <div className='p-4 space-y-4 '>
        {/* Buttons for sentence parts */}
        <div className='flex space-x-2'>
          <SentenceButton
            defaultValue='Choose Subject' // Default value for the subject
            label={sentenceParts.subject}
            onClick={() => {}}
          />
          <SentenceButton
            defaultValue='Choose Verb' // Default value for the verb
            label={sentenceParts.verb || 'Choose Verb'}
            onClick={() => setIsVerbModalOpen(true)}
          />
          <SentenceButton
            defaultValue='Enter Object' // Default value for the object
            label={sentenceParts.object || 'Enter Object'}
            onClick={() => {
              setInputType('object');
              setIsTextInputModalOpen(true);
            }}
          />
          {/* <SentenceButton
            defaultValue='Enter Adverbial' // Default value for the adverbial
            label={sentenceParts.adverbial || 'Enter Adverbial'}
            onClick={() => {
              setInputType('adverbial');
              setIsTextInputModalOpen(true);
            }}
          /> */}
          <button
            onClick={() =>
              setSentenceParts((prev) => ({
                ...prev,
                isPublic: !prev.isPublic,
              }))
            }
            className={`px-4 py-2 rounded-md flex items-center justify-center ${
              sentenceParts.isPublic
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
          >
            {sentenceParts.isPublic ? <FaLockOpen /> : <FaLock />}
          </button>
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded-md ${
              sentenceParts.verb
                ? 'hover:bg-green-600'
                : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => {
              if (sentenceParts.verb) {
                setBuiltSentences((prev) => [
                  { text: sentenceText, isPublic: sentenceParts.isPublic }, // Add public status
                  ...prev,
                ]);
                setSentenceParts({
                  subject: 'Dave',
                  verb: '',
                  object: '',
                  adverbial: '',
                  isPublic: false,
                });
              }
            }}
            disabled={!sentenceParts.verb} // Disable button if verb is not added
          >
            +
          </button>
        </div>

        {/* Display the current sentence */}
        {/* <div className='flex items-center space-x-2'>
          <div className='flex-grow bg-gray-200 p-1 text-black rounded-md text-lg text-left font-medium'>
            {sentenceText}
          </div>
          <button
            className={`bg-green-500 text-white px-4 py-2 rounded-md ${
              sentenceParts.verb
                ? 'hover:bg-green-600'
                : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => {
              if (sentenceParts.verb) {
                setBuiltSentences((prev) => [
                  { text: sentenceText, isPublic: sentenceParts.isPublic }, // Add public status
                  ...prev,
                ]);
                setSentenceParts({
                  subject: 'Dave',
                  verb: '',
                  object: '',
                  adverbial: '',
                  isPublic: false,
                });
              }
            }}
            disabled={!sentenceParts.verb} // Disable button if verb is not added
          >
            +
          </button>
        </div> */}

        {/* Display built sentences */}
        <div className='bg-gray-200 text-black rounded-md text-lg font-medium text-left min-h-[100px]'>
          {builtSentences.length > 0
            ? builtSentences.map((sentence, index) => (
                <div
                  key={index}
                  className='cursor-pointer hover:bg-gray-300 px-2 py-1 rounded-md flex justify-between items-center'
                  onClick={() => {
                    const parts = sentence.text.split(' ');

                    setSentenceParts({
                      subject: parts[0] || '',
                      verb: parts[1] || '',
                      object: parts[2] || '',
                      adverbial: parts.slice(3).join(' ') || '',
                      isPublic: sentence.isPublic,
                    });

                    // Remove the selected sentence from the list
                    setBuiltSentences((prev) =>
                      prev.filter((_, i) => i !== index)
                    );
                  }}
                >
                  <span>{sentence.text}</span>
                  <span>{sentence.isPublic ? '🔓' : '🔒'}</span>
                </div>
              ))
            : 'No statements yet.'}
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
              updatePart('verb', selectedVerb.thirdPerson.toLowerCase());
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
              updatePart(inputType, value.toLowerCase());
              setIsTextInputModalOpen(false);
            }}
            onCancel={() => setIsTextInputModalOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default SentenceBuilderPage;
