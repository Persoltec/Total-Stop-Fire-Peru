import React from 'react'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from "gatsby"
import { BackTop } from 'antd';
import { enquireScreen } from 'enquire-js';

import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Title from './layout/Title/Title';
import Slider from './slider/Slider';


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
    const inicio = this.props.inicio
    const titulo = this.props.titulo

    return (
       <div>
       <Header
        id="Nav1_0"
        key="Nav1_0"
        isMobile={this.state.isMobile}

        />


 {!inicio && (
        <Title titulo={titulo}/>
          )}


       
       
       {children}
       <Footer
        isMobile={this.state.isMobile}
       />
       <BackTop />
       </div>
    );
  }
} 

  
export default Layout
