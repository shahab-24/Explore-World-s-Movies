import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
 



  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Congrats..! ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });

      })
      .catch((error) => {
        setErr(error.message);
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Something went wrong!",
        //   footer: '<a href="#">Why do I have this issue?</a>',
        // });
      });
  };

  const userLogOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setUser(null);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const manageUpdateProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
       return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    userLogin,
    userLogOut,
    loading,
    setLoading,
    manageUpdateProfile,
    handleGoogleLogin,
    err,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
