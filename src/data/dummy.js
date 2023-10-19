import {BsPersonSquare, BsBoxSeam} from 'react-icons/bs';
import {TbSquareKey} from 'react-icons/tb';
import {BiCube} from 'react-icons/bi';
import {BiHelpCircle} from 'react-icons/bi';
import {FiDivideCircle, FiBarChart} from 'react-icons/fi';
import {HiCircleStack} from 'react-icons/hi2';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import {HiOutlineRefresh} from 'react-icons/hi'

export const links = [
    {
      icon: <TbSquareKey size={30} color="white" />,
      title: 'Dashboard',
    },
  
    {
      icon: <BiCube size={30} color="white"/>,
      title: 'Product',
    },
    {
      icon: < BsPersonSquare size={30} color="white"/>,
      title: 'Customers',
    },
    {
      icon:<HiCircleStack size={30} color="white" />,
      title: 'Income',
    },
    {
      icon:<FiDivideCircle size={30} color="white" />,
      title:'Prmote',
    },
    {
      icon: <BiHelpCircle size={30} color="white" />,
      title:'Help',
    },
]
export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount  size={32}/>,
    amount: '$198k',
    percentage: '+37.8%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsBoxSeam  size={32}/>,
    amount: '$2.4k',
    percentage: '2%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <FiBarChart size={32} />,
    amount: '$2.4k',
    percentage: '2%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'red-600',
  },
  {
    icon: <HiOutlineRefresh size={32} />,
    amount: '$89k',
    percentage: '11%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'green-600',
  },
]
export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];
export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];
export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};