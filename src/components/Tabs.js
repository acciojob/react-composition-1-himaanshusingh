import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => setActiveTab(index)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <p className="tab-content">{tabs[activeTab].content}</p>
    </div>
  );
};

export default Tabs;
