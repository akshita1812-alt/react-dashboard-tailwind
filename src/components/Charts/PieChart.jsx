import React from 'react';
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
    const labels = [];
  const data = {
    
    labels: labels,
    datasets: [
      {
        radius:"110",
        cutout:"90",
        label: "Customers",
        backgroundColor: ["#ec4899","#7e22ce","white"],
        borderColor: "#eff6ff",
        data: [35,65,100],
      },
    ],
  };
  return (
    <div >
      <Doughnut data={data} />
    </div>
  )
}

export default PieChart