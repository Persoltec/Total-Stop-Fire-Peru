import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
 
import { Icon } from 'react-icons-kit'
 

class ServiceList extends React.Component {
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
              filter: { frontmatter: { templateKey: { eq: "default-service" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    imagen {
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
            <section class="widget-service-list section">
              <div class="container">
                <div className="titulo has-text-centered">
                  <h1 name="image" className="title">
                    Nuestros Servicios
                  </h1>
                  <h2 className="subtitle">{Titulo}</h2>
                </div>

   
                  {data.allMarkdownRemark.edges.map((item, i) => {
                    return (
                      <div key={i.toString()}>
                    		{item.node.frontmatter.title}
                      </div>
                    );
                  })}
                 
              </div>
            </section>
          );
        }}
      />
    );
  }
}

export default ServiceList;
