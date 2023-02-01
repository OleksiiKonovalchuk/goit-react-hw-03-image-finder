import React, { Component } from 'react';
import css from './imageGalleryItem.module.scss';
class ImageGalleryItem extends Component {
  render() {
    const { hits } = this.props;
    if (hits.length) {
      const items = hits.map(({ id, webformatURL, largeImageURL, tag }) => {
        return (
          <li className={css.item} key={id}>
            <img
              className={css.itemImage}
              alt={tag}
              src={webformatURL}
              srcbig={largeImageURL}
            />
          </li>
        );
      });
      return items;
    }
  }
}
export default ImageGalleryItem;
