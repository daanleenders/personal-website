import React, { Fragment } from 'react'

import Section from '../components/section.js'
import Title from '../components/title.js'
import Content from '../components/content.js'
import Company from '../components/company.js'

import styles from './index.module.css'

import logo from '../assets/Tracebuzz_diap_eye.svg'
import featureImage from '../assets/profile_feature_image_daan.jpg'

const IndexPage = ({ data }) => {
  console.log(data)
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
            picture and put emphasis on the user experience, aswell as it gave
            my a lot of development experience through many internships.
          </p>
          <p>
            I stuck around at the company of one of those internships,
            Tracebuzz, .
          </p>
          {/*<p>Aut optio impedit incidunt placeat deleniti repudiandae non. Iure doloremque omnis sed necessitatibus vitae et. Quisquam ratione aut nostrum assumenda. Doloribus suscipit vel dicta nihil nam quibusdam ullam. Rerum vitae ea saepe qui id. Accusantium repudiandae at pariatur quia dignissimos rerum nam.</p>*/}
          {/*<p>Saepe ipsa ut et amet laboriosam et beatae. Quasi reprehenderit veritatis quidem. Hic quia sunt consequatur tenetur deserunt. A iusto ut enim.</p>*/}
        </Content>
      </Section>
      <Section type="flexRow">
        <Title name="Experience" />
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Company key={node.id} name={node.frontmatter.title} description={node.excerpt} />
          ))}
        </div>
      </Section>
    </div>
  )
}

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
              image
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
`
