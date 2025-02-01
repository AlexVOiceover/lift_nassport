import React from 'react';
interface SentenceButtonProps {
  label: string; // Text to display on the button
  defaultValue: string; // Default placeholder value
  onClick?: () => void; // Optional click handler
}

const SentenceButton: React.FC<SentenceButtonProps> = ({
  label,
  defaultValue,
  onClick,
}) => {
  // Determine if the button is "filled"
  const isFilled = label !== defaultValue;

  // Determine button styles dynamically
  const getButtonStyles = () => {
    return isFilled
      ? 'bg-blue-500 text-white hover:bg-blue-600' // Blue when filled
      : 'bg-gray-300 text-black hover:bg-gray-400'; // Grey when default redeploy
  };

  return (
    <button
      className={`px-4 py-2 rounded-md ${getButtonStyles()}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SentenceButton;
