import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ Data }) => {
  const galleryData = Data.map((obj) => (
    <li key={obj.id}>
      <img src={obj.img} alt={obj.title} className="images" />
      <div className="image-overlay">
        <div className="image-title">
          <FontAwesomeIcon icon={faHeart} />
          {obj.likes}
        </div>
        <div className="image-description">
          <FontAwesomeIcon icon={faComment} />
          {obj.comments}
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
