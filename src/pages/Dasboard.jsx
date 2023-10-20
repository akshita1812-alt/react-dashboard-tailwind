import React from 'react'
import Stacked from '../components/Charts/Stacked'
import { earningData } from '../data/dummy'
import  PieChart  from '../components/Charts/PieChart';
import {Header} from '../components';
const Dasboard = () => {
  return (
           
<>
    <div className='mt-20 bg-gray-100 flex flex-wrap justify-center lg:flex-nonwrap'>
    <div className=' flex m-4 flex-wrap justify-center gap-11 items-center'>
      {earningData.map((item) => (
      <div key={item.title} className='flex bg-white dark:text-gray-200 md:w-63 p-4 pt-9 rounded-xl'>
        <button type='button' style={{color:item.iconColor, backgroundColor:item.iconBg}} 
        className='text-2xl opacity-0.9 rounded-full p-9 hover:drop-shadow-xl' >
          {item.icon}
        </button>
        <div><p className='text-sm text-gray-400 mt-1 ml-4' >{item.title}</p>
      <span className='text-4xl ml-4'>{item.amount}</span>
      <div className='text-xs'> <span className={`text-xs text-${item.pcColor} ml-4`}>{item.percentage}</span> this month</div>
      </div>
      </div>
      ))}
    </div>
    <div className='grid grid-flow-row sm:grid-flow-col m-4 gap-3     '>
   <div className='flex gap-11 flex-wrap justify-center col-span-1 '>
    <div className='bg-white dark:text-gray-200 p-2 dark:bg-secondary-dark-bg m-3 rounded-xl w-780'>
        <div className='flex justify-between'>
          <div>
          <p className='font-semifold text-xl'>Overview</p>
          <span className='text-sm text-gray-400'>Monthly Earning</span></div>
          <div className='flex items-center gap-4 '>
            
          <div className="relative w-full lg:max-w-sm">
            <select className="w-24 p-1 text-gray-500 bg-blue-50 rounded-md shadow-sm outline-none appearance-none ">
                <option>Quaterly  </option>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Yearly</option>
            </select>
        </div>
          </div>
        </div>
     
          <Stacked  />
        
    </div>

   </div>
   <div className='flex gap-11 flex-wrap justify-center'>
   <div className='bg-white dark:text-gray-200 p-2 dark:bg-secondary-dark-bg m-3 rounded-xl md:w-480'>
        <div className=' justify-between'>
        <div>
          <p className='font-semifold text-xl'>Customers</p>
          <span className='text-sm text-gray-400'>Customers that buy product</span></div>
       
        </div>
        <PieChart width="590px" height="360px" />
        </div>
        </div>
   </div>
   <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl w-[1200px] '>
   <Header title="Product Sell" />
<div className="relative overflow-x-auto sm:w-[900px]">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="pl-48 pr-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-48 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-48 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="px-48 py-6">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

   </div>
    </div>
</>
  )
}

export default Dasboard
