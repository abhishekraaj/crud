import React,{useState} from "react"
import {Link} from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase'
import { useNavigate } from "react-router-dom";


export default function LogIn(){

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const nav = useNavigate()


    function handleEmail(e){
     setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
       }

       const handleSubmit = async () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            nav("/home")
            
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };

    return(
        <div>
           
            <input placeholder="Email"  value={email} onChange={handleEmail}/>
            <input placeholder="Password"  value={password} onChange={handlePassword}/>
            <button onClick={handleSubmit}>Submit</button>
            <Link to="/signUp">SignUp </Link>
        </div>
    )
}