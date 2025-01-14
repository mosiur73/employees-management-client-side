import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

 export const AuthContext =createContext(null)
 const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}


  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
        setLoading(false);
    });
    return () => {
        return unsubscribe();
    }
}, [])

    const authInfo={
        user,
        setUser,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signOutUser,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;