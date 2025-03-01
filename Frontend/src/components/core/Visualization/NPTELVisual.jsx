import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getNPTELData } from "../../../operations/getData";
import exportPDF from "./exportPDF";
import Branches from "./Branches";

export default function NPTELVisual() {
  const dispatch = useDispatch();

  useEffect(() => {
    getNPTELData(dispatch);
  }, []);

  const nptelData = useSelector((store) => store.fetchedData);

  const filteredData=nptelData.filter((data)=>data.department==="Computer Science and Engineering");

  if (nptelData.length === 0) {
    return <div>Loading data...</div>;
  }

  const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#F1948A", "#48C9B0"
  ];

  // Course Enrollment per Course Name (Bar Chart)
  const courseDistribution = nptelData.reduce((acc, course) => {
    acc[course.courseName] = (acc[course.courseName] || 0) + 1;
    return acc;
  }, {});

  const courseData = Object.keys(courseDistribution).map((course) => ({
    name: course,
    students: courseDistribution[course],
  }));

  // Enrollment Distribution by Department (Pie Chart)
  const departmentDistribution = nptelData.reduce((acc, course) => {
    acc[course.department] = (acc[course.department] || 0) + 1;
    return acc;
  }, {});

  const departmentData = Object.keys(departmentDistribution).map((dept) => ({
    name: dept,
    value: departmentDistribution[dept],
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
        <h1>NPTEL Data Insights</h1>
{/* Pie Chart: Enrollment Distribution by Department */}
<h2>Enrollment Distribution by Department</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={departmentData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#ff7300"
              label={(entry) => `${entry.name} (${entry.value})`}
            >
              {departmentData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value} students`, name]} />
          </PieChart>
        </ResponsiveContainer>
        {/* Bar Chart: Students Enrolled per Course */}
        <h2>Students Enrolled per Course</h2>
        <ResponsiveContainer width="90%" height={300}>
          <BarChart data={courseData}>
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
