import "./App.css";
import LandingPage from "./pages/landing-page";

const App = () => {
  return (
    <div className="App">
      <h1>
        <i className="fa fa-circle text-danger Blink"></i>&nbsp; MST Systems -
        Live Updates{" "}
      </h1>
      <LandingPage />
    </div>
  );
};

export default App;
