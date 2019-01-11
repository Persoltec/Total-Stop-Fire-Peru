import React from "react";
import PropTypes from "prop-types";
import ScrollUpButton from "react-scroll-up-button";
// import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const BackToTop = class extends React.Component {
  render() {
    return (
      <ScrollUpButton
        ContainerClassName="scrollUp"
        TransitionClassName="scrollUpTransition"
        ToggledStyle={{ right: 10 }}
        style={{
          position: "fixed",
          right: "-100px",
          bottom: "40px",
          transition: "right 0.5s"
        }}
      >
        <a class="button is-primary">Ir a arriba</a>
      </ScrollUpButton>
    );
  }
};

export default BackToTop;
