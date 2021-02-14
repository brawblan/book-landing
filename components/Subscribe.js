import React from 'react'
import styles from '../styles/Subscribe.module.css'

const Subscribe = () => {
  return (
    <div className={styles.card}>
      <form action="">
        <label htmlFor="">FIRST NAME</label> 
          <br/>
        <input className='input' type="text" name='firstName' placeholder='First Name' />
        <div className={styles.nameIsTyped}>&#10003;</div>
          <br/>
        <label htmlFor="">E-Mail</label> 
          <br/>
        <input type="email" placeholder='Your e-mail here' /> 
        <div className={styles.emailIsTyped}>&#10003;</div>
          <br/>
        <button type="email">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Subscribe
