import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeature from '../SingleFeature/SingleFeature';

const FeaturesJob = () => {
  const featuresJob = useLoaderData();
  // console.log(featuresJob);

  const [showAll, setShowAll] = useState(false);

  const handleSeeMore = () => {
    setShowAll(true)
  }

  return (
    <div className='w-10/12 mx-auto mt-20'>
      <h2 className='text-5xl text-[#1d1c1c] text-center font-bold'>Featured Jobs</h2>
      <p className='text-[#757575] text-center mt-4'>
        Explore thousands of job opportunities with all the information you need. Its your future
      </p>
      <div className='grid md:grid-cols-2 gap-4 mt-5'>
       {
          featuresJob.slice(0, showAll ? 6 : 4).map(feature => <SingleFeature
            key={feature._id}
            feature={feature}
          ></SingleFeature>)
        }
      </div>
      <div className="text-center">
        {
          !showAll && (
            <button onClick={handleSeeMore} className="btn btn-primary font-bold capitalize mt-8">See All Jobs</button>
          )
        }
      </div>
    </div>
  );
};

export default FeaturesJob; 