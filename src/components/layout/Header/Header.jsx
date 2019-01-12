import React from "react";
import { findDOMNode } from "react-dom";
import { Icon } from 'react-icons-kit'
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down'
//import classNames from 'classnames';

import Slider from "../../slider/Slider";
import { Link } from "gatsby";
//import Logo from "../Logo/Logo.jsx";
import logo from "../../../img/logo.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ...props } = this.props;
    const { isMobile, titulo } = props;

    return ( 
      <React.Fragment>
        <section className={`hero ${titulo ? ' is-medium' : ' is-fullheight'} is-dark is-bold header`} >
          <div class="hero-head">
            <nav
              class="navbar is-transparent is-fixed-top is-dark"
              role="navigation"
              aria-label="main navigation"
            >
              <div class="container">
                <div class="navbar-brand">
                  <Link className="navbar-item" to="/">
                    <img src={logo} />
                  </Link>

                  <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                  >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                  </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <Link to="/" className="navbar-item">
                      Inicio
                    </Link>

                    <Link to="nosotros" className="navbar-item">
                      Nosotros
                    </Link>
                    <Link to="productos" className="navbar-item">
                      Productos
                    </Link>
                    <Link to="servicios" className="navbar-item">
                      Servicios
                    </Link>
                    <Link to="/" className="navbar-item">
                      Blog
                    </Link>
                  </div>
                </div>

                <div class="navbar-end is-hidden-mobile">
                  <div class="navbar-item">
                    <div class="buttons">
                    
                    <Link to="contactanos" className="button is-primary">
                       
                        <strong>Contáctenos</strong>
                      </Link>
                       
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {!titulo && <Slider />}

          {titulo && (
  <div class="hero-body">
    <div class="container  has-text-centered">
      <h1 class="title">
        {titulo}
      </h1>
      <h2 class="subtitle">
        ........................
      </h2>
    </div>
  </div>

            )}

          <div class="hero-foot has-text-centered">
            <div class="container">
<Icon size={48} icon={ic_keyboard_arrow_down}/>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
