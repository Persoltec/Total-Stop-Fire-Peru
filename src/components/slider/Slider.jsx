import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
 
import Img from "gatsby-image";

import SplitText from 'react-pose-text';

import Carousel from "nuka-carousel";

import Waypoint from 'react-waypoint';

import { Icon } from 'react-icons-kit'
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'
import {ic_navigate_before} from 'react-icons-kit/md/ic_navigate_before'  

 
const nuka = {
  slideIndex: 0,
  wrapAround: true,
  underlineHeader: true,
  slidesToShow: '1',
  slidesToScroll: "1",
  cellAlign: "left",
  transitionMode: "fade",
  heightMode: "max",
  withoutControls: false,
  dragging:false,
  disableKeyboardControls:true,
  autoplay:true,
  autoplayInterval:2000
};
 
 
 const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};


class Slider extends React.PureComponent {

 
state = {
      isVisible: false
    }


   onEnterViewport = () => {
    this.setState({
      isVisible: true,
    });
  }

  onExitViewport = () => {
    console.log("saliiiiiii")
    this.setState({
      isVisible: false,
    });
  }


  render() {
    const { ...props } = this.props;
    delete props.isMobile;
  const { isVisible } = this.state;

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
                          fluid(maxWidth: 800, quality: 50, toFormat: JPG) {
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
              <React.Fragment>
           



                <Carousel 

                {...nuka}
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
                    <Img fluid={item.imagen.childImageSharp.fluid} />

                    <div class="hero-body is-overlay">
                      <div class="container has-text-centered">
                        
                        <h1 class="title  is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                           <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        {item.titulo.toString().toUpperCase()}
      </SplitText>


                        </h1>
                        
                        <h2 class="subtitle">{item.descripcion}</h2>
                        <a class="button is-primary">Solicitar cotización</a>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            

              </React.Fragment>
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
