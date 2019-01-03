/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav1 from './Nav1';
import Banner1 from './Banner1';
import Footer1 from './Footer1';

import '../../styles/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

 
//const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      isFirstScreen: true,
      //show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    // if (location.port) {
    //   // 样式 build 时间在 200-300ms 之间;
    //   setTimeout(() => {
    //     this.setState({
    //       show: true,
    //     });
    //   }, 500);
    // }
    /* 如果不是 dva 2.0 请删除 end */
  }

  onEnterChange = (mode) => {
    alert("sdgsdgsd");
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }

  render() {
    const children = [
      <Nav1
        id="Nav1_0"
        key="Nav1_0"
        isMobile={this.state.isMobile}
        isFirstScreen={this.state.isFirstScreen}
      />,
       <Banner1
        id="Banner1_0"
        key="Banner1_0"
    
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        isMobile={this.state.isMobile}
      />,  
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {  children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
