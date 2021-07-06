import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ Data }) => {
  const galleryData = Data.map((obj) => (
    <li key={obj.id}>
      <div className="image-overlay">
        <img src={obj.img} alt={obj.title} className="images" />
        <div className="image-title">
          <span>
            <FontAwesomeIcon icon={faHeart} />
            &nbsp;
            {obj.likes}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            &nbsp;
            {obj.comments}
          </span>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="gallery-wrapper">
      <ul className="image-gallery">{galleryData}</ul>
    </div>
  );
};
export default Gallery;
