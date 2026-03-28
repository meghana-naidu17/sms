import React from "react";

const Body = ({ title, children, actions }) => {
  return (
    <div className="dashboard-body">
      <div className="body-header">
        <h2>{title}</h2>
        <div className="body-actions">{actions}</div>
      </div>

      <div className="body-content">{children}</div>
    </div>
  );
};

export default Body;