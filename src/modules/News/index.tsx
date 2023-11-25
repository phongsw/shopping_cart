import { Link } from 'react-router-dom';
import imgGallery from '@/assets/img/image_gallery.png';
import arrowIc from '@/assets/img/arrow_icon.png';

import './style.scss';

const News = () => {
  return (
    <div className="cover-news">
      <h2>News</h2>
      <ul className="main-news">
        <li>
          <Link to="/">
            <img src={imgGallery} alt="gallery 1" />
          </Link>
          <div className="right-content">
            <h3>New Learning System Is Live</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut
              labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et
              accusam et justo duo
            </p>
            <div className="sub-time">
              <span>05/Jan/2021</span>
            </div>
          </div>
        </li>
        <li>
          <Link to="/">
            <img src={imgGallery} alt="gallery 1" />
          </Link>
          <div className="right-content">
            <h3>New Learning System Is Live</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut
              labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et
              accusam et justo duo
            </p>
            <div className="sub-time">
              <span>05/Jan/2021</span>
            </div>
          </div>
        </li>
        <li>
          <Link to="/">
            <img src={imgGallery} alt="gallery 1" />
          </Link>
          <div className="right-content">
            <h3>New Learning System Is Live</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut
              labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et
              accusam et justo duo
            </p>
            <div className="sub-time">
              <span>05/Jan/2021</span>
            </div>
          </div>
        </li>
        <li>
          <Link to="/">
            <img src={imgGallery} alt="gallery 1" />
          </Link>
          <div className="right-content">
            <h3>New Learning System Is Live</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitrinvidunt ut
              labore et dolore aaliquya erat, sed diam voluptuaaa vero eos et
              accusam et justo duo
            </p>
            <div className="sub-time">
              <span>05/Jan/2021</span>
            </div>
          </div>
        </li>
      </ul>
      <button className="view-more">
        <span>View More</span>
        <img src={arrowIc} alt="icon" />
      </button>
    </div>
  );
};

export default News;
