import React from 'react'
import styles from '../styles/Subscribe.module.css'

const Subscribe = () => {
  return (
    <div className={styles.card}>
      <h2>Subscribe here</h2>
      <p>to get updates and free books</p>
      <form action="">
        <label htmlFor="">FIRST NAME</label>
        <div className={styles.checkMark}>
          <input className='input' type="text" name='firstName' placeholder='First Name' />
          <div className={styles.checkedTrueActive}>&#10003;</div>
        </div>
        <label htmlFor="">E-MAIL</label>
        <div className={styles.checkMark}>
          <input type="email" placeholder='Your e-mail here' /> 
          <div className={styles.checkedTrue}>&#10003;</div>
        </div>
        <button type="email">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Subscribe