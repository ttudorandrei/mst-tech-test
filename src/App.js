import React, { useState } from "react";

import "./App.css";
import LandingPage from "./pages/landing-page";

const App = () => {
  const [showData, setShowData] = useState(false);

  return (
    <div className="App">
      <h1>
        <i className="fa fa-circle text-danger Blink"></i>&nbsp; MST Systems -
        Live Data Table
      </h1>
      {/* renders the button only if showData is false */}
      {!showData && (
        <button
          className="show-table-button"
          onClick={() => {
            setShowData(true);
          }}
        >
          Show Table
        </button>
      )}
      {/* when showData is set to true, the table will be displayed */}
      {showData && <LandingPage />}
    </div>
  );
};

export default App;
