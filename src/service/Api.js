import React from 'react'
import axios from 'axios'


const URL= 'http://localhost:8000/'

export const addUser = async(data) => {                         // data as an Arguments.

    try{
      return await axios.post(`${URL}/add` , data );           //Api call Asynchronous Request. // use await then function was async.

    }catch (error) {
     console.log('Error while calling the user Api' , error)
    }
}