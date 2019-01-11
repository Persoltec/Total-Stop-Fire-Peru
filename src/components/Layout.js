import React from "react";
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from "gatsby"

import { enquireScreen } from "enquire-js";

import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import BackToTop from "./layout/BackToTop/BackToTop";
 
import Slider from "./slider/Slider";

import "typeface-roboto";

import "../style.scss";

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const children = this.props.children;
    const inicio = this.props.inicio;
    const titulo = this.props.titulo;

    return (
      <div>
         <Header titulo={titulo}  />

        {children}
        <Footer />

        <BackToTop />
      </div>
    );
  }
}

export default Layout;
