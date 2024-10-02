// rafce react arrow function export componenet
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUsers = () => {

    let[values, setValues] = useState({username:"", email:""})
    let navigate = useNavigate();

    let change = (e) =>{
        setValues({...values,[e.target.name] : e.target.value});
    }

    let {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:3000/users/" +id)
        .then(res => setValues(res.data))
    },[])

    function update(e){
        e.preventDefault()
        axios.put("http://localhost:3000/users/" +id, values)
        .then(res=> navigate("/"))
    }
  return (
    <div id='update-div'>
        <h1>Update Your Profile</h1>
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
            <button id='update-btn' onClick={update}>UpdateUser</button>
            
        </form>
    </div>
  )
}

export default UpdateUsers;