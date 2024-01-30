import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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

  const authInfo = {
    user,
    setUser,
    SignInGoogle,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
