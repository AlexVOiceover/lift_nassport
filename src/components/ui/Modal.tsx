import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50'>
      <div className='rounded-lg shadow-lg p-4 w-3/4 h-3/4 relative overflow-y-auto'>
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-0 left-0 bg-slate-700 text-red-800 hover:text-red-900 text-xl font-bold'
        >
          &times;
        </button>
        {/* Modal Header */}
        {title && <h2 className='text-xl font-bold mb-8'>{title}</h2>}

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
