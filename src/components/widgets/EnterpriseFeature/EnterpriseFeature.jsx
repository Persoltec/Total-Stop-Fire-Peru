import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Button, Tooltip, Carousel, Col, Row } from "antd";
import Img from "gatsby-image";

import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Parallax } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import { TweenOneGroup, TweenOne } from "rc-tween-one";
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
            <div className="">
              {data.allMarkdownRemark.edges.map((items, i) => {
                let color = ["rojo", "negro", "blanco"];
                let n = 0;
                return (
                  <Row>
                    {items.node.frontmatter.caracteristica.map((item, i) => {
                     
                      let setColor = color[n];
                      n = n + 1;
                       if (n >2) {
                        n = 0;
                      }
                      return (
                        <Col span={6} className={`block ${setColor}`}>
                          <SVG className="icono" src={item.imagen.publicURL}>
                            <img
                              src={item.imagen.publicURL}
                              className="icono"
                            />
                          </SVG>
                          <span className="titulo">
                          <h1 >{item.titulo}</h1>
                          </span>
                          <p className="descripcion">{item.descripcion}</p>
                          <Button type="dashed"  >
                            Solicitar cotización
                          </Button>
                        </Col>
                      );
                    })}
                  </Row>
                );
              })}
            </div>
          </div>
        )}
      />
    );
  }
}

export default EnterpriseFeature;
