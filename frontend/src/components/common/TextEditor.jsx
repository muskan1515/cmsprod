import React, { useState, useEffect } from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";

const ReactEditor = ({ editorContent, setEditorContent,index, finalValue,readOnly }) => {
  // console.log("editorContent",editorContent)
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Set the default content only on the first render
    if (isFirstRender) {
      console.log(editorContent)
      // setEditorContent(editorContent || ""); // Use the default value or an empty string if not provided
      setIsFirstRender(false);

      // Set the direction to left-to-right
      handleDirectionLTR();
    }
  }, []);

  const handleTextChange = (val) => {

    console.log(val)
    console.log(editorContent);
    setEditorContent(val)
    // setEditorContent(e.target.value);
  };

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleDirectionLTR = () => {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("insertHorizontalRule", false, null);
    document.execCommand("styleWithCSS", false, false);
  };

  
  const handleBlur = () => {
    const editorDiv = document.getElementById(`editorDiv-${index}`);
    if (editorDiv) {
      setEditorContent(editorDiv.innerHTML);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "black",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => handleCommand("bold")}>
          <FaBold />
        </button>
        <button onClick={() => handleCommand("italic")}>
          <FaItalic />
        </button>
        <button onClick={() => handleCommand("underline")}>
          <FaUnderline />
        </button>
        <label className="p-1">
          Text Size :
          <input
            className=""
            style={{ width: "40px", marginLeft: "5px" }}
            type="number"
            min="1"
            max="7"
            onChange={(e) => handleCommand("fontSize", e.target.value + "px")}
          />
        </label>
        <label style={{ marginLeft: "" }}>
          <select
            className="form-select"
            onChange={(e) => handleCommand("fontName", e.target.value)}
          >
            <option value="">Choose Text Family</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </label>
        <label>Text Color :</label>{" "}
        <input
          className=""
          style={{ width: "40px", marginLeft: "5px", marginTop: "" }}
          type="color"
          onChange={(e) => handleCommand("foreColor", e.target.value)}
        />
       
      </div>
      <div
      id={`editorDiv-${index}`}
        contentEditable={!readOnly} 
        style={{
          border: "1px solid #ccc",
          minHeight: "200px",
          padding: "10px",
          marginTop: "10px",
          direction: "ltr", // Ensure left-to-right text direction
        }}
        
        onBlur={handleBlur}
        // onInput={(e)=>setEditorContent(e.target.value)}
        dangerouslySetInnerHTML={{ __html: editorContent }}
      ></div>
    
    </div>
  );
};

export default ReactEditor;
