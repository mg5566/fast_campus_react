import React from 'react';

const EditProduct = ({ params, searchParams }) => {
  const { id } = params;
  const { name } = searchParams;
  return (<div>EditProduct { id } { name }</div>);
};

export default EditProduct;
