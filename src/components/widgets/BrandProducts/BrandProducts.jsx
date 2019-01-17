import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Carousel from "nuka-carousel";
import { Icon } from 'react-icons-kit'
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next'
import {ic_navigate_before} from 'react-icons-kit/md/ic_navigate_before'  
import MediaQuery from 'react-responsive';
import Media from 'react-media';

const nuka = {
  slideIndex: 0,
  wrapAround: false,
  underlineHeader: true,

  cellAlign: "left",
  transitionMode: "scroll",
  heightMode: "max",
  withoutControls: false
};

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


const CarouselRes = ({  className,items,scroll }) => (
  
             <Carousel 
                
 className={className}
                {...nuka}
                slidesToShow={items}
                  slidesToScroll= {scroll}
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

  </Carousel>
)


 


          return (
            <section class="widget-brand-products section">
              <div class="container">
                <div className="titulo has-text-centered">
                  <h1 name="image" className="title">
                    Marcas
                  </h1>
                  <h2 className="subtitle">{Titulo}</h2>
                </div>


<Media query="(max-width: 599px)">
          {matches =>
            matches ? (
               <CarouselRes items="1"  scroll= "auto" />
            ) : (
               <CarouselRes items="4" scroll= "1" />
            )
          }
        </Media>


 


   
               
              </div>
            </section>
          );
        }}
      />
    );
  }
}

export default BrandProducts;
