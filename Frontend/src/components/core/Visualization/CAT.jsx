import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { getCATData } from "../../../operations/getData";
import exportPDF from './exportPDF' 


function CATStats() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getCATData(dispatch);
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#F1948A", "#48C9B0"];
 
  const catData = useSelector((store) => store.fetchedData);

  // 🟢 *Branch-wise Student Distribution (Pie Chart)*
  const branchDistribution = catData.reduce((acc, student) => {
    acc[student.branch] = (acc[student.branch] || 0) + 1;
    return acc;
  }, {});

  const branchData = Object.keys(branchDistribution).map((branch) => ({
    name: branch,
    value: branchDistribution[branch],
  }));

  // 🔵 *Rank-wise Student Distribution in Intervals (Bar Chart)*
  const rankIntervals = {
    "1-100": 0,
    "101-500": 0,
    "501-1000": 0,
    "1001-2000": 0,
    "2001-3000": 0,
    "3001-4000": 0,
    "4001-5000": 0,
    "5001-10000": 0,
    "10001-50000": 0,
    "50001-100000": 0,
    "100001-110000": 0,
    "110001-120000": 0,
    "120001-130000": 0,
    "130001-140000": 0,
    "140001-150000": 0,
    "150001-160000": 0,
    "160001-170000": 0,
    "170001-180000": 0,
    "180001-190000": 0,
    "190001-200000": 0,
    "200001+": 0,
  };

  catData.forEach((student) => {
    const rank = Number(student.rank); // Ensure it's a number

    if (!isNaN(rank)) {  // Check if rank is a valid number
      if (rank <= 100) rankIntervals["1-100"]++;
      else if (rank <= 500) rankIntervals["101-500"]++;
      else if (rank <= 1000) rankIntervals["501-1000"]++;
      else if (rank <= 2000) rankIntervals["1001-2000"]++;
      else if (rank <= 3000) rankIntervals["2001-3000"]++;
      else if (rank <= 4000) rankIntervals["3001-4000"]++;
      else if (rank <= 5000) rankIntervals["4001-5000"]++;
      else if (rank <= 10000) rankIntervals["5001-10000"]++;
      else if (rank <= 50000) rankIntervals["10001-50000"]++;
      else if (rank <= 100000) rankIntervals["50001-100000"]++;
      else if (rank <= 110000) rankIntervals["100001-110000"]++;
      else if (rank <= 120000) rankIntervals["110001-120000"]++;
      else if (rank <= 130000) rankIntervals["120001-130000"]++;
      else if (rank <= 140000) rankIntervals["130001-140000"]++;
      else if (rank <= 150000) rankIntervals["140001-150000"]++;
      else if (rank <= 160000) rankIntervals["150001-160000"]++;
      else if (rank <= 170000) rankIntervals["160001-170000"]++;
      else if (rank <= 180000) rankIntervals["170001-180000"]++;
      else if (rank <= 190000) rankIntervals["180001-190000"]++;
      else if (rank <= 200000) rankIntervals["190001-200000"]++;
      else rankIntervals["200001+"]++;
    }
  });

  // Convert rankIntervals object into an array for BarChart
  const rankData = Object.keys(rankIntervals).map((range) => ({
    range,
    count: rankIntervals[range],
  }));

  return (
    <div id="pdf-content" style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>CAT Exam Statistics</h1>

      {/* 🟢 Pie Chart: Branch-wise Distribution */}
      <h2>Branch-wise Student Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={branchData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label={({ name, value }) => `${name} (${value})`}
          >
            {branchData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} students`, name]} />
        </PieChart>
      </ResponsiveContainer>

      {/* 🔵 Bar Chart: Rank-wise Student Distribution */}
      <h2>Rank-wise Student Distribution</h2>
      <ResponsiveContainer width="90%" height={300}>
        <BarChart data={rankData}>
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} students`]} />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <button onClick={exportPDF} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Export as PDF
      </button>
    </div>
  );
}

export default CATStats;
