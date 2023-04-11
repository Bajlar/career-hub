import React from 'react';
import error_pic from '../../assets/images/error.jpg';

const Error = () => {
  return (
    <div className='w-10/12 mx-auto mt-5'>
      <h2 className='text-2xl text-center font-bold mb-5'>This is a error page</h2>
      <div className='mt-5 flex justify-center items-center'>
        <img src={error_pic} className="mt-8 rounded-md" />
      </div>
    </div>
  );
};

export default Error;