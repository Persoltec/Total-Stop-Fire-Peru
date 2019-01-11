import React from "react";
import { StaticQuery, graphql } from "gatsby";

import MapInfo from "../../../img/MapInfo.png";

class ContactInfo extends React.Component {
  render() {
    // const { ...props } = this.props;
    // const {isMobile   } = props;
    // delete props.isMobile;

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { widgets: { eq: "ContactInfo" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    titulo
                    direccion
                    telefono
                    movil
                    correo
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            {data.allMarkdownRemark.edges.map((edge, index) => {
              var titulos = [
                "Dirección",
                "Teléfono",
                "Móvil",
                "Correo electrónico"
              ];
              var info = Object.values(edge.node.frontmatter).splice(1, 4);

              return (
                <div
                  style={{ backgroundImage: `url(${MapInfo})` }}
                  className="widget-contact-info"
                >
                  {info.map((info, i) => {
                    return (
                      <article class="media">
                        <figure class="media-left">
                          <p class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                          </p>
                        </figure>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <strong className="titulo">{titulos[i]}</strong>
                              <br />
                              <span className="descripcion">{info}</span>
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      />
    );
  }
}

export default ContactInfo;
