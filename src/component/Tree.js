import { AiOutlineFolder } from "react-icons/ai";
import React, { useState } from "react";
import "./Tree.css";

const Tree = ({ data }) => {
  return (
    <div className="tree">
      <ul>
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [expand, setExpand] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className="tree__node">
      <div className="node__block" onClick={(e) => setExpand((v) => !v)}>
        {hasChild && (
          <div className={`folder__icon ${expand ? "active" : ""}`}>
            <AiOutlineFolder />
          </div>
        )}

        <div className="node__name">{node.name}</div>
      </div>

      {hasChild && expand && (
        <div>
          <ul>
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
