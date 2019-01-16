import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Img from "gatsby-image";
export const DefaultServiceTemplate = ({
 portada,title, content, contentComponent 
}) => {
  const PageContent = contentComponent || Content

  return (
    <React.Fragment>
      <Img
                          style={{ maxHeight: "300px", margin: "0 auto" }}
                          fluid={
                            portada.childImageSharp.fluid
                          }
                          alt={title}
                        />
                        <br/>
              <PageContent className="content " content={content} />
           

<div class="timeline is-centered">
  <header class="timeline-header">
    <span class="tag is-medium is-primary">Start</span>
  </header>
  <div class="timeline-item is-primary">
    <div class="timeline-marker is-primary"></div>
    <div class="timeline-content">
      <p class="heading">January 2016</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <div class="timeline-item is-warning">
    <div class="timeline-marker is-warning is-image is-32x32">
      <img src="http://bulma.io/images/placeholders/32x32.png"/>
    </div>
    <div class="timeline-content">
      <p class="heading">February 2016</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <header class="timeline-header">
    <span class="tag is-primary">2017</span>
  </header>
  <div class="timeline-item is-danger">
    <div class="timeline-marker is-danger is-icon">
      <i class="fa fa-flag"></i>
    </div>
    <div class="timeline-content">
      <p class="heading">March 2017</p>
      <p>Timeline content - Can include any HTML element</p>
    </div>
  </div>
  <header class="timeline-header">
    <span class="tag is-medium is-primary">End</span>
  </header>
</div>



    </React.Fragment>
  )
}


DefaultServiceTemplate.propTypes = {
  portada: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}
const DefaultService = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout titulo={post.frontmatter.title}>
      <DefaultServiceTemplate
       portada={post.frontmatter.portada}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}
 

DefaultService.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}


export default DefaultService

export const DefaultServiceQuery = graphql`
  query DefaultService($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        portada {
                      childImageSharp {
                        fluid(maxWidth: 800, quality: 50, toFormat: JPG) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                            originalImg
                            originalName
                          }
                      }
                    }
      }
    }
  }
`
