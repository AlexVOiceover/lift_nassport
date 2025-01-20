import React, { useState } from 'react';

interface TextInputProps {
  initialValue?: string;
  onAccept: (value: string) => void;
  onCancel: () => void;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  initialValue = '',
  onAccept,
  onCancel,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleAccept = () => {
    onAccept(inputValue);
  };

  return (
    <div className='flex flex-col space-y-4'>
      <input
        type='text'
        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder || 'Enter text here...'}
      />
      <div className='flex justify-start space-x-2'>
        <button
          onClick={handleAccept}
          className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
        >
          Accept
        </button>
        <button
          onClick={onCancel}
          className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TextInput;
