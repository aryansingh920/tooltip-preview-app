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
                backgroundColor: "#000",
                color: "#FFF",
                fontSize: "12px",
                zIndex: 100,
                top: "15px",
                left: "44px",
                ...(targetElement === "button1" && tooltipStyles)
              }}
              className={targetElement === "button1" ? "targeted" : ""}
            >
              {button1Text}
            </div>
            <button
              id="button1"
            >
            Button 1
            </button>
          </>

          <>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#000",
                color: "#FFF",
                fontSize: "12px",
                zIndex: "100",
                left: "240px",
                top: "15px",
                ...(targetElement === "button2" && tooltipStyles)
              }}
              className={targetElement === "button2" ? "targeted" : ""}
            >
              {button2Text}
            </div>
            <button
              id="button2"
            >
              Button 2
            </button>
          </>

        </div>

        {/* Row 2: Button 3 */}
        <div className="button-row centered">
          <div
            style={{
              position: "absolute",
              backgroundColor: "#000",
              color: "#FFF",
              fontSize: "12px",
              zIndex: "100",
              top: "328px",
              ...(targetElement === "button3" && tooltipStyles)
            }}
            className={targetElement === "button3" ? "targeted centered" : ""}
          >
            {button3Text}
          </div>
          <button
            id="button3"

          >
            Button 3
          </button>
        </div>

        {/* Row 3: Buttons 4 and 5 */}
        <div className="button-row">
          <div
            style={{
              position: "absolute",
              backgroundColor: "#000",
              color: "#FFF",
              fontSize: "12px",
              zIndex: "100",
              left: "44px",
              bottom: "58px",
              ...(targetElement === "button4" && tooltipStyles)
              // left: "204px",
            }}
            className={targetElement === "button4" ? "targeted" : ""}
          >
            {button4Text}
          </div>
          <button
            id="button4"
          >
            Button 4
          </button>

          <div
            style={{
              position: "absolute",
              backgroundColor: "#000",
              color: "#FFF",
              fontSize: "12px",
              zIndex: "100",
              left: "233px",
              bottom: "58px",
              ...(targetElement === "button5" && tooltipStyles)
            }}
            className={targetElement === "button5" ? "targeted" : ""}
          >
            {button5Text}
          </div>
          <button
            id="button5"
          >
            Button 5
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
