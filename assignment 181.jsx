import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  const [feedback, setFeedback] = useState("");

  return (
    <div
      style={{
        backgroundColor: darkTheme ? "#222" : "#f4f4f4",
        color: darkTheme ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Student Interaction Panel</h1>

      <div>
        <h2>Login Status</h2>
        <p>{isLoggedIn ? "User Logged In" : "User Logged Out"}</p>
        <button onClick={toggleLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      <hr />

      <div>
        <h2>Click Counter</h2>
        <p>Total Clicks: {count}</p>
        <button onClick={increaseCount}>Click Me</button>
      </div>

      <div>
        <h2>Theme Switcher</h2>
        <button onClick={toggleTheme}>
          Switch to {darkTheme ? "Light" : "Dark"} Theme
        </button>
      </div>

      <div>
        <h2>Feedback</h2>
        <input
          type="text"
          placeholder="Enter your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <p>Live Feedback: {feedback}</p>
      </div>
    </div>
  );
}

export default App;