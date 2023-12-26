import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const IconText = ({ iconname, disptext, targetLink, active, activeHover }) => {
  const [showHover, setShowHover] = useState(false);
  const [displayDropdown, setDisplayDropdown]= useState(false);

  useEffect(() => {
    if (activeHover) {
      
      setDisplayDropdown(showHover)
           
    }
  }, [showHover, activeHover]);

  const HoverItems = () => {
    if (activeHover) {
      setShowHover(true);
    }
  };

  const UnhoverItems = () => {
    if (activeHover) {
      setShowHover(false);
    }
  };

  return (
  <div className='flex flex-row'>
    <Link to={targetLink} className="block">
      <div className="flex items-center space-x-2 p-1 cursor-pointer">
        <div>
          <Icon icon={iconname} fontSize={25} />
        </div>
       
        <div  onMouseOver={HoverItems}  onMouseOut={UnhoverItems}>
          { (
            <div
              className={`font-semibold ${active ? 'text-purple-500' : ''}`}
             
            >
              {disptext}
            </div>
          )}
          {displayDropdown && (
            <div className="absolute items-center justify-center bg-app-black text-white p-4 space-y-2">
              <div className='flex items-center justify-start space-x-3'>
                <div><Icon icon="devicon:facebook" /></div>
                <div className='cursor-pointer hover:text-gray-300' > Facebook </div>
              </div>
              <div className='flex items-center justify-start space-x-3'>
                <div><Icon icon="skill-icons:instagram" /></div>
                <div className='cursor-pointer hover:text-gray-300' >Instagram </div>
              </div>
              <div className='flex items-center justify-start space-x-3'>
                <div><Icon icon="skill-icons:linkedin" /></div>
                <div className='cursor-pointer hover:text-gray-300' >LinkedIn </div>
              </div>
            </div>
          )}
        </div>
       
          
         
       
      </div>

    </Link>
    
    

   
  </div>
   
  );
};

export default IconText;
