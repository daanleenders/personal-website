import React from 'react'
import styles from './company.module.css'

export default ({ name, description }) => (
  <div className={styles.company}>
    <h4 className={styles.name}>{name}</h4>
    <div className={styles.time}>
      <span className={styles.start}>09-2017</span>
      {' - '}
      <span className={styles.end}>now</span>
    </div>
    <p className={styles.description}>{description}</p>
  </div>
)
