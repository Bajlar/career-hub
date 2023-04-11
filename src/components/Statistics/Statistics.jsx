import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  // const marks = useLoaderData();
  // console.log(marks);

  const marksArray = [
    {
      _id: 1,
      assignment: 1,
      mark: 57
    },
    {
      _id: 2,
      assignment: 2,
      mark: 60
    },
    {
      _id: 3,
      assignment: 3,
      mark: 60
    },
    {
      _id: 4,
      assignment: 4,
      mark: 56
    },
    {
      _id: 5,
      assignment: 5,
      mark: 51
    },
    {
      _id: 6,
      assignment: 6,
      mark: 56
    },
    {
      _id: 7,
      assignment: 7,
      mark: 60
    },
    {
      _id: 8,
      assignment: 8,
      mark: 59
    }
  ]
  return (
    <div className='mt-5'>
      <h2 className='text-2xl font-bold mb-5'>Statistics</h2>
      <AreaChart
        width={400}
        height={400}
        data={marksArray}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;