import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClose }) => (
  <li className={s.imageGalleryItem}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      className={s.ImageGalleryItem__image}
      onClick={() => onClose(image.largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
