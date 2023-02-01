import { Component } from 'react';
import css from './searchForm.module.scss';
class SearchForm extends Component {
  state = {
    search: null,
  };
  onSearchInput = e => {
    const value = e.currentTarget.value;
    console.log(value);
    this.setState({ search: value });
  };
  render() {
    const { sumbitFn } = this.props;
    const { search } = this.state;
    return (
      <form
        className={css.searchForm}
        onSubmit={e => {
          e.preventDefault();
          sumbitFn(search).then(data => console.log(data));
        }}
      >
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.onSearchInput}
        />
      </form>
    );
  }
}
export default SearchForm;
