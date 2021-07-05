// case 1
//const Gallery = (props) => {
//   console.log(props.Data);
// case 2
// const Gallery = ({ Data }) => {
//   console.log(Data);
// case 3
// const Gallery = (props) => {
//   const { Data } = props;
//   console.log(Data);
//   return <div className="gallery-wrapper"></div>;
// };
// export default Gallery;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const Gallery = ({ Data }) => {
  const galleryData = Data.map((obj) => (
    <div className="gallery-wrapper">
      <li key={obj.id} className="image-gallery">
        <div className="image-poster">
          <img src={obj.img} alt={obj.title} className="image" />
        </div>
        <div className="image-poster-overlay">
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
    </div>
  ));

  return <ul className="gallery">{galleryData}</ul>;
};
export default Gallery;
