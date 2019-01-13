import React from "react";
import { StaticQuery, graphql } from "gatsby";

import MapInfo from "../../../img/MapInfo.png";
import { Icon } from "react-icons-kit";

import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import { ic_phone } from "react-icons-kit/md/ic_phone";
import { ic_stay_current_portrait } from "react-icons-kit/md/ic_stay_current_portrait";
import { ic_mail } from "react-icons-kit/md/ic_mail";

class ContactInfo extends React.Component {
  render() {
    const { ...props } = this.props;
    const { name } = props;
    delete props.name;

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

              var icono = [
                ic_location_on,
                ic_phone,
                ic_stay_current_portrait,
                ic_mail
              ];

              return (
                <div
                  style={{ backgroundImage: `url(${MapInfo})` }}
                  className={`${name ? name : " widget-contact-info"}`}
                >
                  {info.map((info, i) => {
                    return (
                      <article class="media">
                        <figure class="media-left ">
                          <Icon size={24} icon={icono[i]} />
                        </figure>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <strong className="titulo has-text-primary">
                                {titulos[i]}
                              </strong>
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
