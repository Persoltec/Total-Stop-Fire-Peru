import React from "react";
import { SocialIcon }   from 'react-social-icons';
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
                    <SocialIcon
                    style={{ height: 32, width: 32 }}
                    fgColor="white"
                    bgColor="transparent"
                    className={item.tipo.toString().toLowerCase()}
                    target="_blank" 
                    url={item.direccion}
                    label={item.tipo}
                     />
                  
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
