import React from "react";
import { Link } from "react-router-dom";
import "./SettingsPage.css";

const Settings = (props) => {
  return (
    <div>
      <div>
        <h6 className="heading">Set Difficulty Level</h6>
      </div>
      <div className="diffRow">
        <Link to="/">
          <button className="diffBtn" onClick={props.handleEasy}>
            Easy
          </button>
        </Link>
        {props.colors.Easy.map((color) => (
          <button
            className="button"
            style={{
              backgroundColor: color,
              borderColor: color,
            }}
          />
        ))}
      </div>
      <div className="diffRow">
        <Link to="/">
          <button className="diffBtn" onClick={props.handleModerate}>
            Moderate
          </button>
        </Link>
        {props.colors.Moderate.map((color) => (
          <button
            className="button"
            style={{
              backgroundColor: color,
              borderColor: color,
            }}
          />
        ))}
      </div>
      <div className="diffRow">
        <Link to="/">
          <button className="diffBtn" onClick={props.handleDifficult}>
            Difficult
          </button>
        </Link>
        {props.colors.Difficult.map((color) => (
          <button
            className="button"
            style={{
              backgroundColor: color,
              borderColor: color,
            }}
          />
        ))}
      </div>
      <div className="cancelBtn">
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
