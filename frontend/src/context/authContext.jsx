import React, { useState } from 'react';

const Context = React.createContext({})

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(
    () => window.localStorage.getItem("auth")
  );
  const [userId, setUserId] = useState(
    () => window.localStorage.getItem("userId")
  )

  return (
    <Context.Provider value={{auth, setAuth, userId, setUserId}}>
      {children}
    </Context.Provider> 
  )
}

export default Context
