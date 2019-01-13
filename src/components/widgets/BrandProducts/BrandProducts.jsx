import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";




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


  componentDidMount() {

    
   }



  render() {
    const { ...props } = this.props;
    const { Titulo } = props;
    delete props.Titulo;
 
 
 const { Flickity } = this.state;

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
              <div  className="titulo has-text-centered">
                <h1 name="image" className="title">
               Marcas
                </h1>
                <h2 className="subtitle">{Titulo}</h2>
              </div>
{Flickity && (
  <Flickity
      className={'carousel'}  
      elementType={'div'}  
      options={flickityOptions}  
      disableImagesLoaded={false}  
      reloadOnUpdate  
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
                    </Flickity>
)}
 
            </div>
          </section>
        )}}
      />
    );
  }
}

export default BrandProducts;
