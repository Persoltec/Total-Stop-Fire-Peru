import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { List,Avatar  } from "antd";
import MapInfo from '../../../img/MapInfo.png'

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
            {data.allMarkdownRemark.edges.map((edge, index) => (
              <List 
              style={{ backgroundImage: `url(${MapInfo})` }}
              className="widget-contact-info"
              itemLayout="horizontal"
              >
                <List.Item>
        <List.Item.Meta
          avatar={  <Avatar shape="square" size="large" icon="pushpin" />}
          title="Dirección"
          description={edge.node.frontmatter.direccion}
        />
                </List.Item>
         <List.Item>
        <List.Item.Meta
          avatar={  <Avatar shape="square" size="large" icon="phone" />}
          title="Teléfono"
          description={edge.node.frontmatter.telefono}
        />
                </List.Item>
                       
         <List.Item>
        <List.Item.Meta
          avatar={  <Avatar shape="square" size="large" icon="mobile" />}
          title="Móvil"
          description={edge.node.frontmatter.movil}
        />
                </List.Item>
 <List.Item>
        <List.Item.Meta
          avatar={  <Avatar shape="square" size="large" icon="mail" />}
          title="Correo electrónico"
          description={edge.node.frontmatter.correo}
        />
                </List.Item>

                
              </List>
            ))}
          </div>
        )}
      />
    );
  }
}

export default ContactInfo;
