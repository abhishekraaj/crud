import React,{useEffect,useState} from "react"
import NavBar from "../component/NavBar"
import AddDetails from "../Add/AddDetails"
import {auth} from '../Firebase'
import { onAuthStateChanged } from "firebase/auth";
import AddUser from "../Add/AddUser";



export default function Home(){
    const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.email;
        // ...
        console.log("uid", uid);
        setEmail(user.email);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
    return(
        <div>
            <NavBar/>
            {email}
            <AddDetails/>
            
        </div>

    )
}