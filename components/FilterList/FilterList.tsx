import SvgIcon from '../SvgIcon/SvgIcon';
import css from './FilterList.module.css';

const FilterList = () => {
  return (
    <aside className="rounded-[20px] bg-(--inputs) p-6 self-start">
      <form>
        <div className="flex flex-col gap-3">
          <label className={css.locationLabel} htmlFor="location">
            Location
          </label>

          <div className="relative">
            <SvgIcon
              name="location"
              width={20}
              height={20}
              className="fill-(--main) absolute top-4.5 left-5 flex justify-center items-center"
            />
            <label htmlFor="location">
              <input
                type="text"
                name="location"
                id="location"
                className={css.locSelect}
                placeholder="Enter your location"
              />
            </label>
          </div>
        </div>

        <h3 className={css.filtersText}>Filters</h3>

        <div className="flex gap-6 flex-col mb-12">
          <fieldset>
            <legend className={css.legend}>Camper form</legend>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="form"
                value="alcove"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Alcove</span>
            </label>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="form"
                value="panel_van"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Panel Van</span>
            </label>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="form"
                value="integrated"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Integrated</span>
            </label>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="form"
                value="semi_integrated"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Semi Integrated</span>
            </label>
          </fieldset>

          <fieldset>
            <legend className={css.legend}>Engine</legend>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="engine"
                value="diesel"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Diesel</span>
            </label>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="engine"
                value="petrol"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Petrol</span>
            </label>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="engine"
                value="hybrid"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Hybrid</span>
            </label>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="engine"
                value="electric"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Electric</span>
            </label>
          </fieldset>

          <fieldset>
            <legend className={css.legend}>Transmission</legend>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="transmission"
                value="automatic"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Automatic</span>
            </label>

            <label className={css.labelRadio}>
              <input
                type="radio"
                name="transmission"
                value="manual"
                className={css.radio}
              />

              <span className={css.iconWrapper}>
                <SvgIcon
                  className={css.circle}
                  name="circle"
                  width={24}
                  height={24}
                />
                <SvgIcon
                  className={css.dot}
                  name="dot"
                  width={14}
                  height={14}
                />
              </span>

              <span>Manual</span>
            </label>
          </fieldset>
        </div>

        <div className="flex flex-col gap-4">
          <button className={css.searchBtn}>Search</button>
          <button className={css.clearBtn}>
            <SvgIcon name="close" width={24} height={24} />
            Clear filters
          </button>
        </div>
      </form>
    </aside>
  );
};

export default FilterList;
