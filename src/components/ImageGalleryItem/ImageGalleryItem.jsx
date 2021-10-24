// import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL }) => (
  <li className={s.imageGalleryItem}>
    <img src={webformatURL} alt="image" className={s.ImageGalleryItem__image} />
  </li>
);

// ImageGalleryItem.propTypes = {

// }

export default ImageGalleryItem;
