import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // all state---------------------------
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allToys, setToys] = useState([]);
  const [myToys, setMyToys] = useState([]);

  // all useEffect ---------------------------
  useEffect(() => {
    fetch("https://toy-market-server-orcin.vercel.app/allToysData")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [allToys]);
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://toy-market-server-orcin.vercel.app/allToysData?SellerContact=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyToys(data));
    }
  }, [user]);

  // toy-market-server-omega
  // all function---------------------------

  // authentication function------------------------
  const googleProvider = new GoogleAuthProvider();
  const SignInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signinwithemail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    allToys,
    setUser,
    SignInGoogle,
    login,
    signinwithemail,
    logout,
    setToys,
    myToys,
    setMyToys,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
