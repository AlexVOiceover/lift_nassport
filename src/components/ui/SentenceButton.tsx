import React from 'react';

type ButtonType = 'subject' | 'verb' | 'object' | 'adverbial';

interface SentenceButtonProps {
  label: string; // Text to display on the button
  type: ButtonType; // Type of the button
  onClick?: () => void; // Optional click handler
}

const SentenceButton: React.FC<SentenceButtonProps> = ({
  label,
  type,
  onClick,
}) => {
  // Determine button style based on the type
  const getButtonStyles = () => {
    switch (type) {
      case 'subject':
        return 'bg-gray-300 text-black cursor-default'; // Static button
      case 'verb':
        return 'bg-blue-500 text-white hover:bg-blue-600'; // Opens TilesGrid
      case 'object':
        return 'bg-green-500 text-white hover:bg-green-600'; // Opens free text entry
      case 'adverbial':
        return 'bg-purple-500 text-white hover:bg-purple-600'; // Opens free text entry
      default:
        return 'bg-gray-300 text-black';
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-md ${getButtonStyles()}`}
      onClick={type === 'subject' ? undefined : onClick} // Disable click for subject
    >
      {label}
    </button>
  );
};

export default SentenceButton;
