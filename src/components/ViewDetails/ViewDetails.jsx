import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CalendarDaysIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

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
    <div className='w-10/12 mx-auto mt-8'>
      <div className="grid md:flex gap-8 mt-5">
        <div className="w-3/5 job-details">
          <p className='mb-4'><strong>Job Description:</strong> {detail.description}</p>
          <p className='mb-4'><strong>Job Responsibility:</strong> {detail.responsibility}</p>
          <p className='mb-4'><strong>Educational Requirements:</strong> {detail.educational_requirements}</p>
          <p className='mb-4'><strong>Experiences:</strong> {detail.experiences}</p>
        </div>

        <div className="contact-info card w-96 bg-base-100 border-2">
          <div className="card-body">
            <h3 className='text-2xl font-bold'>Job Details</h3>
            <hr />
            <p className='mb-2 flex gap-2'> 
              <span><CurrencyDollarIcon className="h-6 w-6" /></span> 
              <strong>Salary:</strong> {detail.salary}
            </p>

            <p className='mb-2 flex gap-2'>
              <span><CalendarDaysIcon className="h-6 w-6" /></span> 
              <strong>Job Title:</strong> {detail.job_title}
            </p>

            <h3 className='text-2xl'>Contact Information</h3>
            <hr />
            <p className='mb-2 flex gap-2'>
              <span><PhoneIcon className="h-6 w-6" /></span> 
              <strong>Phone:</strong> {detail.phone}
            </p>

            <p className='mb-2 flex gap-2'>
              <span><EnvelopeIcon className="h-6 w-6" /></span>
              <strong>Email:</strong> {detail.email}
            </p>

            <p className='mb-2 flex gap-2'>
              <span><MapPinIcon className="h-6 w-6" /></span>
              <strong>Address:</strong> {detail.address}
            </p>
            <button className="btn btn-primary mt-5">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;