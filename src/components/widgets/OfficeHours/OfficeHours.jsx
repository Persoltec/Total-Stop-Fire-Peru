import React from "react";
import { StaticQuery, graphql } from "gatsby";

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
          <div className="widget-office-hours">
            {data.allMarkdownRemark.edges.map((items, i) => {
              var dias = [
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo"
              ];
              var horario = Object.values(items.node.frontmatter).splice(1, 7);

              return (
                <React.Fragment>
                  {dias.map((dia, i) => {
                    return (
                      <div className="level">
                        <div className="level-left"> {dia}</div>
                        <div className="level-right "> {horario[i]}</div>
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        )}
      />
    );
  }
}

export default OfficeHours;
