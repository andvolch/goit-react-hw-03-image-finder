import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Modal from '../Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    query: '',
    showModal: false,
    tags: '',
    largeImageURL: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImageClick = (tags, largeImageURL) => {
    this.setState({ tags, largeImageURL });
    this.toggleModal();
  };

  render() {
    const { showModal, tags, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar
          onSubmit={this.handleFormSubmit}
          // onChange={this.handleChange}
        />
        <ImageGallery
          query={this.state.query}
          onImageClick={this.onImageClick}
        />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        )}
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export default App;
