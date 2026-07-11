'use client';

import SvgIcon from '@/components/SvgIcon/SvgIcon';
import { useState } from 'react';

import css from './DetailsRightBottomSide.module.css';

const DetailsRightBottomSide = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const validate = () => {
    const newErrors = {
      name: '',
      email: '',
    };

    if (!name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = 'Name should contain only letters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email.';
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    if (errors.name) {
      setErrors(prev => ({
        ...prev,
        name: '',
      }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (errors.email) {
      setErrors(prev => ({
        ...prev,
        email: '',
      }));
    }
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setName('');
    setEmail('');
  };

  return (
    <form
      className={`${css.form} ${errors.name || errors.email ? css.errorForm : ''}`}
      onSubmit={handleSubmit}>
      <h2 className={css.title}>Book your campervan now</h2>

      <p className={css.description}>
        Stay connected! We are always ready to help you.
      </p>

      <div className="flex flex-col gap-3.5">
        <div className={`${css.field} ${errors.name ? css.error : ''}`}>
          <input
            id="name"
            type="text"
            className={css.input}
            value={name}
            onChange={handleNameChange}
            placeholder=" "
          />

          <label htmlFor="name" className={css.label}>
            Name*
          </label>

          {errors.name && (
            <>
              <SvgIcon
                name="warning"
                width={24}
                height={24}
                className={css.errorIcon}
              />

              <p className={css.errorText}>{errors.name}</p>
            </>
          )}
        </div>

        <div className={`${css.field} ${errors.email ? css.error : ''}`}>
          <input
            id="email"
            className={css.input}
            value={email}
            onChange={handleEmailChange}
            placeholder=" "
          />

          <label htmlFor="email" className={css.label}>
            Email*
          </label>

          {errors.email && (
            <>
              <SvgIcon
                name="warning"
                width={24}
                height={24}
                className={css.errorIcon}
              />

              <p className={css.errorText}>{errors.email}</p>
            </>
          )}
        </div>
      </div>

      <button className={css.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default DetailsRightBottomSide;
