import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditUser = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [role, setRole] = useState('')

    const [msg, setMsg] = useState('')
    const {id} = useParams();
  
    useEffect(() =>{
      const getUsersById = async () =>{
          try {
              const {data} = await axios.get(`http://localhost:8000/users/${id}`);
              setName(data.name);
              setEmail(data.email);
              setRole(data.role);
          } catch (error) {
              if(error.response){
                  setMsg(error.response.data.msg);
              }
          }
      }
      getUsersById();
    }, [id]);
  
    const EditUsers = async (e) =>{
      e.preventDefault()
      try {
          await axios.put(`http://localhost:8000/users/${id}`, {
              name,
              email,
              password,
              confirmpassword,
              role
          })
      navigate("/users");
      
      } catch (error) {
          if(error.response){
              setMsg(error.response.data.msg);
          }
      }
    }
  return (
    <div>
        <form onSubmit={EditUsers} className='box'>
        <p className="has-text-centered">{msg}</p>
            <h1 className='title is-2' style={{color:"black"}}>Update User</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input' placeholder='Name'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input' placeholder='Email'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='********'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                    <input type="password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} className='input' placeholder='********'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Role</label>
                <div className="control">
                    <div className="select is-fullwidth">
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
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

export default FormEditUser;