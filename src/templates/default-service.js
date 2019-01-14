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
                          sizes={
                            portada.childImageSharp.sizes
                          }
                          alt={title}
                        />
                        <br/>
              <PageContent className="content " content={content} />
           
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
                        sizes(maxWidth: 400) {
                          ...GatsbyImageSharpSizes_tracedSVG
                        }
                      }
                    }
      }
    }
  }
`
