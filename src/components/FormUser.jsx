import React from 'react'

const FormUser = () => {
  return (
    <div>
        <form className='box'>
            <h1 className='title is-2' style={{color:"black"}}>Add User</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text"  className='input' placeholder='Name'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input type="email"  className='input' placeholder='Email'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input type="password"  className='input' placeholder='********'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                    <input type="password"  className='input' placeholder='********'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Role</label>
                <div className="control">
                    <div className="select is-fullwidth">
                        <select >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-success">Save</button>
                </div>
            </div>
        </form>        
    </div>
  )
}

export default FormUser;