import React from 'react';
import { findDOMNode } from 'react-dom';
import TweenOne from 'rc-tween-one';
import classNames from 'classnames';
import { Divider ,Button ,Menu, Icon } from 'antd';
import logo from '../../img/logo.svg'

const { Item, SubMenu } = Menu;

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
    const { dataSource, isMobile , isFirstScreen } = props;
    delete props.dataSource;
    delete props.isMobile;
    delete props.isFirstScreen;
    const { menuHeight, phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const navChildren = Object.keys(navData).map((key, i) => (
      <Item {...navData[key]} key={i.toString()}>
        <a
          {...navData[key].a}
          href={navData[key].a.link}
          target={navData[key].a.blank && '_blank'}
        >
          {navData[key].a.children}
        </a>
      </Item>
    ));

    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !isFirstScreen,
    });

    navChildren.push(
      <span className="escribenos">
        <Divider type="vertical" />

        <Button type="primary" icon="phone" >Contáctenos</Button>
      </span>
       
       
    );
    return (
      <TweenOne
      
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
          className={headerClassName}
        >
          <TweenOne
            animation={{
              x: -30,
              delay: 100,
              type: 'from',
              ease: 'easeOutQuad',
            }}
            {...dataSource.logo}
          >
            <img width="160px
            " src={logo} alt="img" />
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
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
            {...dataSource.Menu}
            animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            ref={(c) => {
              this.menu = c;
            }}
            style={isMobile ? { height: menuHeight } : null}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['0']}
              theme={isMobile ? 'dark' : 'default'}
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
