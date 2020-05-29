import React, { Component } from 'react';
import ProductFiles from '../ProductFiles/Product';
import axios from 'axios';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inventory: this.props.inventory
		}
		this.removeProduct = this.removeProduct.bind(this)
	}

	removeProduct(id) {
		axios.delete(`/api/product/${id}`)
		.then(res => {
			this.setState({inventory: res.data})
		})
		this.props.getInv()
	}

	render() {
		console.log(this.props)
		const products = this.props.inventory.map(product => {
			return (
			<ProductFiles 
			key={product.id}
			id={product.id} 
			name={product.name}
			price={product.price}
			img={product.imgurl}
			rmProduct={this.removeProduct}
			getInv={this.props.getInv}
			/>
			)
		})
		return (
			<div>
				Dashboard
				{products}
			</div>
		);
	}
}
