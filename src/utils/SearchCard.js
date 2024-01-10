import React from 'react'
import { Link } from 'react-router-dom'
import { DateDeconstructor } from './DateDeconstructor'

const SearchCardComponent = ({title,byline,abstract,url,source,pub_date, lead_para, imgUrl}) => {
  const dateTime= DateDeconstructor({dateString: pub_date});
 
  return (
  
    <Link to={url} as='div' target='_blank' className='block flex w-full space-x-2 p-5 border border-white bg-app-black rounded-lg cursor-pointer'>
      <div className='w-1/4 p-3'>
        <img src={imgUrl} alt='Article' style={{ height: '200px', width: '255px' }} ></img>

      </div>
      <div className='w-3/4 space-y-1'>
        <div className='text-2xl text-purple-300 font-semibold '>{title}</div>
        <div className='text-gray-500 text-lg font-semibold'> {abstract}</div>
        <div className='flex items-center justify-between mt-2'>
        <div className='text-sm text-gray-200'>{byline}</div>
        <div className='text-sm text-gray-200'>{source}</div>
        </div>
        <div className='text-sm text-gray-200'>{dateTime}</div>
        <p className='text-lg font-semibold mt-5 text-white'> {lead_para}</p>
       
      </div>
        
  </Link>
  
      
   
  )
}

export default SearchCardComponent
