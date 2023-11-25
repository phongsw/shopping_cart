import { Link } from 'react-router-dom';

interface DocumentGalleryItemProps {
  src?: string;
  alt?: string;
  policy?: string;
}

const DocumentGalleryItem = ({
  src,
  alt,
  policy,
}: DocumentGalleryItemProps) => {
  return (
    <li>
      <Link to="/">
        <img src={src} alt={alt} />
        <span>{policy}</span>
      </Link>
    </li>
  );
};

export default DocumentGalleryItem;
