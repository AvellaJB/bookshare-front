import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  //State creation
  const [someState, setSomeState] = useState();

  //State management

  return (
    <Context.Provider
      value={{
        someState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
