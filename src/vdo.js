import "./vdo.css";
import "boxicons";
function Vdo({ close, setClose }) {
  console.log(close);
  if (!close) {
    return (
      <div className="vdo">
        <box-icon
          name="collapse-alt"
          color="#ffffff"
          onClick={() => {
            console.log(close);
            setClose(!close);
            console.log(close);
          }}
        ></box-icon>
        <video controls>
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
