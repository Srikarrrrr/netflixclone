import { createContext,useContext,useEffect,useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { app, db } from "../firebase";
import {doc, getFirestore, setDoc} from "firebase/firestore";
const AuthContext = createContext()



export function AuthContextProvider({children})  {
const [user,setuser]=useState({})
const auth=getAuth(app)
//const db=getFirestore(app);


        function signUp(email,password){
            console.log("bcdwujwfcme")
             createUserWithEmailAndPassword(auth,email,password);
            setDoc(doc(db,`users`,email),{
                savedshows:[]
            })  

        }

        function logout()
        {
            return signOut(auth)
        }
         
        function signIn(email,password){
            return signInWithEmailAndPassword(auth,email,password);
        }

        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                setuser(currentUser);
            });
            return ()=>{
                unsubscribe();
            };
        });



    return(<AuthContext.Provider value={{ signUp,signIn,logout,user}}>
            {children}
        </AuthContext.Provider>)
}

export function UserAuth() {
    return useContext(AuthContext)
}