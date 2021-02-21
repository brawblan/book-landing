import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import fetch from 'isomorphic-unfetch'
import styles from '../styles/Subscribe.module.css'

const Subscribe = ({ onClick }) => {
  const [nameTyped, setNameTyped] = useState(false)
  const [emailTyped, setEmailTyped] = useState(false)
  const { handleSubmit } = useForm()

  const subscribe = async (data) => {
    const { first_name, email } = data
    const res = await fetch(`/api/subscribe?email=${email}&first_name=${first_name}`)
    if (!res.ok) {
      throw "There was an error subscribing to the list."
    }
  };

  const onSubmit = (data) => {
    subscribe(data)
    onClick()
  }

  return (
    <div className={styles.card}>
      <div className={styles.subscribeMessage}>
        <h2>
          SUBSCRIBE HERE
        </h2>
        <p>
          to get updates and free books!
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputBox}>
          <input 
            onChange={({ target: { value }}) => value.length ? setNameTyped(true) : setNameTyped(false)} 
            type="text" 
            name="first_name"
            placeholder="First Name"
            required
          />
          <div 
            className={!nameTyped ? styles.nameIsTyped : `${styles.nameIsTyped} ${styles.isTyped}`}
          >&#10003;</div>
        </div>
        <div className={styles.inputBox}>
          <input 
            onChange={({ target: { value }}) => value.length ? setEmailTyped(true) : setEmailTyped(false)} 
            type="email" 
            name="email"
            placeholder="Your e-mail here"
            required
          /> 
          <div 
            className={!emailTyped ? styles.emailIsTyped : `${styles.emailIsTyped} ${styles.isTyped}`}
          >&#10003;</div>
        </div>
        <button 
          className={nameTyped && emailTyped ? `${styles.disabledBtn} ${styles.enabledBtn}` : styles.disabledBtn} 
          type="submit" 
          disabled={!nameTyped && !emailTyped}
        >SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Subscribe
