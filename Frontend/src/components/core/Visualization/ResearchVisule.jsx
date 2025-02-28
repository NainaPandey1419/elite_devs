import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResearchData } from '../../../operations/getData';
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
import exportPDF from "./exportPDF";
import Branches from "./Branches";

export default function ResearchVisual() {
  const dispatch = useDispatch();

  useEffect(() => {
    getResearchData(dispatch);
  }, []);

  const researchData = useSelector((store) => store.fetchedData);

  if (researchData.length === 0) {
    return <div>Loading data...</div>;
  }

  const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#F1948A", "#48C9B0"
  ];

  // Research Papers Published per Department (Bar Chart)
  const departmentDistribution = researchData.reduce((acc, record) => {
    acc[record.department] = (acc[record.department] || 0) + 1;
    return acc;
  }, {});

  const departmentData = Object.keys(departmentDistribution).map((dept) => ({
    name: dept,
    papers: departmentDistribution[dept],
  }));

  // Research Papers by Type (Pie Chart)
  const typeDistribution = researchData.reduce((acc, record) => {
    acc[record.type] = (acc[record.type] || 0) + 1;
    return acc;
  }, {});

  const typeData = Object.keys(typeDistribution).map((type) => ({
    name: type,
    value: typeDistribution[type],
  }));

  return (
    <div>
      <Branches />
      <div id="pdf-content" className="relative text-center p-5 font-sans">
        <button
          onClick={exportPDF}
          className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Export as PDF
        </button>
        <h1>Research Data Insights</h1>
{/* Pie Chart: Research Papers by Type */}
<h2>Research Papers by Type</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={typeData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#ff7300"
              label={(entry) => `${entry.name} (${entry.value})`}
            >
              {typeData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value} papers`, name]} />
          </PieChart>
        </ResponsiveContainer>
        {/* Bar Chart: Research Papers Published per Department */}
        <h2>Research Papers Published per Department</h2>
        <ResponsiveContainer width="90%" height={300}>
          <BarChart data={departmentData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="papers" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        
      </div>
    </div>
  );
}

