import React from 'react';
import { findDOMNode } from 'react-dom';
import TweenOne from 'rc-tween-one';
//import classNames from 'classnames';
import { Divider ,Button ,Menu } from 'antd';
import logo from '../../img/logo.svg'
import { Link } from 'gatsby'
const { Item } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      menuHeight: 0,
    };
  }

  phoneClick = () => {
    const menu = findDOMNode(this.menu);
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
      menuHeight: phoneOpen ? menu.scrollHeight : 0,
    });
  };

  render() {
    const { ...props } = this.props;
    const {isMobile   } = props;

    delete props.isMobile;
    delete props.isFirstScreen;
    const { menuHeight, phoneOpen } = this.state;
    
 
    // const headerClassName = classNames({
    //   clearfix: true,
    //   'home-nav-white': !isFirstScreen,
    // });

    return (
      <TweenOne
      
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        className= 'header1 home-page-wrapper'
       
      >

        <div
            
          className={`${'home-page jqauf4uk7uk-editor_css'}${phoneOpen ? ' open' : ''}`}

        >
          <TweenOne
            animation={{
              x: -30,
              delay: 100,
              type: 'from',
              ease: 'easeOutQuad',
            }}
            className='header1-logo' 
          >
          <Link to ="/">
            <img width="160px" src={logo} alt="img" />
            </Link >
          </TweenOne>

          {isMobile && (
            <div
               className= 'header1-mobile-menu'
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            className= 'header1-menu'
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            ref={(c) => {
              this.menu = c;
            }}
            style={isMobile ? { height: menuHeight  } : null}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['0']}
              theme={isMobile ? 'dark' : 'default'}
            >
              

  <Item>
        <Link to="/" >Inicio</Link>
  </Item>

 <Item>
        <Link to="/" >Nosotros</Link>
  </Item>

 <Item>
        <Link to="products" >Productos</Link> 
  </Item>

 <Item>
        <Link to="/" >Servicios</Link>
  </Item>
 <Item>
        <Link>Blog</Link>
  </Item>

 <span className="escribenos">
        <Divider type="vertical" />

        <Button type="primary" icon="phone" >Contáctenos</Button>
      </span>

            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
