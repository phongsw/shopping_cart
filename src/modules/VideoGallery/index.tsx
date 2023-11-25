import { Link } from 'react-router-dom';
import video from '@/assets/img/video.png';
import arrowIc from '@/assets/img/arrow_icon.png';
import playIc from '@/assets/img/play.png';

import './style.scss';

const VideoGallery = () => {
  return (
    <div className="cover-video-gallery">
      <h2>Video Gallery</h2>
      <ul className="main-video-gallery">
        <li>
          <Link to="/">
            <img src={video} alt="gallery 1" />
          </Link>
          <button>
            <img src={playIc} alt="play icon" />
          </button>
        </li>
        <li>
          <Link to="/">
            <img src={video} alt="gallery 1" />
          </Link>
          <button>
            <img src={playIc} alt="play icon" />
          </button>
        </li>
        <li>
          <Link to="/">
            <img src={video} alt="gallery 1" />
          </Link>
          <button>
            <img src={playIc} alt="play icon" />
          </button>
        </li>
        <li>
          <Link to="/">
            <img src={video} alt="gallery 1" />
          </Link>
          <button>
            <img src={playIc} alt="play icon" />
          </button>
        </li>
      </ul>
      <button className="view-more">
        <span>View More</span>
        <img src={arrowIc} alt="icon" />
      </button>
    </div>
  );
};

export default VideoGallery;
