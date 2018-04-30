import React from "react";

import styles from './title.module.css';

export default ({name}) => (
    <div className={styles.title}>
        <h3>{name}</h3>
    </div>
);