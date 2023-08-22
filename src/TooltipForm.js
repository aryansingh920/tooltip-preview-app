import React,{useEffect, useState} from 'react';
import './TooltipForm.css';

const TooltipForm = ({ 
  setButton1Text,
  setButton2Text,
  setButton3Text,
  setButton4Text,
  setButton5Text,
  onChange
}) => {
  const [tooltipSettings, setTooltipSettings] = useState(null);
  const [text, setText] = useState("");


  useEffect(() => {
    if (tooltipSettings === "button1")
      setButton1Text(text);
    else if (tooltipSettings === "button2")
      setButton2Text(text);
    else if (tooltipSettings === "button3")
      setButton3Text(text);
    else if (tooltipSettings === "button4")
      setButton4Text(text);
    else if (tooltipSettings === "button5")
      setButton5Text(text);

  }, [tooltipSettings, text, setButton1Text, setButton2Text, setButton3Text, setButton4Text, setButton5Text]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };


  return (
    <div className="outerContainer">
      <div className="formContainer">
        <div>
          <label>Target Element:</label>
          <select name="targetElement" onChange={(e)=>setTooltipSettings(e.target.value)}>
            <option value="button1">Button 1</option>
            <option value="button2">Button 2</option>
            <option value="button3">Button 3</option>
            <option value="button4">Button 4</option>
            <option value="button5">Button 5 </option>
          </select>
        </div>

        <div>
          <label>Tooltip Text:</label>
          <input 
            type="text" 
            value={text}
            placeholder="Tooltip Text" 
            name="tooltipText"
            onChange={(e)=>setText(e.target.value)}
          />
        </div>

        <div className="row">
          <div>
            <label>Text Size:</label>
            <input 
              type="number"
              placeholder="Text Size"
              name="textSize"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Padding:</label>
            <input 
              type="number"
              placeholder="Padding"
              name="padding"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label>Text Colour:</label>
          <input 
            type="color"
            name="textColor"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Background Colour:</label>
          <input 
            type="color"
            name="backgroundColor"
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <div>
            <label>Corner Radius:</label>
            <input 
              type="number"
              placeholder="Corner Radius"
              name="cornerRadius"
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label>Tooltip Width:</label>
            <input 
              type="number"
              placeholder="Tooltip Width"
              name="tooltipWidth"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Arrow Width:</label>
            <input 
              type="number"
              placeholder="Arrow Width"
              name="arrowWidth"
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label>Arrow Height:</label>
            <input 
              type="number"
              placeholder="Arrow Height"
              name="arrowHeight"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TooltipForm;
