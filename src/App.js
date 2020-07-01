// Imports
import React from "react";
import SideBar from "./components/SideBar";
import MusicController from "./components/MusicController";

// Exports
function App() {
  return (
    <>
      <div className="outer-wrap">
        <div className="App">
          <SideBar />
          <MusicController />
        </div>
      </div>
    </>
  );
}

export default App;
