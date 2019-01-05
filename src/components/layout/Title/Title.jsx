import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col, List, Avatar,Icon } from "antd";
import MapPixel from "../../../img/MapPixel.svg";

class Title extends React.Component {
  static defaultProps = {
    className: "footer1"
  };

  render() {
    const { ...props } = this.props;
    const { isMobile } = props;
    delete props.isMobile;

    return (
      <div
        className="title-header"
        style={{
          background: `url(${MapPixel}) no-repeat scroll center center/cover border-box, linear-gradient(60deg, #ed1c24 0, #d9b382 100%) no-repeat scroll center center/cover`
        }}
      >
      
<div class="banner-text">
<h1>Payments API</h1>
<p>Aggregation of all the ne univermplified API.</p>
</div>

<TweenOne
          animation={{
            y: "+=15",
            yoyo: true,
            repeat: -1,
            duration: 1000
          }}
          className="bottom-icon"
          
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}

export default Title;
