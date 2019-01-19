import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
//import LocationCompany from "../components/widgets/LocationCompany/LocationCompany";
import ContactForm from "../components/widgets/ContactForm/ContactForm";
import EnterpriseFeature from "../components/widgets/EnterpriseFeature/EnterpriseFeature";

import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <React.Fragment>
      <section class="section">
        <div class="container">
          <div class="tile">
            <div class="tile is-horizontal">
              <div className="tile is-parent is-6">
                <div class="tile is-child ">
                  <PageContent className="content" content={content} />
                  <ContactForm />
                </div>
              </div>

              <div className="tile is-parent is-6 is-hidden-touch">
                <div class="tile is-child ">
                   
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <EnterpriseFeature/>
    </React.Fragment>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout full titulo={post.frontmatter.title}>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
