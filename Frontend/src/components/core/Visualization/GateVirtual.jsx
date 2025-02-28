import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getGATEData } from "../../../operations/getData";
import { useDispatch, useSelector } from "react-redux";
import exportPDF from "./exportPDF";
import Branches from "./Branches";

const BRANCH_COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"];
const RANK_COLORS = "#3498db";

function GATEStats() {
  const dispatch = useDispatch();
  useEffect(() => {
    getGATEData(dispatch);
  }, []);

  const gateData = useSelector((store) => store.fetchedData);

  // Branch-wise Distribution (Donut Chart)
  const branchDistribution = gateData.reduce((acc, student) => {
    acc[student.branch] = (acc[student.branch] || 0) + 1;
    return acc;
  }, {});

  const branchData = Object.keys(branchDistribution).map((branch) => ({
    name: branch,
    value: branchDistribution[branch],
  }));

  // Category-wise Distribution (Donut Chart)
  const categoryDistribution = gateData.reduce((acc, student) => {
    acc[student.category] = (acc[student.category] || 0) + 1;
    return acc;
  }, {});

  const categoryData = Object.keys(categoryDistribution).map((category) => ({
    name: category,
    value: categoryDistribution[category],
  }));

  // 🟢 **Rank Distribution with Smaller Intervals (Bar Chart)**
  const rankIntervals = {
    "0-100": 0,
    "101-500": 0,
    "501-1000": 0,
    "1001-2000": 0,
    "2001-3000": 0,
    "3001-4000": 0,
    "4001-5000": 0,
    "5001-6000": 0,
    "6001-7000": 0,
    "7001-8000": 0,
    "8001-9000": 0,
    "9001-10000": 0,
    "10001-50000": 0,
    "50001-100000": 0,
    "100001+": 0,
  };

  gateData.forEach((student) => {
    const rank = Number(student.rank); // Ensure rank is a number
    if (isNaN(rank)) return; // Skip invalid or missing ranks

    if (rank <= 100) rankIntervals["0-100"]++;
    else if (rank <= 500) rankIntervals["101-500"]++;
    else if (rank <= 1000) rankIntervals["501-1000"]++;
    else if (rank <= 2000) rankIntervals["1001-2000"]++;
    else if (rank <= 3000) rankIntervals["2001-3000"]++;
    else if (rank <= 4000) rankIntervals["3001-4000"]++;
    else if (rank <= 5000) rankIntervals["4001-5000"]++;
    else if (rank <= 6000) rankIntervals["5001-6000"]++;
    else if (rank <= 7000) rankIntervals["6001-7000"]++;
    else if (rank <= 8000) rankIntervals["7001-8000"]++;
    else if (rank <= 9000) rankIntervals["8001-9000"]++;
    else if (rank <= 10000) rankIntervals["9001-10000"]++;
    else if (rank <= 50000) rankIntervals["10001-50000"]++;
    else if (rank <= 100000) rankIntervals["50001-100000"]++;
    else rankIntervals["100001+"]++;
  });

  // Convert into an array for BarChart
  const rankData = Object.entries(rankIntervals)
    .map(([range, students]) => ({ name: range, students }))
    .filter((data) => data.students > 0); // Ensure only non-empty intervals are shown

  return (
    <div
      id="pdf-content"
      style={{
        textAlign: "center",
        padding: "20px",
        color: "#333",
      }}
    >
      <Branches action={'gate'} />

      <button
        onClick={exportPDF}
        className="absolute top-2 right-5 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Export as PDF
      </button>
      <h2>GATE Exam Statistics</h2>

      {/* 🟢 Branch-wise Distribution (Donut Chart) */}
      <h3>Branch-wise GATE Participants</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={branchData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80} // Donut chart
            outerRadius={150}
            label={({ name, value }) => `${name} (${value})`}
          >
            {branchData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={BRANCH_COLORS[index % BRANCH_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* 🔵 Category-wise Distribution (Donut Chart) */}
      <h3>Category-wise GATE Participants</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80} // Donut chart
            outerRadius={150}
            label={({ name, value }) => `${name} (${value})`}
          >
            {categoryData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={BRANCH_COLORS[index % BRANCH_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* 🟠 Rank Distribution (Bar Chart with Smaller Intervals) */}
      <h3>Rank Distribution of GATE Participants</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={rankData}
          margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
        >
          <XAxis dataKey="name" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip />
          <Legend />
          <Bar dataKey="students" fill={RANK_COLORS} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GATEStats;
