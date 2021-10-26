import { Component } from 'react';

// import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import Button from '../Button/Button';
import API from '../../services/pixabay-api';

import s from './ImageGallery.module.css';

// const Status = {
//     IDLE: 'idle',
//     PENDING: 'pending',
//     RESOLVED: 'resolved',
//     REJECTED: 'rejected',
//   };

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
  };
  componentDidUpdate(prevProps, prewState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    if (prevQuery !== nextQuery) {
      console.log('update');
      // console.log('prevProps.query', prevProps.query);
      // console.log('this.props.query', this.props.query);

      this.setState({ loading: true });
      // fetch('https://pixabay.com/api/?image_type=photo&orientation=horizontal&key=23134758-68ab0efee1477745fc8aff6a6&q=nature').then(res => res.json()).then(arr => arr.hits).then(images => this.setState({images})).finally(() => this.setState({loading: false}))
      API(nextQuery, 1, 12);

      this.setState({ loading: false });
    }
  }

  render() {
    const { images, loading } = this.state;
    const { query } = this.props;

    return (
      <ul className={s.imageGallery}>
        {loading && <div>Loading ...</div>}
        {!query && <div>Enter name image</div>}
        {/* {images && <li>{images}</li>} */}
        {images && (
          <>
            {images}.map((
            {
              (images.id,
              images.tags,
              images.webformatURL,
              images.largeImageURL)
            }
            ) =>
            <ImageGalleryItem
              key={images.id}
              tags={images.tags}
              webformatURL={images.webformatURL}
              largeImageURL={images.largeImageURL}
            />
            )
          </>
        )}
      </ul>
    );
    // return (
    //

    // )
    // const { status } = this.state;
    // // const { pokemonName } = this.props;

    // if (status === 'idle') {
    //   return <div>enter what you want to search</div>;
    // }

    // if (status === 'pending') {
    //   // return <Loader />;
    //   return;
    // }

    // if (status === 'rejected') {
    //   return <div>Error</div>;
    // }

    // if (status === 'resolved') {
    //   return <ul className={s.imageGallery}>{/* <ImageGalleryItem />; */}</ul>;
    // }
  }
}

// / const ImageGallery = () =>
//     <ul className={s.imageGallery}>
//         <li></li>
//     </ul>

// ImageGallery.propTypes = {

// }

export default ImageGallery;
