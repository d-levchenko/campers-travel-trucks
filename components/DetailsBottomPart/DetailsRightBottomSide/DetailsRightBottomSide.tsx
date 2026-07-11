import css from './DetailsRightBottomSide.module.css';

const DetailsRightBottomSide = () => {
  return (
    <form className={css.form}>
      <h2 className={css.title}>Book your campervan now</h2>

      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <div className="flex flex-col gap-3.5">
        <label className={css.label} htmlFor="name">
          <input
            className={css.input}
            type="text"
            id="name"
            placeholder="Name*"
          />
        </label>

        <label className={css.label} htmlFor="email">
          <input
            className={css.input}
            type="email"
            id="email"
            placeholder="Email*"
          />
        </label>
      </div>

      <button className={css.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default DetailsRightBottomSide;
