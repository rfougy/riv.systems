import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const GenderChart = () => {
  const data = [
    { name: "Kobiety", value: 60 },
    { name: "Mężczyźni", value: 40 },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      />
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
};

export default GenderChart;
