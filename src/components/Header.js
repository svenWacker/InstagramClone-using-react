import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const compass = <FontAwesomeIcon icon={faCompass} />;
  const home = <FontAwesomeIcon icon={faHome} />;
  const paperPlane = <FontAwesomeIcon icon={faPaperPlane} />;
  const heart = <FontAwesomeIcon icon={faHeart} />;
  return (
    <div className="menu">
      <span className="insta">Instagram</span>

      <input className="input" type="text" placeholder=" search" />
      <div className="icons">
        <span>{home} </span>

        <span> {paperPlane}</span>
        <span>{compass} </span>

        <span>{heart}</span>

        <span className="profilPhoto">
          <img src="./img/miya.jpg" />
        </span>
      </div>
    </div>
  );
};
export default Menu;
