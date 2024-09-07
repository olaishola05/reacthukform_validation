'use client'

import React, { useRef, useState } from 'react'
import { passwordTips, PasswordTip } from '@/utils/tips';

export default function Register() {
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [criteria, setCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const handleFocus = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'block';
    }
  };

  const handleBlur = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none';
    }
  };

  const handlePasswordChange = () => {
    if (!passwordRef.current) return;

    const value = passwordRef.current.value
    const newCriteria = {
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    };
    setCriteria(newCriteria);
  };

  return (
    <div className='flex justify-center mt-3'>
      <form className='flex flex-col gap-2 w-7/12 justify-center'>
        <label htmlFor="name" className='flex flex-col gap-1'>
          Your Name
          <input
            type="text"
            name='name'
            placeholder='John Doe'
            className='border border-gray-200 rounded p-2 focus:outline-none focus:border-black md:p-3 focus:text-black'
          />

        </label>
        <label htmlFor="email" className='flex flex-col gap-1'>
          Your Email
          <input
            type="email"
            name='email'
            placeholder='example@gmail.com'
            className='border border-gray-200 rounded p-2 focus:outline-none focus:border-black md:p-3 text-black'
          />
        </label>
        <label htmlFor="password" className='flex flex-col gap-1 relative'>
          Password
          <input
            ref={passwordRef}
            type="password"
            name='password'
            placeholder='********'
            className='border border-gray-200 rounded p-2 focus:outline-none focus:border-black md:p-3'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handlePasswordChange}
          />
        </label>
        <div ref={tooltipRef} style={{ display: "none" }}>
          <p className='text-sm text-black'>Password must contain:</p>
          <ul className='p-3'>
            {passwordTips.map((tip: PasswordTip, index) => <li key={index} className='text-sm text-black'
              style={{ color: criteria[tip.key as keyof typeof criteria] ? 'green' : 'red' }}
            >{tip.text} {criteria[tip.key as keyof typeof criteria] && <span>✔️</span>}</li>)}
          </ul>
        </div>

        <label htmlFor="confirmPassword" className='flex flex-col gap-1 relative'>
          Confirm Password
          <input
            type="password"
            name='confirmPassword'
            placeholder='********'
            className='border border-gray-200 rounded p-2 focus:outline-none focus:border-black md:p-3'
          />
        </label>
        <button type='submit' className='px-3 py-2 rounded-md bg-black text-white w-max self-center'>
          Register
        </button>
      </form>
    </div>
  )
}
