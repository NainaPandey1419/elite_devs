import React, { useEffect, useState } from 'react';
import { getFilterCATData, getFilterGATEData, getFilterInternShipData, getFilterPlacementData, getFilterResearchData } from '../../../operations/getData';
import { useDispatch } from 'react-redux';
import { fetchedDataSliceAction } from '../../../store/slices/FetchedDataSlice';

const Branches = ({action}) => {
  const dispatch = useDispatch();

  const [selectedBranches, setSelectedBranches] = useState([]);

  const toggleBranch = (branch) => {
    setSelectedBranches((prev) =>
      prev.includes(branch)
        ? prev.filter((b) => b !== branch) // Remove if selected
        : [...prev, branch] // Add if not selected
      );
  };
  
  // Run getFilterInternShipData whenever selectedBranches changes
 if(action==='internship'){
   useEffect(() => {
     getFilterInternShipData(dispatch, selectedBranches);
   }, [selectedBranches, dispatch]);

 }
 else if(action==='placement'){
  useEffect(() => {
    getFilterPlacementData(dispatch, selectedBranches);
  }, [selectedBranches, dispatch]);
 }
 else if(action==='gate'){
  useEffect(() => {
    getFilterGATEData(dispatch, selectedBranches);
  }, [selectedBranches, dispatch]);
 }
 else if(action==='cat'){
  useEffect(() => {
    getFilterCATData(dispatch, selectedBranches);
  }, [selectedBranches, dispatch]);
 }
 else if(action==='research'){
  useEffect(() => {
    getFilterResearchData(dispatch, selectedBranches);
  }, [selectedBranches, dispatch]);
 }



  return (
    <div className="flex flex-wrap gap-2 p-4">
      {["CSE", "ECE","IT", "ME", "Civil","EE"].map((branch) => (
        <button
          key={branch}
          onClick={() => toggleBranch(branch)}
          className={`px-4 py-2 rounded-lg border ${
            selectedBranches.includes(branch) ? 'bg-green-700 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          {branch}
        </button>
      ))}
    </div>
  );
};

export default Branches;
