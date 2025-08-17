import React from 'react';
import { useParams } from 'react-router';
import { blogs } from '../damyData';
import Image from '../components/Image';

const Blog = () => {
  const { id } = useParams();
  const obj = blogs[parseInt(id)]; 

  if (!obj) {
    return <h1 className="text-center text-2xl font-semibold text-red-500 mt-10">
      Blog not found
    </h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Image
        src={obj.image}
        alt={obj.title}
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{obj.title}</h1>
      <h2 className="text-lg text-gray-600 italic mb-4">{obj.excerpt}</h2>
      <p className="text-gray-700 leading-relaxed">{obj.description}</p>
    </div>
  );
};

export default Blog;
