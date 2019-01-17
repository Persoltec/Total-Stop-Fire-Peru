import React from "react";
import { findDOMNode } from "react-dom";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import VisibilitySensor from "react-visibility-sensor";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";
import Slider from "../../slider/Slider";
import { Link } from "gatsby";
//import Logo from "../Logo/Logo.jsx";
import logo from "../../../img/logo.svg";

class Header extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    // const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    //  // Check if there are any navbar burgers
    // if ($navbarBurgers.length > 0) {
    //   // Add a click event on each of them
    //   $navbarBurgers.forEach( el => {
    //     el.addEventListener('click', () => {
    //       // Get the target from the "data-target" attribute
    //       const target = el.dataset.target;
    //       const $target = document.getElementById(target);
    //       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //       el.classList.toggle('is-active');
    //       $target.classList.toggle('is-active');
    //     });
    //   });
    // }
  }

  state = {
    fixed: false,
    MovilMenu: false,
    OpenCloseMenu: false
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  OpenClose = () => {
    this.setState({
      OpenCloseMenu: !this.state.OpenCloseMenu
    });
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed header-white is-white" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  render() {
    const { ...props } = this.props;
    const { titulo } = props;

    const { fixed, OpenCloseMenu } = this.state;

    return (
      <React.Fragment>
        <Drawer
          className="menu-movil"
          level= '#contenido'
          placement="right"
          showMask="true"
          onMaskClick={this.OpenClose}
          open={OpenCloseMenu}
          width="250px"
          mode="inline"
        >
        <div class="container">
          <aside class="menu">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li>
                <Link to="/" className="">
                  Inicio
                </Link>
              </li>
   <li>
                <Link to="nosotros" className="">
                  Nosotros
                </Link>
              </li>
                 <li>
                <Link to="productos" className="">
                  Productos
                </Link>
              </li>
                 <li>
                <Link to="servicios" className="is-active">
                  Servicios
                </Link>

     <ul>
                  <li>
                     <Link to="servicios-mantenimiento" className="">
                  Mantenimiento
                </Link>
                  </li>
                  <li>
                     <Link to="servicios-recarga-de-extintores" className="">
                  Recarga de Extintores
                </Link>
                  </li>
                  <li>
                     <Link to="servicios-inspecciones" className="">
                  Inspecciones  
                </Link>
                  </li>
                    <li>
                     <Link to="servicios-capacitacion" className="">
                  Capacitación
                </Link>
                  </li>
                </ul>

   </li>
   <li>
                <Link to="/" className="">
                  Blog
                </Link>
              </li>
   <li>
                <Link to="contactanos" className="">
                  Contáctanos
                </Link>
              </li>
                          
            </ul>
           
            
          </aside>
          </div>
        </Drawer>

        <section
          id="header"
          className={`hero ${
            titulo ? " is-medium" : " is-fullheight"
          } is-dark is-bold header`}
        >
          <div class="hero-head">
            <nav
              className={`navbar  is-fixed-top ${this.getHeaderSize()}`}
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
                    data-target="header"
                    onClick={this.OpenClose}
                  >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                  </a>
                </div>

                <div id="navMenu" class="navbar-menu has-text-centered-touch">
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
                    <Link
                      to="contactanos"
                      className="navbar-item is-hidden-desktop"
                    >
                      Contáctenos
                    </Link>
                  </div>
                </div>

                <div class="navbar-end is-hidden-touch">
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
                <h1 class="title">{titulo}</h1>

                <nav
                  class="breadcrumb is-centered is-small"
                  aria-label="breadcrumbs"
                >
                  <ul>
                    <li>
                      <a href="#">Inicio</a>
                    </li>
                    <li class="is-active has-text-primary">
                      <a href="#" aria-current="page">
                        {titulo}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

          <div class="hero-foot has-text-centered">
            <VisibilitySensor onChange={this.visibilitySensorChange}>
              <div class="container">
                <a href="#widget-contact-form">
                  <Icon size={48} icon={ic_keyboard_arrow_down} />
                </a>
              </div>
            </VisibilitySensor>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
