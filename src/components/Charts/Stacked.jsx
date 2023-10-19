import React from 'react';
import Chart from "chart.js/auto";
import {Bar} from "react-chartjs-2";

const Stacked = () => {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = {
    labels: labels,
    datasets: [
      {
        borderRadius:"7",
        hoverBackgroundColor:"#7c3aed",
        label: "Quaterly",
        backgroundColor: ["#f3e8ff"],
        // borderColor: "rgb(255, 99, 132)",
        data: [2, 10, 5, 2, 20, 30, 45,30, 25, 17, 47, 34],
      },
    ],
  };


  return (
    <div>
      <Bar data={data}
      
  options={{
    scales:{
        x:{
            grid: {
                display: false
            }
        },
        y:{
            grid: {
                display: false
            }
        }
    }
   } } />
    </div>
  )
}



export default Stacked