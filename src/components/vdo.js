function Vdo({ close, setClose }) {
  if (!close) {
    return (
      <div className="vdo">
        <box-icon
          name="collapse-alt"
          color="#ffffff"
          onClick={() => {
            setClose(!close);
            
          }}
        ></box-icon>
        <video
          controls
          autoPlay
          muted
          onEnded={() => {
            setClose(true);
          }}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/web-dev-demo-adarsh.appspot.com/o/vdo.mp4?alt=media&token=b3192092-4051-4f38-8a7e-d73dc87a9229"
            type="video/mp4"
          />
        </video>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Vdo;
