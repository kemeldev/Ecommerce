import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { usersList } from '../users/usersList'


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState(null)
  const [loginError, setLoginError] = useState(null)
  const [createUserMjs, setCreateUserMjs] = useState(null)

  const login =  (username, password) => {
    const verifyingUser = usersList.find(user => user.username == username && user.password == password)

    if (verifyingUser){
      setLoggedUser(username)
      setIsLoggedIn(true)
      setLoginError(null)
    } else {
      setLoginError("Login data Incorrect");
    }
  }

  const logout = () => {
    setLoggedUser(null)
    setIsLoggedIn(false);
  };

  const addUser = (username, password, email) => {
    // Create a new user object
    const newUser = {
      UserId: usersList.length + 1, // Assigning UserId based on the length of the usersList array
      username: username,
      password: password,
      email: email
    }
    // Add the new user to the usersList array
    usersList.push(newUser);
    setCreateUserMjs("User successfully created")
  }

  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout, loggedUser, loginError, addUser, createUserMjs, setCreateUserMjs }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) 