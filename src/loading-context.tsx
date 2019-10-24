import React, { useContext, useState } from "react";

const LoadingContext = React.createContext({
  isLoading: true,
  setIsLoading: (isLoading: boolean) => {}
});

export const useLoadingContext = () => useContext(LoadingContext);
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
