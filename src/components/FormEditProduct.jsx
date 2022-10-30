import React from 'react'

const FormEditProduct = () => {
  return (
    <div>
        <form className='box'>
            <h1 className='title is-2' style={{color:"black"}}>Update Product</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text"  className='input' placeholder='Product Name'/>
                </div>
            </div>
            <div className="field">
                <label className="label">Price</label>
                <div className="control">
                    <input type="number"  className='input' placeholder='Price'/>
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

export default FormEditProduct