import React from 'react'
import ProductList from './component/ProductList'
import ProductDetails from './component/ProductDetails'
import AddProduct from './component/AddProduct'

const App = () => {
  return (
    <div className='flex m-2'>
      <ProductList />
      <ProductDetails id={1} />
      <AddProduct />
    </div>
  )
}

export default App