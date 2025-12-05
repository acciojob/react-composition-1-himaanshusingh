import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ul className="tabs-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">{tabs[activeIndex]?.content || ""}</div>
    </div>
  );
};

export default Tabs;
