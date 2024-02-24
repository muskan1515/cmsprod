import React, { useState, useEffect } from 'react';

const ReactEditor = ({ editorContent, setEditorContent, readOnly }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // Set the default content only on the first render
    if (isFirstRender) {
      setEditorContent(editorContent || ''); // Use the default value or an empty string if not provided
      setIsFirstRender(false);
    }
  }, [isFirstRender, setEditorContent, editorContent]);

  const handleTextChange = (e) => {
    setEditorContent(e.target.innerHTML);
  };

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleDirectionLTR = () => {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('insertHorizontalRule', false, null);
    document.execCommand('styleWithCSS', false, false);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
        <label htmlFor="editorHeader">Header Content: </label>
        <input
          id="editorHeader"
          type="text"
          placeholder="Type header content"
          onChange={(e) => console.log(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={() => handleCommand('bold')}>Bold</button>
        <button onClick={() => handleCommand('italic')}>Italic</button>
        <button onClick={() => handleCommand('underline')}>Underline</button>
        <label>
          Text Size:
          <input
            type="number"
            min="1"
            max="7"
            onChange={(e) => handleCommand('fontSize', e.target.value + 'px')}
          />
        </label>
        <label>
          Text Family:
          <select onChange={(e) => handleCommand('fontName', e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
        </label>
        <label>
          Text Color:
          <input
            type="color"
            onChange={(e) => handleCommand('foreColor', e.target.value)}
          />
        </label>
        <button onClick={handleDirectionLTR}>Left to Right</button>
      </div>
      {readOnly ? (
        <div
          contentEditable
          style={{
            border: '1px solid #ccc',
            minHeight: '200px',
            padding: '10px',
            marginTop: '10px',
            direction: 'ltr', // Ensure left-to-right text direction
          }}
          onInput={handleTextChange}
          dangerouslySetInnerHTML={{ __html: editorContent }}
        ></div>
      ) : (
        <div
          contentEditable
          style={{
            border: '1px solid #ccc',
            minHeight: '200px',
            padding: '10px',
            marginTop: '10px',
            direction: 'ltr', // Ensure left-to-right text direction
          }}
          onInput={handleTextChange}
          dangerouslySetInnerHTML={{ __html: editorContent }}
        ></div>
      )}
    </div>
  );
};

export default ReactEditor;
