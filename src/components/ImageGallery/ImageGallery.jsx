import { Component } from 'react';

// import PropTypes from 'prop-types';

// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Button from '../Button/Button';
// import API from '../../services/pixabay-api';

import s from './ImageGallery.module.css';

// const Status = {
//     IDLE: 'idle',
//     PENDING: 'pending',
//     RESOLVED: 'resolved',
//     REJECTED: 'rejected',
//   };

class ImageGallery extends Component {
  state = {};

  render() {
    // return (
    //

    // )
    const { status } = this.state;
    // const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>enter what you want to search</div>;
    }

    if (status === 'pending') {
      // return <Loader />;
      return;
    }

    if (status === 'rejected') {
      return <div>Error</div>;
    }

    if (status === 'resolved') {
      return <ul className={s.imageGallery}>{/* <ImageGalleryItem />; */}</ul>;
    }
  }
}

// / const ImageGallery = () =>
//     <ul className={s.imageGallery}>
//         <li></li>
//     </ul>

// ImageGallery.propTypes = {

// }

export default ImageGallery;
