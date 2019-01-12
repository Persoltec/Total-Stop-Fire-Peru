import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ContactInfo from "../ContactInfo/ContactInfo.jsx";

import marker from "../../../img/marker.png";
 
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'


export const pointerIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconSize: [128, 128],
})
 
 
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
 <Map center={position} zoom={13}>
    <TileLayer
      url='https://api.mapbox.com/styles/v1/mapbox/emerald-v8/tiles/{z}/{x}/{y}?access_token=<pk.eyJ1IjoibXlzdGVyeXBlcnV0b3VyIiwiYSI6ImNqa2psOTJ6YjBiNmUza3RqZXhmbW5obWUifQ.1mfJDOzid-8LdsQ_6kMmEw>'
   
    />
    <Marker position={position} icon={pointerIcon}>
      <Popup>
        

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
