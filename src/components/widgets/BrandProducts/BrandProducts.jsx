import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Button, Tooltip, Carousel, Col, Row } from "antd";
import Img from "gatsby-image";

import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Parallax } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import { TweenOneGroup, TweenOne } from "rc-tween-one";
class BrandProducts extends React.Component {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;

  render() {
    const { ...props } = this.props;
    const { isMobile } = props;
    const { Titulo } = props;
    delete props.isMobile;
    delete props.Titulo;

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "brand-products" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    imagen {
                      childImageSharp {
                        fluid(
                          maxWidth: 400
                          quality: 60
                          traceSVG: { color: "rgb(56, 47, 92)", threshold: 75 }
                        ) {
                          base64
                          tracedSVG
                          aspectRatio
                          src
                          srcSet
                          srcWebp
                          srcSetWebp
                          sizes
                          originalImg
                          originalName
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="content-wrapper brand">
            <div className="content">
              <div key="title" className="title-wrapper">
                <div name="image" class="title-image">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg"
                    alt="img"
                  />
                </div>
                <h1 className="title-h1">{Titulo}</h1>
              </div>

              {!isMobile && (
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
                    {data.allMarkdownRemark.edges.map((item, i) => {
                      return (
                        <Col
                          key={i.toString()}
                          className="block"
                          md={8}
                          xs={24}
                        >
                          <div className="block-content">
                            <span>
                              <Img
                                style={{ width: "160px", margin: "0 auto" }}
                                fluid={
                                  item.node.frontmatter.imagen.childImageSharp
                                    .fluid
                                }
                                alt={item.node.frontmatter.title}
                              />
                            </span>
                          </div>
                        </Col>
                      );
                    })}
                  </TweenOneGroup>
                </OverPack>
              )}

              {isMobile && (
                <OverPack className={`content-template`} playScale="0.3">
                  <TweenOneGroup
                    key="ul"
                    enter={{
                      y: "+=30",
                      opacity: 0,
                      type: "from",
                      ease: "easeOutQuad"
                    }}
                    leave={{ y: "+=30", opacity: 0, ease: "easeOutQuad" }}
                  >
                    <Carousel key="Carousel" autoplay>
                      {data.allMarkdownRemark.edges.map((item, i) => {
                        return (
                          <div className="block-content">
                            <span>
                              <Img
                                style={{ width: "160px", margin: "0 auto" }}
                                fluid={
                                  item.node.frontmatter.imagen.childImageSharp
                                    .fluid
                                }
                                alt={item.node.frontmatter.title}
                              />
                              <h1>{item.node.frontmatter.title}</h1>
                            </span>
                          </div>
                        );
                      })}
                    </Carousel>
                  </TweenOneGroup>
                </OverPack>
              )}
            </div>
          </div>
        )}
      />
    );
  }
}

export default BrandProducts;
