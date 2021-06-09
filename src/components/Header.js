import IGLogo from "../img/iglogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          {/* <i className="fa fa-compass" size="" color="green" /> */}
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          {/* <i className="fa fa-heart" /> */}
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          {/* <i className="fa fa-user-circle" /> */}
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
};
export default Header;
