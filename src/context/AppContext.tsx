import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the data you want to store in context
interface AppContextInterface {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

// Create the actual context with a default value.
//    For now, just give empty defaults that match the interface.
export const AppContext = createContext<AppContextInterface>({
  userName: '',
  setUserName: () => {},
});

// 3) Create a Provider component that will wrap your app.
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [userName, setUserName] = useState('');

  // Prepare the value to share across the app
  const value: AppContextInterface = {
    userName,
    setUserName,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
