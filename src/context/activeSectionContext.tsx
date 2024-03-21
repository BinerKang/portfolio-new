"use client";

import React, { createContext, useContext, useState } from 'react'

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: String;
  setActiveSection: React.Dispatch<React.SetStateAction<String>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<String>('主 页')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}