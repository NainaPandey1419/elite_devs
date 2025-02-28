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
  
  const reasearchData = useSelector(store => store.fetchedData);

  return (
    <div>
      {reasearchData.length>0 && <p>Hello i am reasearch Data</p>}
    </div>
  );
}

