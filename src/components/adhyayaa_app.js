import "../style/adhyayaaApp.scss";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Mobile from "./3D/Mobile";

const Adhyaaya_app = () => {
  const style = {
    width: "50vw",
    height: "100vh",
  };
  return (
    <div className="adhyayaa_app">
      <div style={style}></div>
      <Canvas style={style}>
        <ambientLight intensity={0.5} />
        <OrbitControls></OrbitControls>
        <Suspense fallback="null">
          <Mobile></Mobile>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Adhyaaya_app;
