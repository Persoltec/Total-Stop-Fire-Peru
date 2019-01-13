import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";

import marker from "../../../img/marker.png";
 
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
 
 
class LocationCompany extends React.Component {

   openPopup (marker) {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup()
      })
    }
  }
  
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
                    coordenadas
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
   {data.allMarkdownRemark.edges.map((item, index) => {
    let position=item.node.frontmatter.coordenadas.toString().split(",")

    return (              
 <Map center={position} zoom={15}>
    <TileLayer
      url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
   
    />
    <Marker position={position}   ref={this.openPopup}>
      <Popup popupOpen='true'>
        

        <ContactInfo name="popup-info"/>
      </Popup>
    </Marker>
  </Map>


   )
})}
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
