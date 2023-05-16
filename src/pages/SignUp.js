import React, { useState } from "react"
import {Link} from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase'

export default function SignUp() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleName(e){
        setName(e.target.vale)
    }
    function handleLastName(e){
        setLastName(e.target.vale)
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePasswword(e){
        setPassword(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // navigate("/login")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });
      };


    return (
        <div>

            <input placeholder="Name" type="text" onChange={handleName} value={name}/>
            <input placeholder="LastName" type="text" onChange={handleLastName} value={lastName}/>
            <input placeholder="Email" type="email" onChange={handleEmail} value={email}/>
            <input placeholder="Password" type="Password" onChange={handlePasswword} value={password}/>
            <button onClick={handleSubmit}>Submit</button>
            <Link to="/">LogIn </Link>
            


        </div>
    )
}