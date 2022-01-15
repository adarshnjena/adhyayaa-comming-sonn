import Vdo from "./vdo";
import { useState } from "react";
import "boxicons";
import "../style/Overlay.scss";

const Overlay = () => {
  const [close, setClose] = useState(false);
  return (
    <div className={!close ? "overlay" : ""}>
      <Vdo close={close} setClose={setClose} />
    </div>
  );
};

export default Overlay;
