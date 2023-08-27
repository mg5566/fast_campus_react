import React from 'react';

const OrderDetails = ({ params, searchParams }) => {
  const { hello } = searchParams;
  const { id } = params;
  return (
    <div>
      OrderDetails {id} {hello}
    </div>
  );
};

export default OrderDetails;
