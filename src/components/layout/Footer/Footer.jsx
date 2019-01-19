import React from "react";
import { StaticQuery, graphql } from "gatsby";

import logo from "../../../img/logo.svg";
import Personal from "../../../img/personal.png";
import OfficeHours from "../../widgets/OfficeHours/OfficeHours.jsx";
import ContactInfo from "../../widgets/ContactInfo/ContactInfo.jsx";
import SocialLinks from "../../widgets/SocialLinks/SocialLinks.jsx";
import Img from "gatsby-image";
import { Link } from "gatsby";
class Footer extends React.Component {
  static defaultProps = {
    className: "footer1"
  };

  render() {
    const { ...props } = this.props;
    const { isMobile } = props;
    delete props.isMobile;

    return (
      <React.Fragment>
      <footer class="footer has-text-light">
        <div  class="container ">
          
            <div className="columns">
              <div className="column is-hidden-touch">
                <img src={logo} />
                <br /><br />
                <div class="text">
                  Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm
                  tempor incidi dunt labore dolore magna aliqua enim ad minim
                  veniam.
                </div>
                <br />
                <SocialLinks />
              </div>

              <div className="column">
                <ContactInfo />
              </div>

              <div className="column">
                <OfficeHours />
              </div>
            </div>
          
        </div >

        
      </footer>
      <div className="copyright">
          
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
          


 <script
            dangerouslySetInnerHTML={{
              __html: `(function () {
        var options = {
            facebook: "1381071522167859", // Facebook page ID
            whatsapp: "51998157750", // WhatsApp number
            call_to_action: "Escribenos", // Call to action
            button_color: "#E74339", // Color of button
            position: "left", // Position may be 'right' or 'left'
            order: "facebook,whatsapp", // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();`,
            }}
          />





        </div>
        </React.Fragment>
    );
  }
}

export default Footer;
