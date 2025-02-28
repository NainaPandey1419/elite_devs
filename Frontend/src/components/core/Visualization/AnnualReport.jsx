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
import { useDispatch, useSelector } from "react-redux";
import exportPDF from "./exportPDF";

import InternShip from "./InternShip";
import GateVirtual from "./GateVirtual";
import CAT from "./CAT";
import NPTELVisual from "./NPTELVisual";
import PlacementVisule from "./PlacementVisule";
import ResearchVisule from "./ResearchVisule";

const AnnualReport = () => {
  return (
    <div id="pdf-content" >
      <button
          onClick={exportPDF}
          className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Export as PDF
        </button>
      <InternShip />
    <GateVirtual />
    <CAT />
    <NPTELVisual />
    <PlacementVisule />
    <ResearchVisule />
    </div>
  )
}

export default AnnualReport