import React from "react";
import Tabs from "./Tabs";

const App = () => {
  const tabsData = [
    { title: "Tab 1", content: "This is the content for Tab1" },
    { title: "Tab 2", content: "This is the content for Tab2" },
    { title: "Tab 3", content: "This is the content for Tab3" },
  ];

  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default App;
