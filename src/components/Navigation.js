import IGLogo from "../img/iglogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <a className="social">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a className="social">
          <FontAwesomeIcon icon={faPaperPlane} />
        </a>
        <a className="social">
          <FontAwesomeIcon icon={faCompass} />
        </a>
        <a className="social">
          <FontAwesomeIcon icon={faHeart} />
        </a>

        <a className="social">
          <img
            alt="profile-image"
            style={{
              borderRadius: "50%",
              border: "1px solid black",
              width: "22px",
              height: "22px",
            }}
            src="./img/me.jpg"
            className="profile-image"
          />
        </a>
      </div>
    </div>
  );
};
export default Navigation;
