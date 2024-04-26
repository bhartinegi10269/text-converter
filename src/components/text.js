import "./text.css";
import React, { useState } from "react";

function TextTransform() {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const [text, setText] = useState();

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "White",
  });

  const [btntext, setBtnText] = useState("Enable dark mode");
  const togglestyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <div style={myStyle}>
      <nav class="navbar" style={myStyle}>
        <ul>
          <a href="#">App</a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </ul>
        <button onClick={togglestyle} class="toggle" style={myStyle}>
          {btntext}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="29"
            className="mx-3"
            color="blue"
            fill="currentColor"
            class="bi bi-toggle2-off"
            viewBox="0 0 16 16"
          >
            <path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z" />
            <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10" />
          </svg>
        </button>
      </nav>
      <div>
        <p class="paragraph">Text Converter</p>
        <textarea
          style={myStyle}
          class="area"
          value={text}
          onChange={handleOnChange}
          rows="6"
          cols="100"
        ></textarea>
      </div>
      <div class="button">
        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button type="button" class="btn btn-primary mx-1" onClick={speak}>
          Voice
        </button>
        <button
          type="button"
          class="btn btn-danger mx-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
      </div>
      <div class="para">
        <p>Number of words: 1</p>
        <p>Number of Characters: 0</p>
        <p>Preview: Enter text in the box above</p>
      </div>
    </div>
  );
}
export default TextTransform;
