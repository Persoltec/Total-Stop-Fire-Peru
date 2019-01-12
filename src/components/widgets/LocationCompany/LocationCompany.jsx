import React from "react";
import { StaticQuery, graphql } from "gatsby";

import MapInfo from "../../../img/MapInfo.png";
import { Icon } from 'react-icons-kit'

import {ic_location_on} from 'react-icons-kit/md/ic_location_on'
import {ic_phone} from 'react-icons-kit/md/ic_phone'
import {ic_stay_current_portrait} from 'react-icons-kit/md/ic_stay_current_portrait'
import {ic_mail} from 'react-icons-kit/md/ic_mail'

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'




const position = [51.505, -0.09]


class LocationCompany extends React.Component {
  render() {
    // const { ...props } = this.props;
    // const {isMobile   } = props;
    // delete props.isMobile;

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

if (typeof window !== 'undefined') {
          return(
            
                <div
                  
                  className="widget-location-company"
                >
                 
 <Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>



                </div>
   
        )
}
    return null

        }}
      />
    );
  }
}

export default LocationCompany;
