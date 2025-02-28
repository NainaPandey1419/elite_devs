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
import InternShip from "./InternShip";
import GateVirtual from "./GateVirtual";
import CAT from "./CAT";
import NPTELVisual from "./NPTELVisual";
import PlacementVisule from "./PlacementVisule";
import ResearchVisule from "./ResearchVisule";

const AnnualReport = () => {
  return (
    <div><InternShip />
    <GateVirtual />
    <CAT />
    <NPTELVisual />
    <PlacementVisule />
    <ResearchVisule />
    </div>
  )
}

export default AnnualReport