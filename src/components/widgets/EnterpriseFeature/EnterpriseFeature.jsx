import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";

import SVG from "react-inlinesvg";

class EnterpriseFeature extends React.Component {
  render() {
    const { ...props } = this.props;
    const { isMobile } = props;

    delete props.isMobile;

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { widgets: { eq: "EnterpriseFeature" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    caracteristica {
                      titulo
                      descripcion
                      imagen {
                        publicURL
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="widget-enterprise-feature">
            <React.Fragment>
              {data.allMarkdownRemark.edges.map((items, i) => {
                let color = ["rojo", "negro", "blanco"];
                let n = 0;
                return (
                  <div class="tile   has-text-centered">
                    <div class="tile is-horizontal">
                      {items.node.frontmatter.caracteristica.map((item, i) => {
                        let setColor = color[n];
                        n = n + 1;
                        if (n > 2) {
                          n = 0;
                        }
                        return (
                          <div
                            key={i.toString()}
                            className={`tile is-parent is-3 ${setColor}`}
                          >
                            <div class="tile is-child   ">
                              <div className="content">
                                <SVG
                                  className="icono"
                                  src={item.imagen.publicURL}
                                >
                                  <img
                                    src={item.imagen.publicURL}
                                    className="icono"
                                  />
                                </SVG>

                                <h1 className="title is-size-3-desktop is-size-4-touch">
                                  {item.titulo}
                                </h1>

                                <p className="descripcion  ">
                                  {item.descripcion}
                                </p>
                                <a class="button">Solicitar cotización</a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          </div>
        )}
      />
    );
  }
}

export default EnterpriseFeature;
