import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [role, setRole] = useState('user')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate();

    const addUsers = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/users', {
                name,
                email,
                password,
                confirmpassword,
                role
            });
        navigate("/users");
        } catch (error) {
            setMsg(error.response.data.msg);
        }
    }
        


  return (
    <div>
        <form onSubmit={addUsers} className='box'>
        <p className="has-text-centered">{msg}</p>
            <h1 className='title is-2' style={{color:"black"}}>Add User</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className='input' placeholder='Name'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}   className='input' placeholder='Email'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className='input' placeholder='********'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                    <input type="password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)}  className='input' placeholder='********'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Role</label>
                <div className="control">
                    <div className="select is-fullwidth">
                        <select value={role} onChange={(e) => setRole(e.target.value)} >
                            <option value="admin">Admin</option>
                            <option selected value="user">User</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button type='submit' className="button is-success">Save</button>
                </div>
            </div>
        </form>        
    </div>
  )
}

export default FormUser;