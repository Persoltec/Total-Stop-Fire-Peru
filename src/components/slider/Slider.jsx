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
    if (typeof window !== 'undefined') {
      const Flickity = require('react-flickity-component');
      this.state.Flickity = Flickity;
    }
  }



  render() {
    const { ...props } = this.props;
    delete props.isMobile;
const { Flickity } = this.state;
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
              {Flickity && (
              <Flickity
                className={"carousel"} // default ''
                elementType={"div"} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
              >
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
              </Flickity>
              )}
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
