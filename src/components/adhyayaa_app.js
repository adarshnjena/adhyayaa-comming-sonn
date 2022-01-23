import "../style/adhyayaaApp.scss";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Mobile from "./3D/Mobile";

const Adhyaaya_app = () => {
  let style = {
    width: "30vw",
    height: "100vh",
    zIndex: "-1",
  };
  if (document.documentElement.clientWidth < 900) {
    style = { width: "90vw", height: "70vh", zIndex: "-1" };
  }
  return (
    <div className="adhyayaa_app">
      <div className="appText">
        <h1>hello world</h1>
        <h3>
          Here you can download 1080p x264 UHD, 1080p 60FPS, 1080p x265 10Bit,
          4k HDR, 4k 2160p SDR 3D Movies through Google Drive Links.
          High-quality movies with the best quality options and maximum
          bitrates. We also focus on providing the best quality audio available.
          4k HEVC Dolby Atmos is one of the best High-quality formats with low
          file sizes.
        </h3>
      </div>
      <Canvas style={style}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} position={(5, 10, 10)} />
        <Suspense fallback="null">
          <Mobile></Mobile>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Adhyaaya_app;
