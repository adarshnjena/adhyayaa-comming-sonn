import EsterEgg from "./components/esterEgg";
import Overlay from "./components/Overlay";
import SoundCloud from "./components/soundCloud";
import "./style/App.scss";

const App = () => {
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/web-dev-demo-adarsh.appspot.com/o/adhyaaya-logo-no%20tagline.png?alt=media&token=b3170f9c-6afb-414a-899a-ef20fa65fcd3";
  return (
    <>
      <Overlay></Overlay>
      <SoundCloud></SoundCloud>
      <img src={logo} className="logo" />
      <EsterEgg></EsterEgg>
    </>
  );
};

export default App;
