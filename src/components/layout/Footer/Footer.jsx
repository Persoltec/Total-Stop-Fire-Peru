import React from "react";
import { StaticQuery, graphql } from "gatsby";

import MapInfo from "../../../img/MapInfo.png";
import Personal from "../../../img/personal.png";
import OfficeHours from "../../widgets/OfficeHours/OfficeHours.jsx";
import ContactInfo from "../../widgets/ContactInfo/ContactInfo.jsx";
import SocialLinks from "../../widgets/SocialLinks/SocialLinks.jsx";
import Img from "gatsby-image";

class Footer extends React.Component {
  static defaultProps = {
    className: "footer1"
  };

  render() {
    const { ...props } = this.props;
    const { isMobile } = props;
    delete props.isMobile;

    return (
      <footer class="footer">
       <section class="section">
        <div class="container">








          <div className="columns">
            <div className="column is-hidden-touch">
              <StaticQuery
                query={graphql`
                  query {
                    personal: file(relativePath: { eq: "personal.png" }) {
                      childImageSharp {
                        sizes(maxWidth: 400) {
                          ...GatsbyImageSharpSizes_tracedSVG
                        }
                      }
                    }
                  }
                `}
                render={data => (
                  <Img
                    style={{ width: "160px", margin: "0 auto" }}
                    sizes={data.personal.childImageSharp.sizes}
                  />
                )}
              />
            </div>

            <div className="column">
              <ContactInfo />
            </div>

            <div className="column">
              <OfficeHours />
            </div>
          </div>


        </div>
           </section> 


            <div className="copyright">
             <section class="section">
            <div className="container">
            <div className="level has-text-centered-touch">
               <div class="level-left">
                ©2019 <a href="https://totalstopfireperu.com">Total Stop</a>
                 Todos los derechos reservados
                </div>
                 <div class="level-rigth">
                 <SocialLinks />
              </div>

              
            </div>
            </div>
            </section>
            </div>

           
      </footer>
    );
  }
}

export default Footer;
