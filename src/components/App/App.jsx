import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import axios from 'axios';
// import ContactForm from '../ContactForm/ContactForm';
// import Filter from '../Filter/Filter';
// import ContactList from '../ContactList/ContactList';
import Modal from '../Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import 'react-toastify/dist/ReactToastify.css';
import getPicturesPixabayApi from '../../services/pixabay-api';

// import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
// const KEY_API = '23134758-68ab0efee1477745fc8aff6a6';

// axios.defaults.baseURL = BASE_URL;
// let params = `&q=${query}&page=${page}&per_page=${perPage}&key=${KEY_API}`;

// const api = {
//   getPicturesPixabayApi,
// }

// export default api

// class App extends Component {
//   state = {
//     // query: 'nature',
//     // page: 1,
//     // perPage: 12,

//     searchValue: '',
//     showModal: false,
//   };

//   componentDidMount() {}
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (this.state.contacts !== prevState.contacts) {
//   //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   //   }
//   // }

//   // deleteContact = contactId => {
//   //   this.setState(prewState => ({
//   //     contacts: prewState.contacts.filter(contact => contact.id !== contactId),
//   //   }));
//   // };

//   handleFormSubmit = e => {
//     e.preventDefault();
//     console.log(this.state.searchValue);

//     // const check = this.state.contacts.some(
//     //   contact => contact.name.toLowerCase() === contactic.name.toLowerCase(),
//     // );

//     // check
//     //   ? alert(`${contactic.name} is already in contacts`)
//     //   : this.setState(({ contacts }) => ({
//     //       contacts: [contactic, ...contacts],
//     //     }));
//   };

//   handleChange = e => {
//     this.setState({ searchValue: e.target.value });
//   };

//   // getDisplayContacts = () => {
//   //   const { contacts, filter } = this.state;
//   //   const normalFilter = filter.toLowerCase();

//   //   return contacts.filter(contact =>
//   //     contact.name.toLowerCase().includes(normalFilter),
//   //   );
//   // };

//   // Передать на onClick для открытия или закрытия//
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;
//     // const displayContacts = this.getDisplayContacts();

//     return (
//       <div>
//         <Searchbar
//           onSubmit={this.handleFormSubmit}
//           onChange={this.handleChange}
//         />
//         {/* <ImageGallery/> */}
//         {showModal && <Modal onClose={this.toggleModal} />}
//       </div>
//     );
//   }
// }

class App extends Component {
  state = {
    query: '',

    showModal: false,
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  // componentDidMount() {
  //     fetch('https://pixabay.com/api/?image_type=photo&orientation=horizontal&key=23134758-68ab0efee1477745fc8aff6a6&q=nature').then(res => res.json()).then(arr => arr.hits).then(image => this.setState({image}))
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <Searchbar
          onSubmit={this.handleFormSubmit}
          // onChange={this.handleChange}
        />
        <ImageGallery query={this.state.query} />
        {/* {this.state.image &&
                    <div>
                        {this.state.image.map((image) =>
                            <img key={image.id}
                                src={image.webformatURL}
                                alt={image.tags}
                                className="ImageGalleryItem-image"
                            />)}
                    
                    </div>} */}
        {showModal && <Modal onClose={this.toggleModal} />}
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export default App;
