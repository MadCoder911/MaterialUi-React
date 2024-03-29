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
import MuiGrid from "./components/MuiGrid";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavBar from "./components/MuiNavBar";
import MuiLink from "./components/MuiLink";
import MuiBreadCrumbs from "./components/MuiBreadCrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBottomnavigation from "./components/MuiBottomnavigation";
import { MuiAvatar } from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";

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
      {/* <MuiLayout /> */}
      {/* <MuiGrid /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiImageList /> */}
      {/* Navbar and Menu */}
      {/* <MuiNavBar /> */}
      {/* <MuiLink /> */}
      {/* <MuiBreadCrumbs /> */}
      {/* <MuiDrawer /> */}
      {/* <MuiSpeedDial /> */}
      {/* <MuiBottomnavigation /> */}
      {/* <MuiAvatar /> */}
      <MuiBadge />
    </div>
  );
}

export default App;
