import React from 'react'
import { Link } from 'react-router-dom';

const CardComponent = ({ title, byline, abstract, img, url}) => {
  return (
   
    <Link to={url} target='_blank' as='div' className='block w-full bg-app-black rounded-lg p-1 flex-1 flex flex-col'>
      <div>
        <img src={img} alt={title} className='w-full h-auto' />
      </div>
      <div className='space-y-3 p-4 flex-1'>
        <h3 className='text-white text-lg font-semibold'>{title}</h3>
        <p className='text-sm text-gray-400'>{abstract}</p>
      </div>
    </Link>
  

   
  );
};


export default CardComponent
