import React,{useState} from 'react'
import Style from './AddUser.module.css'
import { addUser } from '../service/Api'




export default function AddUser(){

    const defaultValue={
        name : '',
        username: '',
        email: '',
        phone: ''
    }


    const [user , setUser] = useState(defaultValue)

    function onValueChange(e){
        console.log(e.target.name, e.target.value)
        setUser({...user , [e.target.name]: e.target.value}) // key in square bracket
        console.log(user)

    }

    const  adduserDetails = async () => {
       await addUser(user)
         
    }

   



    return(
        <div className={Style.main}>
            <label>Name</label>
            <input  onChange={(e)=>onValueChange(e)} name='name'/>

            <label>UserName</label>
            <input onChange={(e)=>onValueChange(e)} name='username'/>

            <label>Email</label>
            <input  onChange={(e)=>onValueChange(e)} name='email'/>

            <label>Phone</label>
            <input  onChange={(e)=>onValueChange(e)} name='phone'/>

            <button onClick={() => adduserDetails()}>Submit</button>
           

        </div>
    )
}