import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import axios from 'axios';





const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState (true);
    const [user,setUser] = useState(null)
      
    // Register
    const createUser = (email,password) =>
    {
        setLoading(true);
        return createUserWithEmailAndPassword (auth,email,password)
    }

    // SigIn
    
    const SignInUser = (email,password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    // SignOut

    const signOutUser = () =>{
      setLoading(true);
      return signOut(auth)
    }

    // Auth State Observer

   useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);

    if (currentUser?.email) {
      const userData = { email: currentUser.email };
      
      // 1. Correct syntax for withCredentials (it's the 3rd argument in POST)
      axios.post('http://localhost:3000/jwt', userData, { withCredentials: true })
        .then((res) => {
          console.log("Cookie has been set by server:", res.data);
         
        })
        .catch((error) => console.log("JWT Error:", error));
    }
    
    console.log('user in the auth state change', currentUser);
  });

  return () => {
    unSubscribe();
  };
}, []);


    //Google use


    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup (auth, googleAuthProvider)
    }


    const authInfo = {
        loading,
        user,
        createUser,
        SignInUser,
        signInWithGoogle,
        signOutUser,

    }


    return (
    <AuthContext.Provider value={authInfo}> 
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider; 