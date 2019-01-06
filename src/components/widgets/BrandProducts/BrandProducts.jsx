import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Button,Tooltip,Carousel ,Col} from "antd";
import Img from "gatsby-image";
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
 
import QueueAnim from 'rc-queue-anim';
class BrandProducts extends React.Component {

  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;

  render() {
    // const { ...props } = this.props;
    // const {isMobile   } = props;
    // delete props.isMobile;

  

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
                          fluid(
                            maxWidth: 400
                            quality: 70
                         
                          ) {
                            base64
                            tracedSVG
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
        `}
        render={data => (
          <div className="widget-brand-products">
         <QueueAnim delay={300} className="queue-simple">
            {data.allMarkdownRemark.edges.map((items, i) =>{

 

            return(
               <React.Fragment>
        
      
        <div  key={i.toString()}  >
          <div className="image-wrapper" >
            <Img 
style={{ width: '160px' }} 
fluid={items.node.frontmatter.imagen.childImageSharp.fluid}
></Img>
          </div>
          <h3>{items.node.frontmatter.title}</h3>

          
        </div>
    

                </React.Fragment>)}

            )}
             </QueueAnim>
          </div>
        )} 
      />
    );
  }
}

export default BrandProducts;
