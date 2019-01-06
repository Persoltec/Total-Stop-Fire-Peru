import React from "react";
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout";
import Slider from "../components/slider/Slider";
import BrandProducts from "../components/widgets/BrandProducts/BrandProducts";

export default class IndexPage extends React.Component {
	render() {
		return (
			<Layout inicio>
				<Slider />
				<BrandProducts />
			</Layout>
		);
	}
}
