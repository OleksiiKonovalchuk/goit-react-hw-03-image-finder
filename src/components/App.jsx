import React, { Component } from 'react';
import css from './App.module.css';
import { searchImages } from './api/API';
import Searchbar from './search-bar/Searchbar';
import SearchForm from './search-bar/searchForm/SearchForm';
class App extends Component {
  state = {
    items: [],
    loading: false,
    modalActive: false,
    page: 1,
  };
  dataCatcher = data => {
    this.setState({ items: data });
  };
  render() {
    return (
      <div className={css.App}>
        <Searchbar>
          <SearchForm sumbitFn={searchImages} />
        </Searchbar>
      </div>
    );
  }
}
export default App;
