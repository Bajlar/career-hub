import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeature from '../SingleFeature/SingleFeature';

const FeaturesJob = () => {
  const featuresJob = useLoaderData();
  // console.log(featuresJob);
  return (
    <div className='mt-20'>
      <h2 className='text-5xl text-[#1A1919] font-bold'>Featured Jobs</h2>
      <p className='text-[#757575] mt-4'>
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          featuresJob.map(feature => <SingleFeature
            key={feature._id}
            feature={feature}
          ></SingleFeature>)
        }
      </div>
      <button className="btn btn-primary mt-8">See All Jobs</button>
    </div>
  );
};

export default FeaturesJob;