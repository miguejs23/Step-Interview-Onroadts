import React, { useState } from 'react';

const Context = React.createContext({})

export function TitleContextProvider({ children }) {
  const [title, setTitle] = useState(`Welcome ${window.localStorage.getItem('username')}!`);

  return (
    <Context.Provider value={{title, setTitle}}>
      {children}
    </Context.Provider> 
  )
}

export default Context
