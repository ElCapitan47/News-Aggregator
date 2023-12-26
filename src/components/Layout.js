import React from 'react'
import IconText from '../utils/IconText'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

const LayoutComponent = ({children, curWindow}) => {

  return (
    <div className='w-full h-full flex bg-gray-300'>
        {/* Left Panel */}
      <div className='w-1/6 h-full bg-black p-3 pt-8 text-white'>
        <div className='flex items-center space-x-2 mb-5'>
            <div className=''><Icon icon="arcticons:cbc-news" color="purple" fontSize={70} /></div>
            <div className='text-3xl font-semibold'> NewsHub </div>
        </div>
        <div className='flex flex-col justify-between space-y-36'>
          <div className='mt-20 pl-2 space-y-4 text-lg'>
              <IconText iconname={'material-symbols:web-stories-sharp'} disptext={'Top Stories'} targetLink={'/'} active={curWindow==='home'}/>
              <IconText iconname={'ic:round-search'} disptext={'Search'} targetLink={'/search'} active={curWindow==='search'}/>
              <IconText iconname={'mingcute:government-fill'} disptext={'Politics'} targetLink={'/politics'} active={curWindow==='politics'}/>
              <IconText iconname={'ic:sharp-business'} disptext={'Business'} targetLink={'/business'} active={curWindow==='business'}/>
              <IconText iconname={'ph:circuitry'} disptext={'Technology'} targetLink={'/tech'} active={curWindow==='technology'}/>
              <IconText iconname={'fluent:movies-and-tv-24-filled'} disptext={'Movies'} targetLink={'/movies'} active={curWindow==='movies'}/>
          </div>
          <div className=' flex items-center justify-center text-sm'>Data provided by The New York Times</div>
        </div>
        
        

      </div>
         {/* Right Panel */}
      <div className=' w-5/6 h-full overflow-auto'>
        {/* Navbar */}
        <div className=' w-full bg-app-black h-1/10 flex items-center justify-end p-8 text-lg space-x-4 text-white'> 
            <IconText disptext={'Follow Us On'} activeHover={true}/>
            <IconText disptext={'Download App'}/>
            <Link to={'/form'} className='block'>
             <IconText disptext={'Subscribe'} targetLink={'/form'}/>
            </Link>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>YS</Avatar>
        </div>
        {/* Content */}
        <div className=' w-full h-9/10 p-8 '>
            {children}
        </div>

      </div>
    </div>
  )
}

export default LayoutComponent
