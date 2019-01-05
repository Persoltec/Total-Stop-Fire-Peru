import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Button, Icon } from "antd";
import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
//import Items from "./Items.jsx";
import "rc-banner-anim/assets/index.css";
import Img from "gatsby-image";
const { BgElement } = Element;

class Slider extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    delete props.isMobile;

    const SliderAnimation = props => (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { slider: { eq: "SliderHome" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    pagina {
                      titulo
                      descripcion
                      imagen {
                        childImageSharp {
                          fluid(
                            maxWidth: 800
                            quality: 50
                            toFormat: JPG
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
          }
        `}
        render={data => (
          <React.Fragment>
            {data.allMarkdownRemark.edges.map((items, i) => (
              <BannerAnim prefixCls="banner-user">
                {items.node.frontmatter.pagina.map((item, i) => (
                  <Element
                    key={i.toString()}
                    className="banner-user-elem"
                    prefixCls="banner-user-elem"
                  >
                    <BgElement
                      key="bg"
                      className="bg"
                      style={{
                        backgroundImage:`url(${item.imagen.childImageSharp.fluid.src})` ,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    /> 
                 

                    <QueueAnim
                      type={["bottom", "top"]}
                      delay={200}
                      key="text"
                      className="banner1-text-wrapper"
                    >
                      <div key="logo" className="banner1-title">
                        {item.titulo.toString().toUpperCase()}
                     
                      </div>
                      <div key="content" className="banner1-content">
                        {item.descripcion}
                      </div>
                      <Button ghost key="button" className="banner1-button">
                        Solicitar cotización
                      </Button>
                    </QueueAnim>
                  </Element>
                ))}
              </BannerAnim>
            ))}
          </React.Fragment>
        )}
      />
    );

    return (
      <div className="banner1">
        <TweenOneGroup
          key="bannerGroup"
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
          component=""
        >
          <div className="banner1-wrapper" key="wrapper">
            <SliderAnimation />
          </div>
        </TweenOneGroup>
        <TweenOne
          animation={{
            y: "-=20",
            yoyo: true,
            repeat: -1,
            duration: 1000
          }}
          className="banner1-icon"
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}

Slider.propTypes = {
  onEnterChange: PropTypes.func
};

export default Slider;
