import React from "react";
import { findDOMNode } from "react-dom";
import TweenOne from "rc-tween-one";
//import classNames from 'classnames';
import { Popover, Divider, Button, Menu } from "antd";
import logo from "../../../img/logo.svg";
import { Link } from "gatsby";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ...props } = this.props;
    const { isMobile } = props;

    delete props.isMobile;

    return (
      <React.Fragment>
        {!isMobile && (
          <Popover overlayClassName="info-popover" content={content}>
            <Link to="/">
              <img width="160px" src={logo} alt="img" />
            </Link>
          </Popover>
        )}

        {isMobile && (
          <Link to="/">
            <img width="160px" src={logo} alt="img" />
          </Link>
        )}
      </React.Fragment>
    );
  }
}

export default Logo;
