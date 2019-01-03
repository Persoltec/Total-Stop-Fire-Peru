import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { List } from "antd";

class OfficeHours extends React.Component {
  render() {
    // const { ...props } = this.props;
    // const {isMobile   } = props;
    // delete props.isMobile;

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { widgets: { eq: "OfficeHours" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    titulo
                    lunes
                    martes
                    miercoles
                    jueves
                    viernes
                    sabado
                    domingo
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            {data.allMarkdownRemark.edges.map((edge, index) => (
              <List className="widget-office-hours" itemLayout="horizontal">
                <List.Item>
                  <List.Item.Meta title="Lunes" />
                  <div class="hour">{edge.node.frontmatter.lunes}</div>
                </List.Item>

                <List.Item>
                  <List.Item.Meta title="Martes" />
                  <div class="hour">{edge.node.frontmatter.martes}</div>
                </List.Item>

                <List.Item>
                  <List.Item.Meta title="Miércoles" />
                  <div class="hour">{edge.node.frontmatter.miercoles}</div>
                </List.Item>

                <List.Item>
                  <List.Item.Meta title="Jueves" />
                  <div class="hour">{edge.node.frontmatter.jueves}</div>
                </List.Item>

                <List.Item>
                  <List.Item.Meta title="Viernes" />
                  <div class="hour">{edge.node.frontmatter.viernes}</div>
                </List.Item>

                <List.Item>
                  <List.Item.Meta title="Sábado" />
                  <div class="hour">{edge.node.frontmatter.sabado}</div>
                </List.Item>

                <List.Item>
                  <List.Item.Meta title="Domingo" />
                  <div class="hour">{edge.node.frontmatter.domingo}</div>
                </List.Item>
              </List>
            ))}
          </div>
        )}
      />
    );
  }
}

export default OfficeHours;
