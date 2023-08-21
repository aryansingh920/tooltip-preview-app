/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import "./MobilePreview.css";

const MobilePreview = ({
  targetElement,
  tooltipStyles,
  tooltipText,
  button1Text,
  button2Text,
  button3Text,
  button4Text,
  button5Text
}) => {
  useEffect(() => {
    // console.log("Here",button1Text)
  }, [button1Text,button2Text,button3Text,button4Text,button5Text]);


  return (
    <div className="mobilePreviewContainer">
      <div className="mobileFrame">
        {/* Row 1: Buttons 1 and 2 */}
        <div className="button-row">
          <button
            id="button1"
            style={tooltipStyles}
            className={targetElement === "button1" ? "targeted" : ""}
          >
            {button1Text}
          </button>
          <button
            id="button2"
            className={targetElement === "button2" ? "targeted" : ""}
          >
            {button2Text}
          </button>
        </div>

        {/* Row 2: Button 3 */}
        <div className="button-row centered">
          <button
            id="button3"
            className={targetElement === "button3" ? "targeted centered" : ""}
          >
            {button3Text}
          </button>
        </div>

        {/* Row 3: Buttons 4 and 5 */}
        <div className="button-row">
          <button
            id="button4"
            className={targetElement === "button4" ? "targeted" : ""}
          >
            {button4Text}
          </button>
          <button
            id="button5"
            className={targetElement === "button5" ? "targeted" : ""}
          >
            {button5Text}
          </button>
        </div>

        {targetElement && (
          <div className={`tooltip ${targetElement}`} style={tooltipStyles}>
            {tooltipText}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobilePreview;
