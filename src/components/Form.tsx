import React from 'react'
import styles from './form.module.scss'

const Form = () => {
  return (
    <form className={styles.form_main}>
      <label htmlFor="username">
        Username:
        <input type="text" name="username" placeholder='username goes here...' />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" placeholder='email goes here...'  />
      </label>

      <label htmlFor="password">
        Password:
        <input type="password" name="password" placeholder='password goes here...'  />
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Form