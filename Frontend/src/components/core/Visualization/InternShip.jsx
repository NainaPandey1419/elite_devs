import { useState, useEffect } from "react";
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
  Treemap,
} from "recharts";
import { getInternShipData } from "../../../operations/getData";
import { useDispatch, useSelector } from "react-redux";
import exportPDF from "./exportPDF";
import Branches from "./Branches";
import { ToastBar, Toaster } from "react-hot-toast";
function InternshipStats() {
  const dispatch = useDispatch();

  useEffect(() => {
    getInternShipData(dispatch);
  }, []);

  const internships = useSelector((store) => store.fetchedData);

  if (internships.length === 0) {
    return <div>Loading data...</div>;
  }

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A569BD",
    "#F1948A",
    "#48C9B0",
  ];

  // Students Selected per Company (Bar Chart)
  const companyDistribution = internships.reduce((acc, intern) => {
    acc[intern.companyName] = (acc[intern.companyName] || 0) + 1;
    return acc;
  }, {});

  const companyData = Object.keys(companyDistribution).map((company) => ({
    name: company,
    students: companyDistribution[company],
  }));

  // Stipend Distribution by Company (Treemap)
  const companyStipends = internships.reduce((acc, intern) => {
    acc[intern.companyName] =
      (acc[intern.companyName] || 0) + (intern.stipend || 0);
    return acc;
  }, {});

  const stipendData = Object.keys(companyStipends).map((company) => ({
    name: company,
    stipend: companyStipends[company],
  }));

  // Distribution by Branch (Pie Chart)
  const branchDistribution = internships.reduce((acc, intern) => {
    acc[intern.branch] = (acc[intern.branch] || 0) + 1;
    return acc;
  }, {});

  const branchData = Object.keys(branchDistribution).map((branch) => ({
    name: branch,
    value: branchDistribution[branch],
  }));

  return (
    <div>
      <div id="pdf-content" className="relative text-center p-5 font-sans">
        <button
          onClick={exportPDF}
          className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Export as PDF
        </button>
      <Branches  action={'internship'}/>
      <h1>Internship Data Insights</h1>
      <Toaster/>

      {/* Pie Chart: Internship Distribution by Branch */}
        <h2>Internship Distribution by Branch</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={branchData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#ff7300"
              label={(entry) => `${entry.name} (${entry.value})`}
            >
              {branchData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value} students`, name]} />
          </PieChart>
        </ResponsiveContainer>

        {/* Bar Chart: Students Selected per Company */}
        <h2>Students Selected per Company</h2>
        <ResponsiveContainer width="90%" height={300}>
          <BarChart data={companyData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        
      </div>
    </div>
  );
}

export default InternshipStats;
