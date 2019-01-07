import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col, List, Avatar,Icon,Breadcrumb  } from "antd";
import MapPixel from "../../../img/MapPixel.svg";
import { Link } from "gatsby";
class Title extends React.Component {
  static defaultProps = {
    className: "footer1"
  };

  render() {
    const { ...props } = this.props;
    const { isMobile,titulo } = props;
    

    delete props.isMobile;
    delete props.titulo;

    return (
      <div
        className="title-header"
        style={{
          background: `url(${MapPixel}) no-repeat scroll center center/cover border-box, linear-gradient(60deg, #ed1c24 0, #d9b382 100%) no-repeat scroll center center/cover`
        }}
      >
      
<div className="banner-text">
<h1>{titulo}</h1>
<p className="description">Total Stop - Seguridad contra incendio</p>
  <Breadcrumb>
    <Breadcrumb.Item>
     <Icon type="home" />
      <span><Link to="/">Inicio</Link></span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>{titulo}</Breadcrumb.Item>
  </Breadcrumb>
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
