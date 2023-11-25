import Announcement from '@/modules/Announcement';
import QuickLinks from '@/modules/QuickLinks';
import News from '@/modules/News';
import ImageGallery from '@/modules/ImageGallery';
import VideoGallery from '@/modules/VideoGallery';

import './style.scss';
import DocumentGallery from '@/modules/DocumentGallery';
import Events from '@/modules/Events';
import HowDoI from '@/modules/HowDoI';

function Home() {
  return (
    <div className="container-home">
      <div className="right-home">
        <Announcement />
        <News />
        <ImageGallery />
        <VideoGallery />
        <DocumentGallery />
      </div>
      <div className="left-home">
        <QuickLinks />
        <Events />
        <HowDoI />
      </div>
    </div>
  );
}

export default Home;
