import React, { Component } from 'react';

export default class ProductFiles extends Component {
	constructor() {
		super();
	}

	render() {
		console.log(this.props.id);
		return (
			<div>
				<h4> {this.props.name} </h4>
				<h5> {this.props.price} </h5>
				<img src={this.props.img} />
				<button onClick={() => this.props.rmProduct(this.props.id)}>Delete</button>
			</div>
		);
	}
}
