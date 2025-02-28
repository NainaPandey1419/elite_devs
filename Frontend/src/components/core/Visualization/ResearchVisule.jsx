import React, { useState, useEffect } from "react";
import { getResearchData } from "../../../operations/getData";
import { useDispatch, useSelector } from "react-redux";
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

function ResearchVisule() {
  const dispatch = useDispatch();

  useEffect(() => {
    getResearchData(dispatch);
  }, []);

  const researchData = useSelector((store) => store.fetchedData);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#F1948A", "#48C9B0"];

  // 🟢 Branch-wise Research Paper Distribution (Pie Chart)
  const branchDistribution = researchData.reduce((acc, paper) => {
    acc[paper.branch] = (acc[paper.branch] || 0) + 1;
    return acc;
  }, {});

  const branchData = Object.keys(branchDistribution).map((branch) => ({
    name: branch,
    value: branchDistribution[branch],
  }));

  // 🔵 Indexing-wise Paper Distribution (Bar Chart)
  const indexingDistribution = researchData.reduce((acc, paper) => {
    acc[paper.indexing] = (acc[paper.indexing] || 0) + 1;
    return acc;
  }, {});

  const indexingData = Object.keys(indexingDistribution).map((indexing) => ({
    indexing,
    count: indexingDistribution[indexing],
  }));

  // ⏳ Impact Factor Distribution (Bar Chart with Reduced Intervals)
  const impactFactorRanges = {
    "0 - 2": 0,
    "2 - 4": 0,
    "4 - 6": 0,
    "6 - 8": 0,
    "8 - 10": 0,
    "10+": 0,
  };

  researchData.forEach((paper) => {
    const impactFactor = parseFloat(paper.impactFactor); // Convert to number
    if (impactFactor < 2) impactFactorRanges["0 - 2"]++;
    else if (impactFactor < 4) impactFactorRanges["2 - 4"]++;
    else if (impactFactor < 6) impactFactorRanges["4 - 6"]++;
    else if (impactFactor < 8) impactFactorRanges["6 - 8"]++;
    else if (impactFactor < 10) impactFactorRanges["8 - 10"]++;
    else impactFactorRanges["10+"]++;
  });

  const impactFactorData = Object.keys(impactFactorRanges).map((range) => ({
    range,
    count: impactFactorRanges[range],
  }));

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Research Paper Statistics</h1>

      {/* 🟢 Pie Chart: Branch-wise Research Paper Distribution */}
      <h2>Branch-wise Research Paper Distribution</h2>
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
          <Tooltip formatter={(value, name) => [`${value} papers`, name]} />
        </PieChart>
      </ResponsiveContainer>

      {/* 🔵 Bar Chart: Indexing-wise Research Paper Distribution */}
      <h2>Indexing-wise Research Paper Distribution</h2>
      <ResponsiveContainer width="90%" height={300}>
        <BarChart data={indexingData}>
          <XAxis dataKey="indexing" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} papers`]} />
          <Legend />
          <Bar dataKey="count" fill="#FF8042" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ResearchVisule;
