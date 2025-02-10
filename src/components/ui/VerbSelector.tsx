'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import categoryStructure from '../../data/categoryStructure.json';
import verbData from '../../data/data2.json';
import { Category, Verb } from '../../types/types';

interface VerbSelectorProps {
  onVerbSelect: (verb: Verb) => void;
}

const VerbSelector: React.FC<VerbSelectorProps> = ({ onVerbSelect }) => {
  const [categoryPath, setCategoryPath] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<Category>(
    categoryStructure.root
  );
  const [selectedVerb, setSelectedVerb] = useState<Verb | null>(null);

  useEffect(() => {
    setSelectedVerb(null);
  }, []);

  const handleCategorySelect = (category: Category) => {
    setCategoryPath([...categoryPath, currentCategory]);
    setCurrentCategory(category);
  };

  const handleBack = () => {
    if (categoryPath.length > 0) {
      const newPath = [...categoryPath];
      const previousCategory = newPath.pop();
      setCategoryPath(newPath);
      if (previousCategory) {
        setCurrentCategory(previousCategory);
      }
    }
  };

  const handleVerbSelect = (verb: Verb) => {
    setSelectedVerb(verb);
    onVerbSelect(verb);
  };

  const renderNavigationPath = () => {
    return (
      <div className='flex items-center overflow-x-auto whitespace-nowrap px-4 py-2 bg-gray-100'>
        {categoryPath.map((category, index) => (
          <motion.button
            key={category.id}
            className='flex items-center text-sm text-gray-600 hover:text-gray-800'
            onClick={() => {
              setCategoryPath(categoryPath.slice(0, index));
              setCurrentCategory(category);
            }}
          >
            <span>{category.displayName}</span>
            <ChevronRight className='w-4 h-4 mx-1' />
          </motion.button>
        ))}
        <span className='text-sm text-gray-800'>
          {currentCategory.displayName}
        </span>
      </div>
    );
  };

  const renderGrid = (items: React.ReactNode[]) => {
    const itemCount = items.length;
    let columns = Math.floor(Math.sqrt(itemCount));
    let rows = Math.ceil(itemCount / columns);

    // Ensure columns <= rows and adjust for even distribution
    while (columns > rows || itemCount % columns !== 0) {
      columns--;
      rows = Math.ceil(itemCount / columns);
    }

    return (
      <div
        className={`grid gap-4 p-4 h-full overflow-hidden`}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {items}
      </div>
    );
  };

  const renderCategorySelection = () => {
    const items = currentCategory.children || [];

    const categoryButtons = items.map((item) => (
      <motion.button
        key={item.id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center'
        style={{
          background: item.color,
          color: '#ffffff',
        }}
        onClick={() => handleCategorySelect(item)}
      >
        <span className='text-3xl mb-2'>{item.icon}</span>
        <span className='font-medium break-words'>{item.displayName}</span>
      </motion.button>
    ));

    return renderGrid(categoryButtons);
  };

  const renderVerbSelection = () => {
    const verbs = verbData.verbs.filter((verb) =>
      verb.categories.includes(currentCategory.name)
    );

    const verbButtons = verbs.map((verb) => (
      <motion.button
        key={verb.name}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='p-4 rounded-lg shadow-md flex items-center justify-center text-center'
        style={{
          background: verb.color,
          color: getContrastColor(verb.color),
        }}
        onClick={() => handleVerbSelect(verb)}
      >
        <span className='break-words'>{verb.name}</span>
      </motion.button>
    ));

    return renderGrid(verbButtons);
  };

  const getContrastColor = (hexColor: string) => {
    const r = Number.parseInt(hexColor.slice(1, 3), 16);
    const g = Number.parseInt(hexColor.slice(3, 5), 16);
    const b = Number.parseInt(hexColor.slice(5, 7), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000000' : '#ffffff';
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-lg w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden'>
        <div className='flex items-center p-4 border-b border-gray-200'>
          {categoryPath.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='mr-2 p-2 text-gray-600 rounded-full hover:bg-gray-100'
              onClick={handleBack}
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}
          <h2 className='text-2xl font-light flex-grow text-center text-gray-800'>
            Verb Selector
          </h2>
        </div>
        {renderNavigationPath()}
        <div className='flex-grow overflow-auto bg-gray-50'>
          {currentCategory.children
            ? renderCategorySelection()
            : renderVerbSelection()}
        </div>
        {selectedVerb && (
          <div className='p-4 bg-white bg-opacity-90 border-t border-gray-200'>
            <h3 className='text-xl font-semibold text-gray-800'>
              {selectedVerb.name}
            </h3>
            <p className='text-gray-600'>
              Popularity: {selectedVerb.popularity}
            </p>
            <p className='text-gray-600'>
              Categories: {selectedVerb.categories.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerbSelector;
