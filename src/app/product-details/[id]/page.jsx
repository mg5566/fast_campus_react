import React from 'react'

const ProductDetails = ({ params, searchParams }) => {
    const {id} = params;
    const { name} = searchParams;
  return (
    <div>ProductDetails { id} {name}</div>
  )
}

export default ProductDetails