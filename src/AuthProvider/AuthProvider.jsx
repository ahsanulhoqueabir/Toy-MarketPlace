import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // all state---------------------------
  const [user, setUser] = useState(null);

  // all function---------------------------

  // authentication function------------------------
  const googleProvider = new GoogleAuthProvider();
  const SignInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signinwithemail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    SignInGoogle,
    login,
    signinwithemail,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
