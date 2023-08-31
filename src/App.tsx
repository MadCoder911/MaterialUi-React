import { useState } from "react";

import "./App.css";
import MuiTypography from "./components/MuiTypography";
import MuiBtn from "./components/MuiBtn";
import MuiTextFields from "./components/MuiTextFields";
import MuiSelect from "./components/MuiSelect";
import MuiRadio from "./components/MuiRadio";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import { Autocomplete } from "@mui/material";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiLayout from "./components/MuiLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <MuiTypography />
      <br />
      <hr />
      <br />
      <MuiBtn />
      <br />
      <hr />
      <br />
      <MuiTextFields />
      <br />
      <hr />
      <br />
      */}
      {/* <MuiSelect /> */}
      {/* <MuiRadio /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutoComplete /> */}
      <MuiLayout />
    </div>
  );
}

export default App;
