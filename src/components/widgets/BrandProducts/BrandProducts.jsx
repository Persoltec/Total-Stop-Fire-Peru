import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Media from 'react-media';
 

    const params = {
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }

const flickityOptions = {
 cellAlign: 'left',
    wrapAround: true ,
    adaptiveHeight: true,
}


class BrandProducts extends React.Component {

   state = { Flickity: null };

  constructor(props) {
    super(props);
   
  }

  render() {
    const { ...props } = this.props;
    const { isMobile } = props;
    const { Titulo } = props;
    delete props.isMobile;
    delete props.Titulo;
 let num=4;
 

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
        render={data => {

 
          return(
         <section class="widget-brand-products section">
    <div class="container">
  
            </div>
          </section>
        )}}
      />
    );
  }
}

export default BrandProducts;
