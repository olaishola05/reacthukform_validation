"use client";

import React from 'react'
import styles from './form.module.scss'
import { schema, ValidationSchemaType } from '@/utils/schema';
import { useFormWithValidation } from '@/hooks/useFormHook';

export default function NewForm() {
  const { register, handleSubmit, errors, reset, isSubmitting } = useFormWithValidation(schema);

  const onSubmit = async (data: ValidationSchemaType) => {
    try {
      // simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className={styles.form_main} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">
        Username:
        <input type="text" placeholder='username goes here...' {...register('username')} className={errors.username && styles.error_input} />
        {errors.username && (
          <span className={styles.error}>{errors.username?.message}</span>
        )}
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" placeholder='email goes here...' {...register('email')} className={errors.email && styles.error_input} />
        {errors.email && (
          <span className={styles.error}>{errors.email?.message}</span>
        )}
      </label>


      <label htmlFor="password">
        Password:
        <input type="password" placeholder='password goes here...' {...register('password')} className={errors.password && styles.error_input} />
        {errors.password && (
          <span className={styles.error}>{errors.password?.message}</span>
        )}
      </label>

      <label htmlFor="confirmPassword">
        Confirm Password:
        <input type="password" placeholder='Confirm password' {...register('confirmPassword')} className={errors.confirmPassword && styles.error_input} />
        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword?.message}</span>
        )}
      </label>
      <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
    </form>
  )
}
