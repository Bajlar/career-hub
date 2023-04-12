import React from 'react';
import bannerPic from '../../assets/images/P3OLGJ1 copy 1.png';

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto grid md:grid-cols-2">
      <div>
        <h1 className="text-5xl font-bold leading-tight md:mt-28 my-3">
          One Step<br></br> Closer To Your <br></br>
          <span className="text-primary">Dream Job</span>
        </h1>
        <p className="my-3">
          Explore thousands of job opportunities with all the<br></br>{" "}
          information you need. Its your future. Come find it. Manage all
          <br></br> your job application from start to finish.
        </p>
        <button className="btn btn-primary font-bold capitalize">Get Started</button>
      </div>
      <div>
        <img className="w-full" src={bannerPic} alt=""/>
      </div>
    </div>
  );
};

export default Banner;