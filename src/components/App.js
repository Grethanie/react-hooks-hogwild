import React, { useState } from "react";
import Nav from "./Nav";
import Hog from "./Hog";

import hogs from "../porkers_data";

function App() {
  const [showGreased, setShowGreased] = useState(false);

  return (
    <div className="App">
      <Nav />
      <button onClick={() => setShowGreased(!showGreased)}>Show greased</button>

      {hogs
        .filter((hog) => {
          if (showGreased) {
            return hog.greased;
          } else {
            return true;
          }
        })
        .map((hog) => (
          <Hog hog={hog} />
        ))}
    </div>
  );
}

export default App;
