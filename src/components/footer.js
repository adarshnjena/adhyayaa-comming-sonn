import "../style/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Contact Us</h2>
      <div className="social_media">
        <box-icon size="sm" color="white" type="logo" name="gmail"></box-icon>
        <box-icon size="sm" color="white" name="youtube" type="logo"></box-icon>
        <box-icon
          size="sm"
          color="white"
          name="linkedin"
          type="logo"
        ></box-icon>
        <box-icon
          size="sm"
          color="white"
          name="instagram"
          type="logo"
        ></box-icon>
      </div>
    </div>
  );
};

export default Footer;
