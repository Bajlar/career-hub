import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturesJob from '../FeaturesJob/FeaturesJob';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategoryList></JobCategoryList>
      <FeaturesJob></FeaturesJob>
    </div>
  );
};

export default Home;