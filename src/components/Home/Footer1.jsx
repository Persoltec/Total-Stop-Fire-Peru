import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col,List,Avatar,Icon   } from 'antd';
import MapInfo from '../../img/MapInfo.png'


const info = [
  {
    title: 'Dirección',
    info: 'C. Monte Abeto 995 Urb. Monterrico SurSantiago de surco - Lima Perú',
  },
  {
    title: 'Móvil',
    info: '+51 920600227',
  },
  {
    title: 'Correo electrónico:',
    info: 'informes@totalstopfireperu.com:',
  },
  {
    title: 'Sitio Web',
    info: 'www.totalstopfireperu.com',
  },
];

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1',
  };
 

  render() {
    const { ...props } = this.props;
    
    delete props.isMobile;
    
    return (
      <div className= 'home-page-wrapper footer1-wrapper'>
       <OverPack className= 'footer1' playScale= {0.2}>
        
        <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            className= 'home-page'
          >   
           
<Col key="block0" className= 'block' span={8}>
<h2>Nosotros</h2>
    <List
      size="small"
      header={<div>Header</div>}
      bordered
      dataSource={data}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
</Col>

<Col key="block1" className= 'block' span={8}>
    <List 
     style={{ backgroundImage: `url(${MapInfo})` }}
    className="contact-info-widget"
    itemLayout="horizontal"
    dataSource={info}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={  <Avatar shape="square" size="large" icon="pushpin" />}
          title={item.title}
          description={item.info}
        />
      </List.Item>
    )}
  />,
</Col>

<Col key="block2" className= 'block' span={8}>
    <List
      size="small"
      header={<div>Header</div>}
      bordered
      dataSource={data}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
</Col>

 


      
     
    </QueueAnim>
     </OverPack>  
      </div>
    );
  }
}

export default Footer;
