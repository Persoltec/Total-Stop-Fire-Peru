/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav1 from './Nav1';
import Banner1 from './Banner1';
import Content3 from './Content3';
import Content7 from './Content7';
import Content0 from './Content0';
import Content8 from './Content8';
import Content6 from './Content6';
import Content1 from './Content1';
import Content2 from './Content2';
import Content4 from './Content4';
import Content12 from './Content12';
import Content5 from './Content5';
import Content9 from './Content9';
import Content10 from './Content10';
import Content11 from './Content11';
import Footer1 from './Footer1';

import {
  Nav10DataSource,
  Banner10DataSource,
  Content30DataSource,
  Content71DataSource,
  Content00DataSource,
  Content80DataSource,
  Content60DataSource,
  Content10DataSource,
  Content20DataSource,
  Content40DataSource,
  Content120DataSource,
  Content50DataSource,
  Content90DataSource,
  Content100DataSource,
  Content110DataSource,
  Footer10DataSource,
} from './data.source';
import './less/antMotionStyle.less';

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

  render() {
    const children = [
      <Nav1
        id="Nav1_0"
        key="Nav1_0"
        dataSource={Nav10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
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
