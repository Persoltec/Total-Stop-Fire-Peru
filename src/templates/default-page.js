import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const DefaultPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
        
              <PageContent className="content" content={content} />
          
    
  )
}

DefaultPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const DefaultPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout titulo={post.frontmatter.title}>
      <DefaultPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

DefaultPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DefaultPage

export const DefaultPageQuery = graphql`
  query DefaultPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
