import './App.css';
import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {Navbar,  Sidebar} from './components';
import {Customers, Income, Product, Promote, Help, Dashboard} from './pages';
import {useStateContext} from './contexts/ContextProvider';

function App() {
  const {activeMenu} = useStateContext();
  return (
    <div >
    <HashRouter>
     <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
        <TooltipComponent content='Setting' position='Top'>
          <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius: '50%'}}>
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className='w-72 '>
        <Sidebar />
          </div>
      ) :(
        <div><Sidebar /></div>
      )}
      <div className={
        `dark:bg-main-bg b-main-bg min-h-screen w-full ${activeMenu ? 'md:ml:72' : 'flex-2'}`}>
        <div className='flex fixed md-stactic bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <Navbar />
        <p className='mt-5 text-xl'>Hi, Sharukh</p>
        </div>
      <div>
        <Routes>
        {/* {themeSettings && (<ThemeSettings />)} */}
          <Route path='/react-dashboard-tailwind' element={<Dashboard />} />
          <Route path='/react-dashboard-tailwind/dashboard' element={<Dashboard />} /> 
          <Route path='/react-dashboard-tailwind/customers' element={<Customers />} />
          <Route path='/react-dashboard-tailwind/products' element={<Product />} />
          <Route path='/react-dashboard-tailwind/income' element={<Income />} />
          <Route path='/react-dashboard-tailwind/promote' element={<Promote />} />
          <Route path='/react-dashboard-tailwind/help' element={<Help />} />
        </Routes>
      </div>
      </div>
     </div>
     </HashRouter>
    </div>
  );
}

export default App;
