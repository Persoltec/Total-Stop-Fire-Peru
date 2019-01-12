import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Carousel from 'nuka-carousel';
import Media from 'react-media';



class BrandProducts extends React.Component {
 
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
        render={data => (
         <section class="widget-brand-products section">
    <div class="container">
              <div  className="titulo has-text-centered">
                <h1 name="image" className="title">
               Marcas
                </h1>
                <h2 className="subtitle">{Titulo}</h2>
              </div>

 <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <Carousel
              cellAlign="left"
               slidesToShow="2"
               slidesToScroll="auto"
               slideIndex="1"
               autoplay="true"
               autoplayInterval="2000"
                 wrapAround="true"
               >
                      {data.allMarkdownRemark.edges.map((item, i) => {
                        return (
                            <div>
                             
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
                    </Carousel>
            ) : (
              <Carousel
               cellAlign="left"
               slidesToShow="4"
               slidesToScroll="1"
               slideIndex="1"
               autoplay="true"
               autoplayInterval="2000"
             
               >
                      {data.allMarkdownRemark.edges.map((item, i) => {
                        return (
                            <div>
                             
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
                    </Carousel>
            )
          }
        </Media>

        
 
          
               
            </div>
          </section>
        )}
      />
    );
  }
}

export default BrandProducts;
