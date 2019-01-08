import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Button, Tooltip, Carousel, Col, Row} from "antd";
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

   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
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
     sizes(maxWidth: 400 ) {
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
                    <Carousel {...settings} key="bran-product">
                      {data.allMarkdownRemark.edges.map((item, i) => {
                        return (
                            <React.Fragment>
                             
                              <Img 
                                style={{ width: "160px", margin: "0 auto" }}
                                sizes={
                                  item.node.frontmatter.imagen.childImageSharp
                                    .sizes
                                }
                                alt={item.node.frontmatter.title}
                              />
                              <h1>{item.node.frontmatter.title}</h1>
                             
                            </React.Fragment>
                        );
                      })}
                    </Carousel>
                    </TweenOneGroup>
                </OverPack>
               
            </div>
          </div>
        )}
      />
    );
  }
}

export default BrandProducts;
