import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit, onChange }) => (
  <header className={s.searchbar}>
    <form className={s.searchForm}>
      <button type="submit" className={s.searchForm__button} onClick={onSubmit}>
        <span className={s.searchForm__label}>Search images and fotos</span>
      </button>

      <input
        className={s.searchForm__input}
        type="text"
        name="search"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
        onChange={onChange}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
