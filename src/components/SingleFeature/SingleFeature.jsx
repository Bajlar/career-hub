import React from 'react';
import { Link } from 'react-router-dom';

const SingleFeature = ({feature}) => {
  // console.log(feature);

  const {image, job_name, job_title, location, location_logo, salary, salary_logo, id} = feature;
  return (
    <div className="card w-full h-96 border-solid border-2 py-5 mt-8">
      <figure className="">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{job_name}</h2>
        <p>{job_title}</p>
        <div className='flex gap-3'>
          <button className="btn btn-outline btn-primary font-bold capitalize">Remote</button>
          <button className="btn btn-outline btn-primary font-bold capitalize">Full Time</button>
        </div>
        <div className="flex gap-6">
          <div className="flex">
            <img src={location_logo} alt="" />
            <p>{location}</p>
          </div>
          <div className="flex">
            <img src={salary_logo} alt="" />
            <p>Salary: {salary}</p>
          </div>
        </div>
        <div className="card-actions mt-5">
          <Link to={`/job/${id}`}><button className="btn btn-primary font-bold capitalize">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;