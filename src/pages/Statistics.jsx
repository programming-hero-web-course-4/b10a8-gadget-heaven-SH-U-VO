import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statistics = () => {
  const data = useLoaderData();

  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-[#9538E2]">
        <div className="hero-content text-center">
          <div className="text-white">
            <h1 className="text-3xl font-bold">Product Ratings</h1>
            <p className="py-4">
              Visualize the ratings of our amazing gadgets! See what our customers love.
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="p-12 flex justify-center">
        <BarChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#8884d8" tick={{ angle: -45, textAnchor: 'end', fontSize: 12 }} height={80} />
          <YAxis domain={[0, 5]} label={{ value: 'Rating', angle: -90, position: 'insideLeft', fill: '#8884d8' }} />
          <Tooltip />
          <Bar dataKey="rating" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;