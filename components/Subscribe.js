import React from 'react'
import styles from '../styles/Home.module.css'

const Subscribe = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.card}>
        <form action="">
          <label htmlFor="">First Name</label>
          <input type="text" name='firstName' value='First Name' />
          <br/>
          <label htmlFor="">E-Mail</label>
          <input type="text" name='email' value='Your e-mail here' />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
