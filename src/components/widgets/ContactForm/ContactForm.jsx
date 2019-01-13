import React from "react";
import { StaticQuery, graphql } from "gatsby";

import MapInfo from "../../../img/MapInfo.png";
import { Icon } from "react-icons-kit";

import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import { ic_phone } from "react-icons-kit/md/ic_phone";
import { ic_stay_current_portrait } from "react-icons-kit/md/ic_stay_current_portrait";
import { ic_mail } from "react-icons-kit/md/ic_mail";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { name } = props;
    delete props.name;

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { widgets: { eq: "ContactInfo" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    titulo
                    direccion
                    telefono
                    movil
                    correo
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div className="widget-contact-form">
              <form method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="message">Message</label>
                <textarea name="message" rows="3" />

                <input type="submit" />
              </form>
            </div>
          );
        }}
      />
    );
  }
}

export default ContactForm;
