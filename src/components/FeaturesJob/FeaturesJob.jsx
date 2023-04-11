import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeature from '../SingleFeature/SingleFeature';

const FeaturesJob = () => {
  const featuresJob = useLoaderData();
  // console.log(featuresJob);

  const [details, setDetails] = featuresJob;

  const handleDetails = (featuresJob) => {
    // console.log(featuresJob);
    const newDetails = [...details, featuresJob];
    setDetails(newDetails);
  }

  return (
    <div className='w-10/12 mx-auto mt-20'>
      <h2 className='text-5xl text-[#1A1919] text-center font-bold'>Featured Jobs</h2>
      <p className='text-[#757575] text-center mt-4'>
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className='grid md:grid-cols-2 gap-5 mt-5'>
        {
          featuresJob.map(feature => <SingleFeature
            key={feature._id}
            feature={feature}
            handleDetails={handleDetails}
          ></SingleFeature>)
        }
      </div>
      <button className="btn btn-primary mt-8">See All Jobs</button>
    </div>
  );
};

export default FeaturesJob;