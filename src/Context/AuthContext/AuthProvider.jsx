import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState (true);
    const [user,setUser] = useState(null)
       
      // Register
        const createUser = (email,password) =>
        {
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

        //

      useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, currentUser =>
            {
              setUser(currentUser);
              setLoading(false);
              console.log('user in the auth state change', currentUser)

            })
            return ( ) =>
            {
              unSubscribe();
            }
      },[])




    const authInfo = {
        loading,
        user,
        createUser,
        SignInUser,
        signOut,
    }


    return (
  <AuthContext.Provider value={authInfo}> 
    {children}
  </AuthContext.Provider>
    );
};

export default AuthProvider;