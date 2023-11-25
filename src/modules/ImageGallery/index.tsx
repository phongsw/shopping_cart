import { Link } from 'react-router-dom';
import imgGallery from '@/assets/img/image_gallery.png';
import arrowIc from '@/assets/img/arrow_icon.png';

import './style.scss';

const ImageGallery = () => {
  return (
    <div className="cover-img-gallery">
      <h2>Image Gallery</h2>
      <ul className="main-img-gallery">
        <li>
          <Link to="/">
            <img src={imgGallery} alt="gallery 1" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={imgGallery} alt="gallery 1" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={imgGallery} alt="gallery 1" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={imgGallery} alt="gallery 1" />
          </Link>
        </li>
      </ul>
      <button className="view-more">
        <span>View More</span>
        <img src={arrowIc} alt="icon" />
      </button>
    </div>
  );
};

export default ImageGallery;
