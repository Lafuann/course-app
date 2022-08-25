import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "../assets/css/main.css";
import "../assets/css/custom-by-dev.css";
import "../assets/css/education-learning.css";
import "../assets/css/mobile.css";

const PieChartComponent = ({
  textColor,
  customX,
  customY,
  customDX,
  customDY,
  pieTitle,
  pieValue,
  pieColor,
}) => {
  return (
    <>
      <PieChart
        data={[
          {
            title: pieTitle,
            value: pieValue,
            color: pieValue >= 60 ? "#03C6AE" : "#db3563",
          },
        ]}
        background="#ddd"
        totalValue={100}
        startAngle={-90}
        lineWidth={15}
        className="piechart"
        label={({ x, y, dx, dy, dataEntry }) => (
          <>
            <text
              x={customX ? customX : x}
              y={customY ? customY : y}
              dx={customDX ? customDX : dx}
              dy={customDY ? customDY : dy}
              textAnchor="middle"
              style={{
                fontSize: "35px",
                fill: pieValue >= 60 ? "#03C6AE" : pieValue === "?" ? "#e4880f" : "#db3563",
                fontWeight: "bold",
              }}
            >
              {dataEntry.value}
            </text>
          </>
        )}
        labelStyle={{
          fontSize: "25px",
          fontWeight: "700",
          fill: pieValue >= 60 ? "#03C6AE" : "#db3563",
          color: pieValue >= 60 ? "#03C6AE" : "#db3563",
          rotate: "90deg",
        }}
        labelPosition={0}
        rounded
        style={{ height: "50px", rotate: "" }}
        animate
      ></PieChart>
    </>
  );
};

export default PieChartComponent;
