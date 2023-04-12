import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
  const details = useLoaderData();
  const {id} = useParams();
  // console.log(details, id);

  let detail = {};
  if(details) {
    detail = details.find(dl => dl.id === id)
  }
  // console.log(detail);
 
  return (
    <div className='w-10/12 mx-auto'>
      <div className="flex gap-8 mt-5">
        <div className="w-3/5 job-details">
          <p className='mb-4'><strong>Job Description:</strong> {detail.description}</p>
          <p className='mb-4'><strong>Job Responsibility:</strong> {detail.responsibility}</p>
          <p className='mb-4'><strong>Educational Requirements:</strong> {detail.educational_requirements}</p>
          <p className='mb-4'><strong>Experiences:</strong> {detail.experiences}</p>
        </div>

        <div className="contact-info card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className='text-2xl text-center'>Job Details</h3>
            <hr />
            <p className='mb-2'><strong>Salary:</strong> {detail.salary}</p>
            <p className='mb-2'><strong>Job Title:</strong> {detail.job_title}</p>
            <h3 className='text-2xl text-center'>Contact Information</h3>
            <hr />
            <p className='mb-2'><strong>Phone:</strong> {detail.phone}</p>
            <p className='mb-2'><strong>Email:</strong> {detail.email}</p>
            <p className='mb-2'><strong>Address:</strong> {detail.address}</p>
            <button className="btn btn-primary mt-5">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;