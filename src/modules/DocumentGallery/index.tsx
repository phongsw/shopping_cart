import arrowIc from '@/assets/img/arrow_icon.png';
import word from '@/assets/img/word.png';
import powerpoint from '@/assets/img/pp.png';
import report from '@/assets/img/report.png';

import './style.scss';
import DocumentGalleryItem from './DocumentList';

const items = [
  { src: word, alt: 'word 1', policy: 'Policy 1' },
  { src: word, alt: 'word 2', policy: 'Policy 2' },
  { src: word, alt: 'word 3', policy: 'Policy 3' },
  { src: word, alt: 'word 4', policy: 'Policy 4' },
];

const itemsP = [
  { src: powerpoint, alt: 'powerpoint 1', policy: 'Policy 1' },
  { src: powerpoint, alt: 'powerpoint 2', policy: 'Policy 2' },
  { src: powerpoint, alt: 'powerpoint 3', policy: 'Policy 3' },
  { src: powerpoint, alt: 'powerpoint 4', policy: 'Policy 4' },
];

const reportData = [
  { src: report, alt: 'report 1', policy: 'Policy 1' },
  { src: report, alt: 'report 2', policy: 'Policy 2' },
  { src: report, alt: 'report 3', policy: 'Policy 3' },
  { src: report, alt: 'report 4', policy: 'Policy 4' },
];

const DocumentGallery = () => {
  return (
    <div className="cover-document-gallery">
      <h2>Document Gallery</h2>
      <div className="detail-document-list">
        <div className="document document__policy">
          <h3>Policy</h3>
          <ul className="main-document-gallery">
            {items.map((item) => (
              <DocumentGalleryItem key={item.policy} {...item} />
            ))}
          </ul>
          <button className="view-more">
            <span>View More</span>
            <img src={arrowIc} alt="icon" />
          </button>
        </div>
        <div className="document document__sop">
          <h3>SOP</h3>
          <ul className="main-document-gallery">
            {items.map((item) => (
              <DocumentGalleryItem key={item.policy} {...item} />
            ))}
          </ul>
          <button className="view-more">
            <span>View More</span>
            <img src={arrowIc} alt="icon" />
          </button>
        </div>
        <div className="document document__corporate">
          <h3>Corporate Template</h3>
          <ul className="main-document-gallery">
            {items.map((item) => (
              <DocumentGalleryItem key={item.policy} {...item} />
            ))}
          </ul>
          <button className="view-more">
            <span>View More</span>
            <img src={arrowIc} alt="icon" />
          </button>
        </div>
        <div className="document document__report">
          <h3>Report</h3>
          <ul className="main-document-gallery">
            {reportData.map((item) => (
              <DocumentGalleryItem key={item.policy} {...item} />
            ))}
          </ul>
          <button className="view-more">
            <span>View More</span>
            <img src={arrowIc} alt="icon" />
          </button>
        </div>
        <div className="document document__slider">
          <h3>Slider</h3>
          <ul className="main-document-gallery">
            {itemsP.map((item) => (
              <DocumentGalleryItem key={item.policy} {...item} />
            ))}
          </ul>
          <button className="view-more">
            <span>View More</span>
            <img src={arrowIc} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentGallery;
