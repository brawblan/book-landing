import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/Subscribe.module.css'

const Subscribe = () => {
  const [nameTyped, setNameTyped] = useState(false)
  const [emailTyped, setEmailTyped] = useState(false)
  const { handleSubmit, register } = useForm()

  const handleNameChange = ({ target: { value } }) => {
    if (value !== '') {
      setNameTyped(true)
    } else {
      setNameTyped(false)
    }
  }
  const handleEmailChange = ({ target: { value } }) => {
    if (value !== '') {
      setEmailTyped(true)
    } else {
      setEmailTyped(false)
    }
  }

  const subscribe = async ({ email }) => {
    const res = await fetch(`/api/subscribe?email=${email}`)
    if (!res.ok) {
      throw "There was an error subscribing to the list."
    }
  };

  const onSubmit = (data) => subscribe(data)

  return (
    <div className={styles.card}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">FIRST NAME</label> 
        <div className={styles.inputBox}>
          <input 
            onChange={handleNameChange} 
            type="text" 
            name="name"
            ref={register()}
            placeholder="First Name "
          />
          <div 
            className={nameTyped === false ? 
              styles.nameIsTyped : 
              [styles.nameIsTyped, styles.isTyped].join(' ')}
          >&#10003;</div>
        </div>
        <label htmlFor="">E-Mail</label> 
        <div className={styles.inputBox}>
          <input 
            onChange={handleEmailChange} 
            type="email" 
            name="email"
            ref={register({
              required: "Email is required.",
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please enter a valid email."
            })}
            placeholder="Your e-mail here"
          /> 
          <div 
            className={emailTyped === false ? 
              styles.emailIsTyped : 
              [styles.emailIsTyped, styles.isTyped].join(' ')}
          >&#10003;</div>
        </div>
        <button 
          className={nameTyped && emailTyped ? 
            [styles.disabledBtn, styles.enabledBtn].join(' ') : 
            styles.disabledBtn} 
          type="submit" 
          disabled={nameTyped && emailTyped ? 
            false : 
            true}
        >SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Subscribe
