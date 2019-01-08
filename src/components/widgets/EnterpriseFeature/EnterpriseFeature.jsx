import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Button, Tooltip, Carousel, Col, Row ,List, Avatar } from "antd";
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
         



  

 {isMobile && (
 <React.Fragment>
{data.allMarkdownRemark.edges.map((items, i) => {


 let color = ["a", "b", "c"];
                let n = 0;




                        return (
  

            <OverPack className={`content-template`} playScale="0.3">
                  <TweenOneGroup
                    component={List}
                    itemLayout="horizontal"
                    key={i.toString()}
                    enter={{
                      y: "+=30",
                      opacity: 0,
                      type: "from",
                      ease: "easeOutQuad"
                    }}
                    leave={{ y: "+=30", opacity: 0, ease: "easeOutQuad" }}
                    className="img-wrapper"
                  >




      {items.node.frontmatter.caracteristica.map((item, i) => {
         let setColor = color[n];
                      n = n + 1;
                       if (n >2) {
                        n = 0;
                      }
         return (            
     <List.Item
      key={i.toString()}
       className={` ${setColor}`}
       >
        <List.Item.Meta
          avatar={<Avatar src={item.imagen.publicURL} />}
          title={<a href="https://ant.design">{item.titulo}</a>}
          description={item.descripcion}
        />
      </List.Item>
)})}
      </TweenOneGroup>
                </OverPack>


)
})}
 </React.Fragment>
)}
    





 {!isMobile && (
 <React.Fragment>

              {data.allMarkdownRemark.edges.map((items, i) => {
                let color = ["rojo", "negro", "blanco"];
                let n = 0;
                return (
                        <OverPack className={`content-template`} playScale="0.3">
                  <TweenOneGroup
                    component={Row}
                    gutter={32}
                    key="ul"
                    enter={{
                      y: "+=30",
                      opacity: 0,
                      type: "from",
                      ease: "easeOutQuad"
                    }}
                    leave={{ y: "+=30", opacity: 0, ease: "easeOutQuad" }}
                    className="img-wrapper"
                  >
                    {items.node.frontmatter.caracteristica.map((item, i) => {
                     
                      let setColor = color[n];
                      n = n + 1;
                       if (n >2) {
                        n = 0;
                      }
                      return (
                        <Col 
                        key={i.toString()}
                        span={6} 
                        className={`block ${setColor}`}
                        >
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
                   </TweenOneGroup>
                </OverPack>
                );

              })}
             
 
 </React.Fragment>
)}

          </div>
        )}
      />
    );
  }
}

export default EnterpriseFeature;
