import React from 'react';
import bannerPic from '../../assets/images/P3OLGJ1 copy 1.png';

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerPic} className="max-w-sm" />
          <div>
            <h1 className="text-7xl font-bold">
              One Step <br /> 
              Closer To Your <br /> 
              <span className='text-primary'>Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the <br />
              information you need. Its your future. Come find it. Manage all <br /> 
              your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;