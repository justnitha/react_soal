import React, { createContext, useState } from 'react';

export const TimeTakenContext = createContext();

export const TimeTakenProvider = ({ children }) => {
  const [timeTaken, setTimeTaken] = useState(0);

  return (
    <TimeTakenContext.Provider value={{ timeTaken, setTimeTaken }}>
      {children}
    </TimeTakenContext.Provider>
  );
};