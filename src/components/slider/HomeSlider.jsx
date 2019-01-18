import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
 
import Img from "gatsby-image";

 
import { Icon } from 'react-icons-kit'
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'
import {ic_navigate_before} from 'react-icons-kit/md/ic_navigate_before'  

 

 
 const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


 


class HomeSlider extends React.PureComponent {

 
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
           
 

   <Slider {...settings}>
                {items.node.frontmatter.pagina.map((item, i) => (
                  <div className="itemslider" key={i.toString()}>
                    <Img fluid={item.imagen.childImageSharp.fluid} />

                    <div class="hero-body is-overlay">
                      <div class="container has-text-centered">
                        
                        <h1 class="title  is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                        
        {item.titulo.toString().toUpperCase()}
      


                        </h1>
                        
                        <h2 class="subtitle">{item.descripcion}</h2>
                        <a class="button is-primary">Solicitar cotización</a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            
 
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

export default HomeSlider;
