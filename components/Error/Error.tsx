'use client';

import css from './Error.module.css';

const Error = () => {
  return <p className={css.text}>Could not fetch campers. Please try again.</p>;
};

export default Error;
