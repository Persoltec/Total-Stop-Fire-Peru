import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Carousel from 'nuka-carousel';
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
    if (typeof window !== 'undefined') {
      const Flickity = require('react-flickity-component');
      this.state.Flickity = Flickity;
    }
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

 const { Flickity } = this.state;

          return(
         <section class="widget-brand-products section">
    <div class="container">
              <div  className="titulo has-text-centered">
                <h1 name="image" className="title">
               Marcas
                </h1>
                <h2 className="subtitle">{Titulo}</h2>
              </div>

  <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
    >
                      {data.allMarkdownRemark.edges.map((item, i) => {
                        return (
                            <div key={i.toString()}>
                             
                              <Img 
                                style={{ width: "160px", margin: "0 auto" }}
                                sizes={
                                  item.node.frontmatter.imagen.childImageSharp
                                    .sizes
                                }
                                alt={item.node.frontmatter.title}
                              />
                              
                            </div>
                        );
                      })}
                    </Flickity>




   


 

        
 
          
               
            </div>
          </section>
        )}}
      />
    );
  }
}

export default BrandProducts;
