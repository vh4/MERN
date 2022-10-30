import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormProductAdd = () => {
const navigate = useNavigate()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [msg, setMsg] = useState('')

  const AddProducts = async (e) =>{
    e.preventDefault()
    try {
        await axios.post('http://localhost:8000/products', {
            name,
            price,
        })
    navigate("/products");
    
    } catch (error) {
        if(error.response){
            setMsg(error.response.data.msg);
        }
    }
  }

  return (
    <div>
        <form onSubmit={AddProducts} className='box'>
            <p className="has-text-centered">{msg}</p>
            <h1 className='title is-2' style={{color:"black"}}>Add Product</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text"  className='input' placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input type="number"  className='input' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
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

export default FormProductAdd