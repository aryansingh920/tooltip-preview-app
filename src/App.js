/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import './App.css';
import MobilePreview from './MobilePreview';
import TooltipForm from './TooltipForm';

function App() {

  const [ button1Text, setButton1Text ] = useState("Button 1");
  const [ button2Text, setButton2Text ] = useState("Button 2");
  const [ button3Text, setButton3Text ] = useState("Button 3");
  const [ button4Text, setButton4Text ] = useState("Button 4");
  const [ button5Text, setButton5Text ] = useState("Button 5");

  // setButton1Text("Button 1");
  // setButton2Text("Button 2");
  // setButton3Text("Button 3");
  // setButton4Text("Button 4");
  // setButton5Text("Button 5");

  useEffect(() => {
    // console.log("Here", button1Text,button2Text,button3Text,button4Text,button5Text)
  }, [button1Text,button2Text,button3Text,button4Text,button5Text]);

  const [tooltipSettings, setTooltipSettings] = useState({
    targetElement: null,
    tooltipText: "",
    textSize: "16px",
    padding: "10px",
    textColor: "#000",
    backgroundColor: "#FFF",
    cornerRadius: "5px",
    tooltipWidth: "auto",
    arrowWidth: "10px",
    arrowHeight: "10px"
  });

  const handleFormChange = (name, value) => {
    setTooltipSettings(prevSettings => ({
      ...prevSettings,
      [name]: value
    }));
  };




  const computedStyles = {
    fontSize: tooltipSettings.textSize + 'px',
    padding: tooltipSettings.padding + 'px',
    color: tooltipSettings.textColor,
    backgroundColor: tooltipSettings.backgroundColor,
    borderRadius: tooltipSettings.cornerRadius + 'px',
    width: tooltipSettings.tooltipWidth + 'px',
    /* We need a way to implement arrow. Here, I'm just including width and height as placeholders. */
    /* It's tricky to make a perfect arrow without some CSS tricks, and it's a bit outside of this scope. */
  };



  return (
    <div className="app">
      <TooltipForm
        setButton1Text={setButton1Text}
        setButton2Text={setButton2Text}
        setButton3Text={setButton3Text}
        setButton4Text={setButton4Text}
        setButton5Text={setButton5Text}
        onChange={handleFormChange}

      />
      <MobilePreview 
        targetElement={tooltipSettings.targetElement} 
        tooltipStyles={computedStyles} 
        tooltipText={tooltipSettings.tooltipText} 

        button1Text={button1Text}
        button2Text={button2Text}
        button3Text={button3Text}
        button4Text={button4Text}
        button5Text={button5Text}
      />
    </div>
  );
}

export default App;
