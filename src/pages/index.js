import React from 'react'

import Section from '../components/section.js'
import Title from '../components/title.js'
import Content from '../components/content.js'
// import Company from '../components/company.js'

import styles from './index.module.css'

import logo from '../assets/Tracebuzz_diap_eye.svg'
import featureImage from '../assets/profile_feature_image_daan.jpg'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Section type="normal">
        <div className={styles.name}>
          <div className={styles.fakeImage}>&nbsp;</div>
          <div className={styles.column}>
            <label htmlFor={'name'}>Name</label>
            <h1 id={'name'}>{data.site.siteMetadata.person.name}</h1>
          </div>
        </div>
        <div className={styles.currentJob}>
          <img src={logo} alt="Tracebuzz logo" />
          <div className={styles.column}>
            <label htmlFor={'currentJob'}>Currently</label>
            <p id={'currentJob'}>
              {data.site.siteMetadata.person.currentJob.title}, &nbsp;
              <a href={data.site.siteMetadata.person.currentJob.company.site}>
                {data.site.siteMetadata.person.currentJob.company.name}
              </a>
            </p>
          </div>
          <div className={styles.column}>
            <label htmlFor={'challenge'}>Challenge</label>
            <p id={'challenge'}>
              {data.site.siteMetadata.person.currentJob.challenge}
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
      <Section type="fullWidth">
        <img
          src={featureImage}
          alt="Daan Leenders"
          className={styles.featureImage}
        />
      </Section>
      <Section type="flexRow">
        <Title name="Background" />
        <Content>
          <h3>
            I'm a developer, a generalist, based in Almere, The Netherlands
          </h3>
          <p>
            I started my development journey by messing around with html and css
            trying to 'hack' the wysiwyg editor of a free website builder to get
            it to do what i wanted it to do.
          </p>
          <p>
            To improve my skills and find out what part of IT I liked best I
            started a study 'Information Engineering'. That study combines
            development, research, business administaration and project
            management. This combination taught me to always consider the big
            picture and put emphasis on the user experience, as well as it gave
            me a lot of development experience through many internships.
          </p>
          <p>
            I stuck around at the company of one of those internships,
            Tracebuzz. A company that helps other companies create better and
            more personal customer service experiences. When I started we really
            focused on monitoring what people were saying about you but just
            dipping our toes in actually responding to these people.
          </p>
          <p>
            I worked on transitioning our product from monitoring to engagement.
            Created and maintained many integrations with social media platforms
            and messaging channels. Helped build a new inbox that allows users
            to have realtime conversations and grown that platform to support
            hundreds of users simultaneously.
          </p>
          <p>&nbsp;</p>
        </Content>
      </Section>
      {/*<Section type="flexRow">*/}
      {/*  <Title name="Experience" />*/}
      {/*  <div>*/}
      {/*    {data.allMarkdownRemark.edges.map(({ node }) => (*/}
      {/*      <Company*/}
      {/*        key={node.id}*/}
      {/*        name={node.frontmatter.title}*/}
      {/*        description={node.excerpt}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</Section>*/}
    </div>
  )
};

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        person {
          name
          currentJob {
            title
            challenge
            company {
              name
              site
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`;