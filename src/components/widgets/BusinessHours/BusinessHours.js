import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { List   } from 'antd';


const hour = [
  {
    title: 'Lunes',
    info: '08:00 AM - 6:00 PM',
  },
  {
    title: 'Martes',
    info: '08:00 AM - 6:00 PM',

  },
  {
    title: 'Miércoles',
    info: '08:00 AM - 6:00 PM',
  },
  {
    title: 'Jueves',
    info: '08:00 AM - 6:00 PM',
  },
  {
    title: 'Viernes',
    info: '08:00 AM - 6:00 PM',
  },
  {
    title: 'Sabado',
    info: '08:00 AM - 6:00 PM',
  },
  {
    title: 'Domingo',
    info: 'Cerrado',
  },
];
 
class BusinessHours extends React.Component { 

render() {
    // const { ...props } = this.props;
    // const {isMobile   } = props;
    // delete props.isMobile;


  return (
  <StaticQuery
    query={graphql` 
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "BusinessHours" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title    
              }
            }
          }
        }
      }
    `}

    render={data => (
    
 <List 
    className="widget-business-hours"
    itemLayout="horizontal"
    dataSource={hour}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          
          title={item.title}
           
        />
        <div class="hour">{item.info}</div>
      </List.Item>

  
    )}
  />

)
}
  />
)
}
}

export default BusinessHours;
 
