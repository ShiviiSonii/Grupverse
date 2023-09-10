import Navbar from "./components/Navbar"
import LeftBlock from "./components/LeftBlock";
import MiddleBlock from "./components/MiddleBlock";
import RightBlock from "./components/RightBlock";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid-container">
          <div className="left-column">
          <LeftBlock />
          </div>
          <div className="center-column">
          <MiddleBlock />
          </div>
          <div className="right-column">
          <RightBlock />
        </div>
    </div>
    </div>
  );
}

export default App;
