import React from 'react';

const SingleJob = ({job}) => {
  // console.log(job.logo);
  const {logo, job_name, site_Available} = job;
  return (
    <div className="bg-base-200 shadow-md">
      <figure><img className='p-6' src={logo} alt="" /></figure>
      <div className="card-body">
        <h3 className='text-2xl font-bold'>{job_name}</h3>
        <p className='text-[#A3A3A3] mt-2'>{site_Available}</p>
      </div>
    </div>
  );
};

export default SingleJob;