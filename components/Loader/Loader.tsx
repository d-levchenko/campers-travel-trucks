import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <span className={css.loader}></span>

        <h2 className={css.title}>Loading tracks...</h2>
        <p className={css.description}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
};

export default Loader;
