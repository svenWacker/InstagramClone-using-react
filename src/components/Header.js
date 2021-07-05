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
          <div className="row">
            <div className="space-wrapper">
              <div className="space">
                <h1>swfun75</h1>
              </div>
              <div className="space">
                <button className="button-follow " type="submit">
                  Follow
                </button>
              </div>
              <div className="space">
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
              </div>
            </div>
          </div>
          <div className="row">
            <h3>18 posts </h3>
            <h3>77 followers </h3>
            <h3>136 following </h3>
          </div>
          <div className="row">
            <h2>Sven Wacker</h2>
          </div>
          <div className="row">
            <h3>Engineer, Developer and Artist</h3>
          </div>
        </div>
      </div>
      <div className="gallery-menu">
        <a href="/"> {list}&nbsp;POSTS</a>

        <a href="/"> {video}&nbsp;REELS</a>

        <a href="/"> {tv}&nbsp;IGTV</a>

        <a href="/"> {tagg}&nbsp;TAGGED</a>
      </div>
    </div>
  );
};
export default Header;
