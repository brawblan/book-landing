import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Book.module.css'

const Book = () => {
  const [instaCam, setInstaCam] = useState("/instagram_white.svg")

  const hoverLogo = () => {
    setInstaCam("/instagram_grad.svg")
  }
  const unhoverLogo = () => {
    setInstaCam("/instagram_white.svg")
  }

  useEffect(() => {
    document.addEventListener('onmouseover', hoverLogo);
    document.addEventListener('onmouseout', unhoverLogo);
    return () => {
      document.removeEventListener('onmouseover', hoverLogo);
      document.removeEventListener('onmouseout', unhoverLogo);
    }
  })

  return (
    <div className={styles.card}>
      <div className={styles.bookImg}>
        <Image
          src="/book_cover.svg"
          alt="The Last Hacker Book Cover"
          layout='fixed'
          width={185}
          height={259}
        />
      </div>
      <div className={styles.bookDescription}>
        <h2>THE LAST HACKER</h2>
        <p>
          In this show, you'll explore stories of the future that we hope should never be and possibilities that blur the lines between fiction and reality.
        </p>
        <p>
          My name is Mark Wahlbeck, and welcome to the World of Wahlbeck!
        </p>
        <div className={styles.btns}>
          <a href="https://www.kickstarter.com/projects/markwahlbeck/999020694?ref=4lqfqx&token=ef7e371e" target="_blank">
            <button className={[styles.kickstart, styles.btn].join(' ')}>
              GET ON KICKSTARTER
            </button>
          </a>
          <button 
            onMouseOver={hoverLogo} 
            onMouseOut={unhoverLogo} 
            className={[styles.instaBtn, styles.btn].join(' ')}
          >
            <a href="https://www.instagram.com/markwahlbeck/" target="_blank">
              <Image
                src={instaCam}
                prefetch={false}
                alt="Instagram logo"
                layout="fixed"
                width={20}
                height={20}
              />
              <Image
                src="/insta_cursive_white.svg"
                alt="Instagram logo"
                layout="fixed"
                width={51}
                height={19}
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book
