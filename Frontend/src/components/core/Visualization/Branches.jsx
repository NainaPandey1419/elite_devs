import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { getFilterInternShipData } from '../../../operations/getData';
import { Toaster } from 'react-hot-toast';

const Branches = () => {
  const dispatch = useDispatch();

  const [selectedBranches, setSelectedBranches] = useState([]);

  const toggleBranch = (branch) => {
    setSelectedBranches((prev) =>
      prev.includes(branch)
        ? prev.filter((b) => b !== branch) // Remove if selected
        : [...prev, branch] // Add if not selected
      );
  };

  return (
    <div className="flex flex-wrap gap-2 p-4">
      <Toaster/>
      {["CS", "EE", "ECE", "ME", "Civil"].map((branch) => (
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
