import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';

const JobCategoryList = () => {
  const [singleJob, setSingleJob] = useState([]);

  useEffect(() => {
    fetch('jobCategory.json')
    .then(res => res.json())
    .then(data => setSingleJob(data))
  }, [])

  return (
    <div className='w-10/12 mx-auto'>
      <h2 className='text-5xl text-[#1A1919] text-center font-bold'>Job Category List</h2>
      <p className='text-[#757575] text-center mt-4'>
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className="job-container mt-8 grid md:grid-cols-4 gap-4">
        {
          singleJob.map(job => <SingleJob
            key={job._id}
            job={job}
          ></SingleJob>)
        }
      </div>
    </div>
  );
};

export default JobCategoryList;