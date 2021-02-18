import React from 'react'
import Image from 'next/image'
import styles from '../styles/SubscribeMessage.module.css'

const SubscribeMessage = ({ onClick }) => {

  const handleClick = () => {
    onClick()
  }

  return (
    <div className={styles.card}>
      <div className={styles.subscribeMessage}>
        <Image
          onClick={handleClick}
          src="/left-arrow.svg"
          alt="The Last Hacker Book Cover"
          layout='fixed'
          width={24}
          height={24}
        />
        <p className={styles.congrats}>Congratulations!</p>
        <h2>YOU ARE SUBSCRIBED</h2>
        <p>
          I will notify you about any changes with the Kickstarter! New updates  will come soon. Keep an eye on your inbox!
        </p>
        <p>
          Click the back arrow to subscribe another email.
        </p>
      </div>
    </div>
  )
}

export default SubscribeMessage