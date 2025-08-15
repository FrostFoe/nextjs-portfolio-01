"use client";

import { createContext, useContext, useState } from "react";

interface NotFoundContextType {
  isNotFoundPage: boolean;
  setIsNotFoundPage: (value: boolean) => void;
}

const NotFoundContext = createContext<NotFoundContextType | undefined>(
  undefined,
);

export const NotFoundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isNotFoundPage, setIsNotFoundPage] = useState(false);

  return (
    <NotFoundContext.Provider value={{ isNotFoundPage, setIsNotFoundPage }}> {/* eslint-disable-line @typescript-eslint/no-unused-vars */}
      {children}
    </NotFoundContext.Provider>
  );
};

export const useNotFound = () => {
  const context = useContext(NotFoundContext);
  if (context === undefined) {
    throw new Error("useNotFound must be used within a NotFoundProvider");
  }
  return context;
};
