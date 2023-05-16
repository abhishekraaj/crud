import React,{useState} from 'react'
import Style from './NavBar.module.css'
import { useNavigate } from 'react-router-dom';
import {auth} from '../Firebase'
import { signOut } from 'firebase/auth';
import AddUser from '../Add/AddUser';







function NavBar(){

  const [user , setUser] = useState(false)


  function handleAddUser(){
    if(user == false){
      setUser(true)
    }else{
      setUser(false)
    }
  }

    const nav = useNavigate()

    function handleSignOut() {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            nav("/");
            console.log("Signed out successfully");
          })
          .catch(error => {
            // An error happened.
          });
      }

    return(
      <>
        <div className={Style.main}>
            <img src="https://share.ftimg.com/aff/flamingtext/2019/03/28/flamingtext__26068056772646949.png" height="50vh"/>
            <button onClick={handleAddUser}>Add User</button>
            <button onClick={handleSignOut}>SignOut</button>


        </div>
        {user ? 
      <div className={Style.user}><AddUser/></div> : ""

        }

        </>

    )
}
export default NavBar