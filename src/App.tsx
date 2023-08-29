import { useState } from "react";

import "./App.css";
import MuiTypography from "./components/MuiTypography";
import MuiBtn from "./components/MuiBtn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MuiTypography />
      <br />
      <hr />
      <br />
      <MuiBtn />
    </div>
  );
}

export default App;
