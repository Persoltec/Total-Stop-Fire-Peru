import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const DefaultServiceTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
      
              <PageContent className="content" content={content} />
          
    
  )
}

DefaultServiceTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const DefaultService = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout titulo={post.frontmatter.title}>
      <DefaultServiceTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

DefaultService.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DefaultService

export const DefaultServiceQuery = graphql`
  query DefaultService($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
