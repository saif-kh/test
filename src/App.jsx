import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <div style={{ height: "100vh", color: "white" }}>hi</div>
    </div>
  );
}

export default App;
