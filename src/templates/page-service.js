import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ServiceList from "../components/widgets/ServiceList/ServiceList";
 
 
export const PageServiceTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
   <React.Fragment>
    <section class="section">
        <div class="container">
              <PageContent className="content" content={content} />

              <ServiceList mini/>
                 </div>
      </section>
      </React.Fragment>  
    
  )
}


PageServiceTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}
const PageService = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout full titulo={post.frontmatter.title}>
      <PageServiceTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}
 

PageService.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}


export default PageService

export const PageServiceQuery = graphql`
  query PageService($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
