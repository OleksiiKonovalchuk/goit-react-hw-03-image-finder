import React, { Component } from 'react';
import css from './App.module.css';
import { searchImages } from './api/API';
import Searchbar from './search-bar/Searchbar';
import SearchForm from './search-bar/searchForm/SearchForm';
import ImageGallery from './image-gallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';

class App extends Component {
  state = {
    items: [],
    search: null,
    loading: false,
    modalActive: false,
    page: 1,
    total: 0,
  };
  dataCatcher = search => {
    this.setState({
      search,
    });
  };
  pageUpdate = () =>
    this.setState(({ page }) => ({
      page: page + 1,
    }));

  componentDidUpdate(prevProps, prevState) {
    const { page, search, items } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });
      searchImages(search, page)
        .then(({ hits }) => {
          this.setState({ items: [...items, ...hits] });
        })
        .catch(erorr => erorr.message)
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { items, loading } = this.state;
    const { dataCatcher, pageUpdate } = this;
    return (
      <div className={css.App}>
        <Searchbar>
          <SearchForm submitFn={dataCatcher} />
        </Searchbar>
        <ImageGallery hits={items} />
        {loading && <Loader />}
        {Boolean(items.length) && <Button loadMore={pageUpdate} />}
      </div>
    );
  }
}
export default App;
