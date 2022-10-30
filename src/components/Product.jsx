import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Product = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () =>{
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data);
    }

    const deleteProduct = async (uuid) =>{
        await axios.delete(`http://localhost:8000/products/${uuid}`);
        getProducts();
    }

  return (
    <div>
    <h1 className='title'>Products</h1>
    <h2 className='subtitle'>List Product</h2>
    <Link to="/products/add" className='button is-primary mb-4'>Add Product</Link>
    <table className='table is-striped is-fullwidth'>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Created By</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map((v, index) =>{
                return(
                    <tr key={v.uuid}>
                    <td>{ index + 1}</td>
                    <td>{v.name}</td>
                    <td>{v.price}</td>
                    <td>{v.user.name}</td>
                    <td>
                        <Link to={`/products/edit/${v.uuid}`} className="button is-small is-info">Edit</Link>
                        <button onClick={()=> deleteProduct(v.uuid)} className="button is-small is-danger ml-2">Delete</button>
                    </td>
                </tr>  
                )              
            })}
        </tbody>
    </table>
</div>
)
}

export default Product