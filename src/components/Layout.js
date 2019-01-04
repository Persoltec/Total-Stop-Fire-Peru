import React from 'react'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from "gatsby"
import { BackTop } from 'antd';
import { enquireScreen } from 'enquire-js';

import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';

import '../style.less';

import 'typeface-roboto' 

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});


class Layout extends React.PureComponent {
   
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

 componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }


  render() {
    const children = this.props.children
    return (
       <div>
       <Header
        id="Nav1_0"
        key="Nav1_0"
        isMobile={this.state.isMobile}

        />
       <BackTop />
       {children}
       <Footer
        isMobile={this.state.isMobile}
       />
       </div>
    );
  }
} 

  
export default Layout
