import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
} from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import axios from 'axios';

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // --- BASE URL ---
    // URL এর শুরুতে https:// থাকতে হবে এবং শেষে / রাখা যাবে না
    const API_BASE_URL = 'https://next-hire-server-orb4qyqop-alimuntasir2001-gmailcoms-projects.vercel.app';
      
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            // Logout এ baseUrl ব্যবহার করা হয়েছে
            axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true })
                .then(() => {
                    console.log("Logged out and cookie cleared");
                    setUser(null);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Logout error", err);
                    setLoading(false);
                });
        });
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
            if (currentUser?.email) {
                const userData = { email: currentUser.email };
                
                // URL সংশোধন: https:// যোগ করা হয়েছে
                axios.post(`${API_BASE_URL}/jwt`, userData, { withCredentials: true })
                    .then((res) => {
                        console.log("Cookie response from server:", res.data);
                        setLoading(false); 
                    })
                    .catch((error) => {
                        console.log("JWT Error:", error);
                        setLoading(false);
                    });
            } else {
                // ইউজার না থাকলে লগআউট এপিআই কল করা ভালো
                axios.post(`${API_BASE_URL}/logout`, {}, { withCredentials: true })
                    .then(() => setLoading(false))
                    .catch(() => setLoading(false));
            }
        });

        return () => unSubscribe();
    }, []);

    const authInfo = { loading, user, createUser, SignInUser, signInWithGoogle, signOutUser }

    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;