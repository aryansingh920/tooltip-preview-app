/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./MobilePreview.css";

const MobilePreview = ({
  targetElement,
  tooltipStyles,
  tooltipText,
  button1Text,
  button2Text,
  button3Text,
  button4Text,
  button5Text,
}) => {
  useEffect(() => {
    // console.log("Here",button1Text)
  }, [button1Text, button2Text, button3Text, button4Text, button5Text]);

  return (
    <div className="mobilePreviewContainer">
      <div className="mobileFrame">
        {/* Row 1: Buttons 1 and 2 */}

        <div className="button-row">

          <>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#FFF",
                color: "#000",
                fontSize: "12px",
                zIndex: "100",
              }}
            >
              {button1Text}
            </div>
            <button
              id="button1"
              style={tooltipStyles}
              className={targetElement === "button1" ? "targeted" : ""}
            >
              {"Button 1"}
            </button>
          </>

          <>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#FFF",
                color: "#000",
                fontSize: "12px",
                zIndex: "100",
                left: "204px",
              }}
            >
              {button2Text}
            </div>
            <button
              id="button2"
              style={tooltipStyles}
              className={targetElement === "button2" ? "targeted" : ""}
            >
              {"Button 2"}
            </button>
          </>

        </div>

        {/* Row 2: Button 3 */}
        <div className="button-row centered">
          <div
            style={{
              position: "absolute",
              backgroundColor: "#FFF",
              color: "#000",
              fontSize: "12px",
              zIndex: "100",
              // left: "204px",
            }}
          >
            {button3Text}
          </div>
          <button
            id="button3"
            style={tooltipStyles}
            className={targetElement === "button3" ? "targeted centered" : ""}
          >
            {"Button 3"}
          </button>
        </div>

        {/* Row 3: Buttons 4 and 5 */}
        <div className="button-row">
          <div
            style={{
              position: "absolute",
              backgroundColor: "#FFF",
              color: "#000",
              fontSize: "12px",
              zIndex: "100",
              // left: "204px",
            }}
          >
            {button4Text}
          </div>
          <button
            id="button4"
            style={tooltipStyles}
            className={targetElement === "button4" ? "targeted" : ""}
          >
            {"Button 4"}
          </button>

          <div
            style={{
              position: "absolute",
              backgroundColor: "#FFF",
              color: "#000",
              fontSize: "12px",
              zIndex: "100",
              left: "204px",
            }}
          >
            {button5Text}
          </div>
          <button
            id="button5"
            style={tooltipStyles}
            className={targetElement === "button5" ? "targeted" : ""}
          >
            {"Button 5"}
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
