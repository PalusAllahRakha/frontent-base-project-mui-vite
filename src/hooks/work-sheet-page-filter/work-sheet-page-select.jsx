import React, { createContext, useState } from 'react';

export const GridContext = createContext();
export const fileUploadContext = createContext();

export const GridProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('AMSNBAPerSize');

  return (
    <GridContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </GridContext.Provider>
  );
};
