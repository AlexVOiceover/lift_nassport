import React, { useState } from 'react';

interface TextInputProps {
  initialValue?: string;
  onAccept: (value: string) => void;
  onCancel: () => void;
  placeholder?: string;
  dictionary: string[];
}

const TextInput: React.FC<TextInputProps> = ({
  initialValue = '',
  onAccept,
  onCancel,
  placeholder,
  dictionary,
}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setSelectedIndex(null); // Reset selected index

    // Filter dictionary to find matches
    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const lowerCaseValue = value.toLowerCase();
      const filteredSuggestions = dictionary.filter((word) =>
        word.toLowerCase().startsWith(lowerCaseValue)
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleAccept = () => {
    onAccept(inputValue);
    setSuggestions([]); // Clear suggestions on accept
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion); // Update input with the selected suggestion
    setSuggestions([]); // Clear suggestions
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) =>
        prev === null || prev === suggestions.length - 1 ? 0 : prev + 1
      );
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) =>
        prev === null || prev === 0 ? suggestions.length - 1 : prev - 1
      );
    } else if (e.key === 'Enter') {
      if (selectedIndex !== null) {
        handleSuggestionClick(suggestions[selectedIndex]);
      } else {
        handleAccept(); // Accept current input if no suggestion is selected
      }
      e.preventDefault();
    }
  };

  return (
    <div className='flex flex-col space-y-4 relative'>
      <input
        type='text'
        className='w-full p-2 border bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={handleKeyDown} // Added onKeyDown
        placeholder={placeholder || 'Enter text here...'}
      />
      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className='left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10 text-black text-left'>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`px-4 py-2 hover:bg-blue-100 cursor-pointer ${
                selectedIndex === index ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

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
