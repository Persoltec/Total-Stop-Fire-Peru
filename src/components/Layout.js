import React from 'react'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from "gatsby"
import { BackTop } from 'antd';

import Home from '../components/Home/index'


import Footer from './layout/Footer';
import Header from './layout/Header';

import 'typeface-roboto' 

//import './all.less'
 

 


class Layout extends React.PureComponent {
   
  
  render() {
  	const children = this.props.children
    return (
       <div>
       <Header/>
       <BackTop />
       {children}
       <Footer/>
       </div>
    );
  }
} 

  
export default Layout
