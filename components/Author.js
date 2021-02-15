import React from 'react'
import Image from 'next/image'
import styles from '../styles/Author.module.css'

const Author = () => {
  return (
    <>
      <div className={styles.profileImg}>
        <Image 
          src='/photo_mark.svg'
          alt="Mark Wahlbeck Picture"
          layout='intrinsic'
          width={100}
          height={100}
        />
      </div>
      <h1 className={[styles.title, styles.typewriterText].join(' ')}>
        MARK WAHLBECK
      </h1>
      <p className={styles.description}>
        The author and the professional narrator
      </p>
    </>
  )
}

export default Author

