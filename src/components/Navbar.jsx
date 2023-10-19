import React, {useEffect} from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';
import {AiOutlineMenu} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';

const NavButton = ({title, color, icon, dotColor, customFunc}) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customFunc} style={{color}}
     className='relative text-xlrounded-full p-3 hover:bi-light-gray'>
      <span className='absolute inline-flex rounded-full 2 h-2 w-2 right-2 top-2' />{icon}
     </button>
  </TooltipComponent>

)
const Navbar = () => {
  const {activeMenu,setActiveMenu, screenSize, setScreenSize} = useStateContext();

  useEffect( () => {
    const handleSize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize',handleSize);
    handleSize();
    return()=> window.removeEventListener('resize',handleSize);
  }, [])

  useEffect(() =>{
    if(screenSize <= 900){
      setActiveMenu(false)
    } else{
      setActiveMenu(true)
    }
  },[screenSize]);

  return (
    <>
    
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='menu' customFunc={()=> setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
      color='blue' icon={<AiOutlineMenu size={30} />} />
      <div className='flex float-right'>
        <NavButton  title='menu'  icon={<FiSearch size={30} />} />
      <input type="search" placeholder="Search" class="border-b-2 w-full border-gray-200 py-3 px-7" 
      />
        
   </div>
      </div>

    </>
  )
}

export default Navbar