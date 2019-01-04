import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col,List,Avatar   } from 'antd';
import MapInfo from '../../../img/MapInfo.png'
import Personal from '../../../img/personal.png'
import OfficeHours from '../../widgets/OfficeHours/OfficeHours.jsx'
import ContactInfo from '../../widgets/ContactInfo/ContactInfo.jsx'

 
class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1',
  };
 

  render() {
    const { ...props } = this.props;
    const {isMobile   } = props;
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
         
           
         

{!isMobile && (
<Col xs={{span: 24}} md={{span: 8}}  key="block0" className= 'block'   >
 <img   src={Personal} alt="img" />
</Col>
 )}

<Col xs={{span: 24}} md={{span: 8}} key="block1" className= 'block' >
  <ContactInfo/>
    

</Col>
{!isMobile && (
<Col xs={{span: 24}} md={{span: 8}}  key="block2" className= 'block' >
    

<OfficeHours/>
 
</Col>
)}
    </QueueAnim>

<TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            className= 'copyright-wrapper' 
          >
            <div className= 'home-page'>
              <div className= 'copyright'>
                <span>
        ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
              </div>
            </div>
          </TweenOne>


     </OverPack>  
      </div>
    );
  }
}

export default Footer;
