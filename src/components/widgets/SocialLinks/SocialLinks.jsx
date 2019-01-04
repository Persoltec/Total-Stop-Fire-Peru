import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Button,Tooltip } from "antd";

class SocialLinks extends React.Component {
  render() {
    // const { ...props } = this.props;
    // const {isMobile   } = props;
    // delete props.isMobile;

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
                   <Tooltip title={item.tipo}>
                     <Button size="default" className={item.tipo.toString().toLowerCase()} href = {item.direccion} target="_blank"  icon={item.tipo.toString().toLowerCase()} />
                   </Tooltip>
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
