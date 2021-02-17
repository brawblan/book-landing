import React from 'react'
import styles from '../styles/SubscribeMessage.module.css'

const SubscribeMessage = () => {

  return (
    <div className={styles.card}>
      <h2>YOU ARE SUBSCRIBED</h2>
      <p>I will notify you about any changes with the Kickstarter! New updates will come soon. Keep an eye on your inbox!</p>
    </div>
  )
}

export default SubscribeMessage