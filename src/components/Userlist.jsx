import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Userlist = () => {
    const [user, setUser] = useState([]);

    useEffect(() =>{
        userLists();
    }, [])

    const userLists = async () =>{
        const {data} = await axios.get("http://localhost:8000/users");
        setUser(data);
    }

    const deleteUsers = async (uuid) => {
        await axios.delete(`http://localhost:8000/users/${uuid}`);
        userLists()
    }

  return (
    <div>
        <h1 className='title'>Users</h1>
        <h2 className='subtitle'>List users</h2>
        <Link to="/users/add" className='button is-primary mb-4'>Add Users</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {user.map((v, index) =>{
                    return(
                        <tr key={v.uuid}>
                        <td>{index  + 1}</td>
                        <td>{v.name}</td>
                        <td>{v.email}</td>
                        <td>{v.role}</td>
                        <td>
                        <Link to={`/users/edit/${v.uuid}`} className="button is-small is-info">Edit</Link>
                        <button onClick={()=> deleteUsers(v.uuid)} className="button is-small is-danger ml-2">Delete</button>
                    </td>
                    </tr>
                    )     
                })}
            </tbody>
        </table>
    </div>
  )
}
