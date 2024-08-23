import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/logo-light.png";

const LogoImage = styled.img`
  display: flex;
  width: 15rem;
`;

function HeaderLogo() {
  return (
    <div className="brand-logo">
      <Link to="/">
        <LogoImage
          src={Logo}
          alt="Sego infinite logo"
          className="light-version-logo"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
