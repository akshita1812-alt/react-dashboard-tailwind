import React from 'react'
import {Link } from 'react-router-dom'
import {SiHexo} from 'react-icons/si';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {MdOutlineCancel, MdKeyboardArrowDown} from 'react-icons/md';
import {links} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize} =  useStateContext();

  const handleCloseBar = () =>{
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false);
    }
  }
  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-indigo-800 scroll-auto'>
     { activeMenu && (<>
      <div className='flex justify-between items-center'>
        <Link to='/' onClick={handleCloseBar} className='items-center gap-3 mt-4 mx-2 flex text-xl font-extrabold racking-tight'>
        <SiHexo color="white" size={27} /> <span className='text-white'>Dashboard</span>
        </Link>
      <TooltipComponent content='menu' position='BottomCenter'>
        <button type='button' onClick={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className=' text-xl rounded-full p-3 hover:bg-indigo-400 mt-4 block '>
          <MdOutlineCancel color='white'/></button>
      </TooltipComponent>
      </div>
      <div className='mt-10 '>
        {links.map((item) => (
          <div key={item.title} className='flex dark:hover:text-black hover:bg-indigo-400 hover:m-2 hover:rounded-full'>
          <span className=' m-3 mt-4'> {item.icon}</span>
          <p className='text-slate-200 m-3 mt-4 '>{item.title}</p>
          </div>
       ) )}
      </div>
      </>)}
      <TooltipComponent content="Profile" position="Bottom">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg mt-[330px]"
            onClick={() => ('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src='/public/logo512.png'
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
    </div>
  )
}

export default Sidebar