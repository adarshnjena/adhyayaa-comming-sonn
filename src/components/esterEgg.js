import "../style/esterEgg.scss";

const EsterEgg = () => {
  return (
    <div className="ester_main">
      <div className="ester_video">
        <video autoPlay muted loop>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/fir-project-93f27.appspot.com/o/bg.mp4?alt=media&token=72215279-a2b7-4377-b553-096fd7049ae7"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="stay_tuned">
        <h1>Stay Tumed</h1>
        <h2>Contact Us</h2>
        <h2>Contact Us</h2>
        <div className="social_media">
          <box-icon size="md" color="white" type="logo" name="gmail"></box-icon>
          <box-icon
            size="md"
            color="white"
            name="youtube"
            type="logo"
          ></box-icon>
          <box-icon
            size="md"
            color="white"
            name="linkedin"
            type="logo"
          ></box-icon>
          <box-icon
            size="md"
            color="white"
            name="instagram"
            type="logo"
          ></box-icon>
        </div>
      </div>
    </div>
  );
};

export default EsterEgg;
