import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';
// import 'react-toastify/dist/ReactToastify.css';

// query

// const Searchbar = ({ onSubmit, onChange }) => (
//   <header className={s.searchbar}>
//     <form className={s.searchForm}>
//       <button type="submit" className={s.searchForm__button} onClick={onSubmit}>
//         <span className={s.searchForm__label}>Search images and fotos</span>
//       </button>

//       <input
//         className={s.searchForm__input}
//         type="text"
//         name="search"
//         autocomplete="off"
//         autofocus
//         placeholder="Search images and photos"
//         onChange={onChange}
//       />
//     </form>
//   </header>
// );

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      return toast.error('Enter a normal query!');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handlEqueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchForm__button}>
            <span className={s.searchForm__label}>Search images and fotos</span>
          </button>
          <input
            className={s.searchForm__input}
            type="text"
            name="search"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handlEqueryChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
