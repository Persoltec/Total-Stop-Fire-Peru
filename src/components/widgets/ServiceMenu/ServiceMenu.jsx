import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { Icon } from "react-icons-kit";
import { Link } from "gatsby";

class ServiceMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { Titulo } = props;
    delete props.Titulo;

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: {
                frontmatter: { templateKey: { eq: "default-service" } }
              }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    descripcion
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
            }
          }
        `}
        render={data => {
          return (
            <div className="widget-service-menu">
              <div className="titulo has-text-centered">
                <h1 name="image" className="title">
                  Nuestros Servicios
                </h1>
                <h2 className="subtitle">{Titulo}</h2>
              </div>

              <div className="items">
                {data.allMarkdownRemark.edges.map((item, i) => {
                  return (
                     
                 
                    <Link key={i.toString()} className="has-text-dark"  to={item.node.fields.slug}>   
                        <article class="media">
                          <div class="media-left">
                            <figure class="image is-48x48">
                              <Img
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  margin: "0 auto"
                                }}
                                sizes={
                                  item.node.frontmatter.portada.childImageSharp.sizes
                                }
                                alt={item.node.frontmatter.title}
                              />
                            </figure>
                          </div>
                          <div class="media-content">
                            <div class="content">
                              <h4 class="title is-6 has-text-grey-darker is-uppercase">
                                  
                                    {item.node.frontmatter.title}
                                 
                                </h4>
                               
                            </div>
                          </div>
                        </article>
                    </Link>
                  

                  );
                })}
              </div>
              </div>
             
          );
        }}
      />
    );
  }
}

export default ServiceMenu;
