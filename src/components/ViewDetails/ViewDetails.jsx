import React from 'react';

const ViewDetails = ({details}) => {
  console.log(details._id);
  return (
    <div className='w-10/12 mx-auto'>
      <h2 className='text-2xl text-center font-bold mt-5'>View Details: {details.length}</h2>
    </div>
  );
};

export default ViewDetails;