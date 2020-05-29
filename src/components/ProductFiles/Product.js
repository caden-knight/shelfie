import React, { Component } from 'react';

export default class ProductFiles extends Component {
	constructor() {
		super();
		this.state = {
			inventory: []
		}
	}

	render() {
		//console.log(this.props.id);
		return (
			<div>
				<h4> {this.props.name} </h4>
				<h5> {this.props.price} </h5>
				<h4>{this.props.img} </h4>
				<button onClick={() => this.props.rmProduct(this.props.id)}>Delete</button>
			</div>
		);
	}
}
