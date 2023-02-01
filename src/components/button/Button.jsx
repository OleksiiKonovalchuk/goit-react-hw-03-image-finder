import React from 'react';
import css from './button.module.scss';
const Button = loadMore => {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more
    </button>
  );
};

export default Button;
