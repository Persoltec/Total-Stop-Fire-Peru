import React from "react";
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout";
import Slider from "../components/slider/Slider";
import ContentBlock from "../components/layout/ContentBlock/ContentBlock";
import BrandProducts from "../components/widgets/BrandProducts/BrandProducts";
import EnterpriseFeature from "../components/widgets/EnterpriseFeature/EnterpriseFeature";
import { enquireScreen } from 'enquire-js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});


export default class IndexPage extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

 componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }



	render() {
		return ( 
			<Layout inicio>
				<Slider />
					<BrandProducts Titulo="Marcas líderes" isMobile={this.state.isMobile}/>
				<EnterpriseFeature/>
			</Layout>
		); 
	}
}
