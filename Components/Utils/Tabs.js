import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      <div className="flex mb-4 rounded-md">
        <button
          className={`py-2 px-4 font-semibold rounded-b-md ${
            activeTab === 1 ? 'bg-transparent text-black' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === 2 ? 'bg-transparent text-black' : 'bg-gray-200 text-gray-700'
          } `}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-r ${
            activeTab === 3 ? 'bg-tranparent text-black' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>
      <div className="border border-gray-300 p-4">
        {activeTab === 1 && <p>Content for Tab 1</p>}
        {activeTab === 2 && <p>Content for Tab 2</p>}
        {activeTab === 3 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default Tabs;
