import React from "react";
import { StaticQuery, graphql } from "gatsby";
 
class SocialLinks extends React.Component {
  render() {
    

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { social: { eq: "SocialLinks" } } }
            ) {
              edges {
                node {
                  frontmatter {
                   redsocial {
                      tipo
                      direccion
                  }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="widget-social-links">
            {data.allMarkdownRemark.edges.map((items, index) => (
               <React.Fragment>
               {items.node.frontmatter.redsocial.map((item, i) => (
                    
                     <a  className={item.tipo.toString().toLowerCase()} href = {item.direccion} target="_blank"  icon={item.tipo.toString().toLowerCase()} >
                    {item.tipo}
                    </a>
                ))}
                </React.Fragment>
            ))}
          </div>
        )} 
      />
    );
  }
}

export default SocialLinks;
