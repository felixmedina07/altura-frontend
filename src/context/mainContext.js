import { createContext, useState } from "react";

const initialValue = {
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
  isLogged: false,
  setIsLogged: () => {},
};

export const UserContext = createContext(initialValue);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialValue.user);
  const [token, setToken] = useState(initialValue.token);
  const [isLogged, setIsLogged] = useState(initialValue.isLogged);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
