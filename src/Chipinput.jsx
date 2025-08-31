import React, { useState } from "react";
import './Chipinput.css';

function ChipsInput() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips([...chips, inputText.trim()]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    const newChips = chips.filter((chip, i) => i !== index);
    setChips(newChips);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      
      <input
        type="text"
        placeholder="Type a chip and press Enter"
        style={{ padding: "8px", width: "200px" }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              background: "grey",
              margin: "5px",
              color: "white",
              padding: "5px 10px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center"
            }}
          >
            {chip}
            <button
              onClick={() => handleDelete(index)}
              style={{
                marginLeft: "8px",
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer"
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
