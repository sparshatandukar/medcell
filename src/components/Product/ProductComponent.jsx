import React, { useState } from 'react'

const ProductComponent = () => {
    const [product, setProduct]=useState("");
  return (
    <>
    <div className=' bg-blue-900 p-2 text-2xl text-white text-center'>Add Product </div>
    <form className='flex justify-center my-4'>
    <div>
        <label className='text-blue-900 me-4 text-lg' For="name"> Product Name:  </label>
            <input onChange={(e)=>setProduct(e.target.value)} className='border-2 border-blue-800 rounded-lg p-2 ml-7' id="name" type="text" name='productName' placeholder='Enter product name' />
            <br /> <br />
        <label className='text-blue-900 me-4 text-lg' For="name"> Product Price:  </label>
            <input onChange={(e)=>setProduct(e.target.value)} className='border-2 border-blue-800 rounded-lg p-2 ml-8' id="price" type="number" name='productPrice' placeholder='Enter product price'  />
        <br /> <br />
        <label className='text-blue-900 me-4 text-lg' For="name"> Product Category:  </label>
        <select onChange={(e)=>setProduct(e.target.value)} className='border-2 border-blue-800 rounded-lg p-2 ml-8' id="category"  name='productCategory' >
        <option value="" disabled>Select category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="books">Books</option>
                        <option value="furniture">Furniture</option>
                    </select>
        <br /> <br />
        </div>
    </form>
    </>
  )
}

export default ProductComponent