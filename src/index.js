import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App/App";
import "./index.css";

// import react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// import context
import { RoomProvider } from "./Context/Context";

// FIX: Added React.StrictMode wrapper
// StrictMode activates extra warnings in development:
//   - Identifies unsafe lifecycle methods
//   - Warns about legacy string ref API usage
//   - Detects unexpected side effects
//   - Warns about deprecated findDOMNode usage
ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Measuring performance. Pass a function to log results:
// reportWebVitals(console.log)
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
