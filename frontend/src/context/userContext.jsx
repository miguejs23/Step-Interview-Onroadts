import React, { useState } from 'react';

const UserContext = React.createContext({});

export function UserContextProvider ({ children }) {
  const [username, setUsername] = useState(
    () => window.localStorage.getItem("username")
  );
  const [password, setPassword] = useState("");
  return (
    <UserContext.Provider
      value={{username, setUsername, password, setPassword}}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
