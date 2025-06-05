import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const Bars = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "10px",
        width: "430px",
        height: "300px",
        backgroundColor: "white",
      }}
    >
      <BarChart width={430} height={300} data={data} layout="vertical">
        <XAxis type="number" hide={true} />
        <YAxis
          dataKey="name"
          type="category"
          axisLine={false}
          width={110}
          tickLine={false}
        />
        <Bar
          dataKey="value"
          fill="#8884d8"
          barSize={20}
          radius={[0, 50, 50, 0]}
        />
      </BarChart>
    </div>
  );
};

export default Bars;
