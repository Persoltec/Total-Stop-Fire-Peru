import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
 
import Img from "gatsby-image";
import Carousel from 'nuka-carousel';
import { Icon } from 'react-icons-kit'
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'
import {ic_navigate_before} from 'react-icons-kit/md/ic_navigate_before'  

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
               <Carousel
               transitionMode="fade"
               autoplay="true"
               autoplayInterval="3000"
               className="slider inicio"
               wrapAround="true"
               dragging="true"
               swiping="false"
  renderCenterLeftControls={({ previousSlide }) => (
    <a className="button previous" onClick={previousSlide}>
      <Icon size={32}  icon={ic_navigate_before} />
 
    </a>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <a className="button next" onClick={nextSlide}>
  <Icon size={32}  icon={ic_navigate_next} />
    </a>
  )}



               >
                {items.node.frontmatter.pagina.map((item, i) => (
                  <div className="itemslider" key={i.toString()}>
            
                   <Img  fluid= {item.imagen.childImageSharp.fluid}/>
                   
   <div class="hero-body is-overlay">
    <div class="container has-text-centered">
      <h1 class="title  is-size-1-desktop is-size-2-tablet is-size-3-mobile">
        {item.titulo.toString().toUpperCase()}
      </h1>
      <h2 class="subtitle">
        {item.descripcion}
      </h2>
      <a class="button is-primary">Solicitar cotización</a>
    </div>
  </div>
                  </div>
                ))}
              </Carousel>
            ))}
          </React.Fragment>
        )}
      />
    );

    return (
      <React.Fragment>
       <SliderAnimation />
      </React.Fragment>
    );
  }
}

Slider.propTypes = {
  onEnterChange: PropTypes.func
};

export default Slider;

                   