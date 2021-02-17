import React from 'react'
import styles from '../styles/Subscribe.module.css'

const Subscribe = () => {
  return (
    <div className={styles.card}>
      <form action="">
        <label htmlFor="">FIRST NAME</label> 
          <br/>
        <div className={styles.checkMark}>
          <input className='input' type="text" name='firstName' placeholder='First Name' />
          <div className={styles.nameIsTyped}>&#10003;</div>
        </div>
        <label htmlFor="">E-Mail</label>
        <div className={styles.checkMark}>
          <input type="email" placeholder='Your e-mail here' /> 
          <div className={styles.emailIsTyped}>&#10003;</div>
        </div>
        <button type="email">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Subscribe