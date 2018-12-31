import React from 'react'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from "gatsby"

import Home from '../components/Home/index'
import './all.less'
 

 


class Layout extends React.PureComponent {
   
  
  render() {
    return (
       <div>
       <Home/>
       </div>
    );
  }
} 

  
export default Layout
