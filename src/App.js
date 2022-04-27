import React from "react";
import data from "./data/data.json";
import Tree from "./component/Tree";

const App = () => {
  return (
    <div className="node">
      <h1>Directory Structure</h1>
      <Tree data={data} />
    </div>
  );
};

export default App;
