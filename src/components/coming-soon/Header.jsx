import Logo from "../../assets/images/logo/logo-light.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="aximo-logo-section">
      <div className="container" style={{ "background-color": "#000000" }}>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: "5rem",
              alignItems: "center",
              alignContent: "center",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
