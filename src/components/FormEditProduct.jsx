import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditProduct = () => {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [msg, setMsg] = useState('')
  const {id} = useParams();

  useEffect(() =>{
    const getProductsById = async () =>{
        try {
            const {data} = await axios.get(`http://localhost:8000/products/${id}`);
            setName(data.name);
            setPrice(data.price);

        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
    getProductsById();
  }, [id]);

  const EditProducts = async (e) =>{
    e.preventDefault()
    try {
        await axios.put(`http://localhost:8000/products/${id}`, {
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
        <form onSubmit={EditProducts} className='box'>
          <p className="has-text-centered">{msg}</p>
            <h1 className='title is-2' style={{color:"black"}}>Update Product</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  className='input' placeholder='Product Name'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='input' placeholder='Price'/>
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

export default FormEditProduct