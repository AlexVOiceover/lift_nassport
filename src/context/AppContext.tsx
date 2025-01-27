import React, { createContext, useState, ReactNode } from 'react';
import { PreStatement } from '../types/types';

// Define the shape of the data you want to store in context
interface AppContextInterface {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  statements: PreStatement[];
  setStatements: React.Dispatch<React.SetStateAction<PreStatement[]>>;
}

// Create the actual context with a default value.
//    For now, just give empty defaults that match the interface.
export const AppContext = createContext<AppContextInterface>({
  userName: '',
  setUserName: () => {},
  statements: [],
  setStatements: () => {},
});

// 3) Create a Provider component that will wrap your app.
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [statements, setStatements] = useState<PreStatement[]>([]);

  // Prepare the value to share across the app
  const value: AppContextInterface = {
    userName,
    setUserName,
    statements,
    setStatements,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
