// import React, { Component } from 'react';
import React, { Component } from 'react';
import css from './image-gallery.module.css';
import ImageGalleryItem from './image-gallery-item/ImageGalleryItem';
class ImageGallery extends Component {
  componentDidUpdate() {}
  render() {
    const { hits } = this.props;
    return (
      <ul className={css.gallery}>
        <ImageGalleryItem hits={hits} />
      </ul>
    );
  }
}
export default ImageGallery;
