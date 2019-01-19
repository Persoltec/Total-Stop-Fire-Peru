import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Icon } from 'react-icons-kit'
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'
import {ic_navigate_before} from 'react-icons-kit/md/ic_navigate_before'  
 
import Slider from "react-slick";

 var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }
        ]
      }
 

class BrandProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { Titulo } = props;
    delete props.Titulo;

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
                        sizes(maxWidth: 400) {
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




 


          return (
            <section class="widget-brand-products section">
              <div class="container">
                <div className="titulo has-text-centered">
                  <h1 name="image" className="title">
                    Marcas
                  </h1>
                  <h2 className="subtitle">{Titulo}</h2>
                </div>

<Slider {...settings}>
{data.allMarkdownRemark.edges.map((item, i) => {
                    return (
                      <div key={i.toString()}>
                        <Img
                          style={{ width: "160px", margin: "0 auto" }}
                          sizes={
                            item.node.frontmatter.imagen.childImageSharp.sizes
                          }
                          alt={item.node.frontmatter.title}
                        />
                      </div>
                    );
                  })}

</Slider>


 


 


   
               
              </div>
            </section>
          );
        }}
      />
    );
  }
}

export default BrandProducts;
