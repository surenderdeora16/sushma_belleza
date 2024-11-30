'use client'

import { createContext, useContext, useState } from 'react';

const ActiveTabContext = createContext();

export const ActiveTabProvider = ({ children }) => {
  const [activeSectionTab, setActiveSectionTab] = useState('');
  
  return (
    <ActiveTabContext.Provider value={{ activeSectionTab, setActiveSectionTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export const useActivetab = () => {
    return useContext(ActiveTabContext);
};
