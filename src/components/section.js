import React from 'react'

import styles from './section.module.css'

export default ({ type, children }) => (
  <div className={styles.section}>
    <div className={styles.container + ' ' + styles[type]}>{children}</div>
  </div>
)
