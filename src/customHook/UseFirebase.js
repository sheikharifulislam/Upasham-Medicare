import {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import firebaseinitializeAuthentication from '../firebase/firebaseinitialize';

firebaseinitializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState('');

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');    
    const [passwordError, setPasswordError] = useState('');
    const [alredyAcount, setAlredyAcount] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);       
    }

    const logOut = () => {     
        return signOut(auth)
       
    }


    const createNewUser = (email,password) => {
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
            const newUseer =  userCredential.user;
            console.log(newUseer);
            setPasswordError('');           
            saveUserOtherData();
        })
        .catch((error) => {
          console.log(error.message);
        })    
      }
    
      const loginUseer = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const loginData = result.user;      
          console.log('login data',loginData);
          setPasswordError('');
        })
        .catch((error) => {
          console.log(error.message);
        })
      }

      const saveUserOtherData = () => {
        updateProfile(auth.currentUser, {
          displayName: userName,      
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error.message)
        })
      }
    
    
      const handelForm = (e) => {
        e.preventDefault();
    
        if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(userPassword)) {
            setPasswordError('Password Must be at least 6 charact and must be 1 uppercase charact and 1 lowercase charact and 1 special charact');
          return;
        }
    
        if(alredyAcount) {
          loginUseer(userEmail, userPassword);
        }
        else {
          createNewUser(userEmail,userPassword)
        }
         
       
      }
    


    //observe whether user auth state changed or not 
    useEffect(() => {
       const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);              
            }
            else {
                setUser({});      
            }

            setIsLoading(false);
        })

        return () => unsubscribed;

    }, [])

    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading,
        setUserName,
        setUserEmail,
        setUserPassword,
        setAlredyAcount,
        handelForm,
        passwordError,
        alredyAcount
    }
}

export default UseFirebase;