/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import './App.css';
import MobilePreview from './MobilePreview';
import TooltipForm from './TooltipForm';

function App() {

  const [ button1Text, setButton1Text ] = useState("");
  const [ button2Text, setButton2Text ] = useState("");
  const [ button3Text, setButton3Text ] = useState("");
  const [ button4Text, setButton4Text ] = useState("");
  const [ button5Text, setButton5Text ] = useState("");


  useEffect(() => {
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
        setTooltipSettingsApp={setTooltipSettings}
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
