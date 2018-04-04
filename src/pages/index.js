import React from 'react'

import Section from '../components/section.js'
import styles from './index.module.css'
import logo from './Tracebuzz_diap_eye.svg';

const IndexPage = () => (
  <Section>
      <div className={styles.name}>
          <label htmlFor={'name'}>Name</label>
          <h1 id={'name'}>Daan Leenders</h1>
      </div>
      <div className={styles.currentJob}>
          <img src={logo} alt="Tracebuzz logo" />
          <div className={styles.column}>
              <label htmlFor={'currentJob'}>Currently</label>
              <p id={'currentJob'}>
                  Developer,
                  &nbsp;
                  <a href="https://www.tracebuzz.com/">Tracebuzz</a>
              </p>
          </div>
          <div className={styles.column}>
              <label htmlFor={'challenge'}>Challenge</label>
              <p id={'challenge'}>
                  Creating Customer Happiness
              </p>
          </div>

      </div>
    {/*<h1>Hello world</h1>*/}
    {/*<p>Welcome to your new Gatsby site.</p>*/}
    {/*<p>Now go build something great.</p>*/}
    {/*<img src="https://source.unsplash.com/random/400x200" alt="" />*/}
    {/*<br />*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Section>
);

export default IndexPage;
