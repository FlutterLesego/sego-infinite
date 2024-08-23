import LogoWhiteImg from "../../../assets/images/logo/logo-light.png";
function FooterBottom() {
  return (
    <>
      <div className="col-lg-6">
        <div className="aximo-footer-logo">
          <a href="">
            <img
              src={LogoWhiteImg}
              alt="Logo"
              style={{
                height: "5rem",
                alignItems: "center",
                alignContent: "center",
              }}
            />
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="aximo-copywright one">
          <p> &copy; Copyright 2024, All Rights Reserved by Sego Infinite</p>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
