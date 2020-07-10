import React from "react";

const ProgressBar = ({ name, value }) => (
  <div className="progress">
    <h4>{name}</h4>
    <div className="progress-bar">
      <span style={{ width: `${value}%` }}>{value}%</span>
    </div>
  </div>
);

export default ProgressBar;
