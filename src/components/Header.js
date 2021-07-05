import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileVideo } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const list = <FontAwesomeIcon icon={faListAlt} />;
  const video = <FontAwesomeIcon icon={faFileVideo} />;
  const tv = <FontAwesomeIcon icon={faTv} />;
  const tagg = <FontAwesomeIcon icon={faIdBadge} />;
  return (
    <div className="header-wrapper">
      <div className="content">
        <div className="avatar">
          <img style={{ borderRadius: "50%" }} src="./img/me.jpg" />
        </div>
        <div className="follow">
          <span>
            <h1>swfun75</h1>
            <button className="button-follow " type="submit">
              Follow
            </button>
            <svg
              aria-label="Optionen"
              class="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <circle
                clip-rule="evenodd"
                cx="8"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clip-rule="evenodd"
                cx="24"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clip-rule="evenodd"
                cx="40"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
            </svg>
          </span>
          <span>
            <h3>18 posts </h3>
            <h3>77 followers </h3>
            <h3>136 following </h3>
          </span>
          <span>
            <h2>National Sven Wacker</h2>
          </span>
          <span className="text">
            <span>
              <h4>Engineer, Developer and Artist</h4>
            </span>
          </span>
        </div>
      </div>
      <div className="gallery-menu">
        <span>
          {list}
          <a href="/">POSTS</a>
        </span>
        <span>
          {video}
          <a href="/">REELS</a>
        </span>
        <span>
          {tv}
          <a href="/">IGTV</a>
        </span>
        <span>
          {tagg}
          <a href="/">TAGGED</a>
        </span>
      </div>
    </div>
  );
};
export default Header;
