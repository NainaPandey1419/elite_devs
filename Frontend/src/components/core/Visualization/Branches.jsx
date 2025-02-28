import React, { useState } from 'react';

const Branches = () => {
  const [selectedBranches, setSelectedBranches] = useState([
    "Computer Science",
    "Electrical",
    "Electronics and Communication",
    "Mechanical",
    "Civil"
  ]);

  const toggleBranch = (branch) => {
    setSelectedBranches((prev) =>
      prev.includes(branch)
        ? prev.filter((b) => b !== branch) // Remove if selected
        : [...prev, branch] // Add if not selected
    );
  };

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {["Computer Science", "Electrical", "Electronics and Communication", "Mechanical", "Civil"].map((branch) => (
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
