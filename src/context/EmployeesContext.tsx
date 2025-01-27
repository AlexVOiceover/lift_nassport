import React, { createContext, useState } from 'react';

interface EmployeesContextType {
  employeeName: string;
  setEmployeeName: React.Dispatch<React.SetStateAction<string>>;
  employer: string;
  setEmployer: React.Dispatch<React.SetStateAction<string>>;
}

// 1) Create the actual context object
export const EmployeesContext = createContext<EmployeesContextType | undefined>(
  undefined
);

// 2) Create a provider component
export const EmployeesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // We'll store the shared data in state here
  const [employeeName, setEmployeeName] = useState('');
  const [employer, setEmployer] = useState('');

  // The context value is everything we want to expose to consuming components
  const contextValue: EmployeesContextType = {
    employeeName,
    setEmployeeName,
    employer,
    setEmployer,
  };

  return (
    <EmployeesContext.Provider value={contextValue}>
      {children}
    </EmployeesContext.Provider>
  );
};
