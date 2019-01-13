import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
 
import Img from "gatsby-image";

// import { Icon } from 'react-icons-kit'
// import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'
// import {ic_navigate_before} from 'react-icons-kit/md/ic_navigate_before'

const flickityOptions = {
  wrapAround: true,
  setGallerySize: false
};

class Slider extends React.PureComponent {

  state = { Flickity: null };
  constructor(props) {
    super(props);
     
  }



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
             render={data => {

 
return(
          <React.Fragment>
            
          </React.Fragment>
        )}}
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
