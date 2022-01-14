import Vdo from "./vdo";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [close, setClose] = useState(false);
  return (
    <div className={!close ? "main" : ""}>
      <Vdo close={close} setClose={setClose} />
      <h1>Hello</h1>
    </div>
  );
};

export default App;
