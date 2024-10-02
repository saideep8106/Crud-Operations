import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import "../style.css"

const GetUsers = () =>{

    let[state, setState] = useState([])

    let[thead, setThead] = useState([])

    let navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=> {
            setState(res.data)

            setThead(Object.keys(res.data[0]).slice(0,4))})
        .catch(err =>console.log(err));
    },[state])

    function deletes(id){
        // axios.delete("http://localhost:3000/users"+id);
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(()=>{
            navigate("/")
        })
    } 

    console.log(state);

    console.log(thead);
    return(

        <div>
            <table border={2}>
                <caption>
                    <strong>CRUD operations  </strong>
                    <button id='add-btn' onClick={()=> navigate("./add")}>Add+</button>
                </caption>
                <thead>
                    <tr >
                        {thead.map((x, index)=> <th key={index}>{x}</th>)}
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                        {state.map(res =>{
                            return(
                                <tr key={res.id}>
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.username}</td>
                                    <td>{res.email}</td>
                                    {/* <td>{res.address.street}</td> */}
                                    <td>
                                        <Link to={`/update/${res.id}`}>   {/*based on unique id the update takes place */}
                                            <button id='upt-btn'>UPDATE</button>
                                        </Link>
                                        
                                        <button id='dlt-btn' onClick={()=> deletes(res.id)}>DELETE</button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>

            </table>
        </div> 
    )
}
export default GetUsers;

