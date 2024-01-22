import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import API from "./call-API/List";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Register /> */}
      {/* <API/> */}
      <Outlet />
    </>
  );
}

export default App;
