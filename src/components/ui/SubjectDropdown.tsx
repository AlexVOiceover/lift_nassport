import React from 'react';
import Dropdown from './Dropdown';

interface SubjectDropdownProps {
  subject: string;
  descriptors: string[];
  onSelect: (value: string) => void;
}

const SubjectDropdown: React.FC<SubjectDropdownProps> = ({
  subject,
  descriptors,
  onSelect,
}) => {
  // Build the final options array:
  // ["Bob", "Bob's social media presence", "Bob's coffee addiction", ...]
  const dropdownOptions = [
    subject,
    ...descriptors.map((desc) => `${subject}'s ${desc}`),
  ];

  return <Dropdown options={dropdownOptions} onSelect={onSelect} />;
};

export default SubjectDropdown;
