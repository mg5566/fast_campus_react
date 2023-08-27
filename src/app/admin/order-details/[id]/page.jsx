import React from 'react';

const OrderDetails = ({ params, searchParams }) => {
  const { id } = params
  const { name } = searchParams;

  return <div>OrderDetails { id } { name }</div>;
};

export default OrderDetails;
