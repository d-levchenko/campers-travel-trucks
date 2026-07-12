'use client';

import SvgIcon from '@/components/SvgIcon/SvgIcon';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { sendBookingRequest } from '@/lib/api/campersApi';
import {
  BookingRequest,
  CamperDetails,
  BookingResponse,
} from '@/types/campers';
import toast from 'react-hot-toast';

import css from './DetailsRightBottomSide.module.css';

interface DetailsRightBottomSideProps {
  camperId: CamperDetails;
}

const DetailsRightBottomSide = ({ camperId }: DetailsRightBottomSideProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const mutation = useMutation({
    mutationFn: (booking: BookingRequest) =>
      sendBookingRequest(camperId.id, booking),
    onSuccess: (message: BookingResponse) => {
      toast.success(message.message, {
        duration: 3000,
        position: 'top-right',
      });
    },
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

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    mutation.mutate({ name, email });

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
            className={`${css.input} ${css.nameInput}`}
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
            type="email"
            className={`${css.input} ${css.emailInput}`}
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
