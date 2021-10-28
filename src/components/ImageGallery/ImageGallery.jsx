import { Component } from 'react';

import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import getPicturesPixabayApi from '../../services/pixabay-api';

import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    status: Status.IDLE,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });
      const { page } = this.state;

      getPicturesPixabayApi(nextQuery, page)
        .then(({ data: { hits } }) =>
          this.setState({ images: hits, status: Status.RESOLVED }),
        )
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  nextPage = () => this.setState(this.state.page + 1);

  render() {
    const { images } = this.state;
    const { onImageClick } = this.props;
    const { status } = this.state;

    if (status === Status.IDLE) {
      return <h2 className={s.title}>Enter name image</h2>;
    }

    if (status === Status.PENDING) {
      return <Loader />;
    }

    if (status === Status.REJECTED) {
      return <h2 className={s.error}>ERROR</h2>;
    }

    if (status === Status.RESOLVED) {
      return (
        <>
          <ul className={s.imageGallery}>
            {images.map(({ id, tags, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={onImageClick}
              />
            ))}
          </ul>
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  getPicturesPixabayApi: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
