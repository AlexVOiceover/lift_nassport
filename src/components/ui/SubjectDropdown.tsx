// SubjectDropdown.tsx
import React from 'react';
import Dropdown from './Dropdown';

interface SubjectDropdownProps {
  subject: string;
  descriptors: string[];
  onSelect: (value: string) => void;
  // If you want to keep the "label" prop or pass more stuff, you can add them here.
  label?: string; // optional
}

const SubjectDropdown: React.FC<SubjectDropdownProps> = ({
  subject,
  descriptors,
  onSelect,
  label = subject, // or any default label you want
}) => {
  // Build the final options array:
  // ["Bob", "Bob's social media presence", "Bob's coffee addiction", ...]
  const dropdownOptions = [
    subject,
    ...descriptors.map((desc) => `${subject}'s ${desc}`),
  ];

  return (
    <Dropdown
      label={label}
      options={dropdownOptions}
      onSelect={onSelect}
      // Keep everything else as your existing Dropdown code requires
    />
  );
};

export default SubjectDropdown;
