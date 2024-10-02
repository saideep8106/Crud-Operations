// rafce react arrow function export componenet

import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUsers = () => {

    let[values, setValues] = useState({username:"", email:""})
    let navigate = useNavigate();

    let change = (e) =>{
        setValues({...values,[e.target.name] : e.target.value});
    }

    function adduser(e){
        e.preventDefault();
        axios.post("http://localhost:3000/users", values)
            .then(()=>{
                navigate("/")
            })
    }

  return (
    <div id='add-div'>
        <h1>Add users Details</h1>
        <form action="">
            <input type="text" placeholder='name' 
                    name="name"
                    value={values.name}
                    onChange={change} />
            <br /><br />

            <input type="text" placeholder='Enter your Username'
                    name="username"
                    value={values.username} 
                    onChange={change}
                    />
            <br /> <br />

            <input type="email" placeholder='Email address'
                    name='email'
                    value={values.email}
                    onChange={change}
                    />
            <br /> <br />
            <button id='adduser-btn' onClick={adduser}>AddUser</button>
        </form>
    </div>
  )
}

export default AddUsers