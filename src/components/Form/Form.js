import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			price: 0,
			imgurl: '',
			cancelClicked: false,
			editingId: null
		};
        this.nameChange = this.nameChange.bind(this);
        this.cancel = this.cancel.bind(this)
	}
	componentDidUpdate(prevState) {
		
	}
	imageChange(image) {
		this.setState({
			imgurl: image.target.value
		});
	}
	nameChange(name) {
		this.setState({
			name: name.target.value
		});
	}
	priceChange(price) {
		this.setState({
			price: price.target.value
		});
    }
	
	clearInputs(){
		this.setState({
			name: '',
			price: 0,
			imgurl: '',
			cancelClicked: false
		});
	}
	cancel() {
        const {cancelClicked} = this.state
        this.setState({cancelClicked: !cancelClicked})
		

		if (this.state.cancelClicked) {
			this.setState({
				name: '',
				price: 0,
                imgurl: '',
				cancelClicked: false,
				inventory: this.props.inventory
			});
		}
	}
	addProduct(name, price, img){
		axios.post('/api/product', {name, price, img} )
		.then(res => {
			this.setState({
				name: res.data,
				price: res.data,
				imgurl: res.data
				
			})
		})
		this.getInv()
	}
	render() {
		console.log(this.state.inventory)
		const {name, price, imgurl} = this.state
		return (
			<form>
				<h3>
					Image URL
					<input onChange={(image) => this.imageChange(image)} className="img-url" />
				</h3>
				<h3>
					Product Name
					<input onChange={(name) => this.nameChange(name)} className="productName" />
				</h3>
				<h3>
					Price
					<input onChange={(price) => this.priceChange(price)} className="price" />
				</h3>
				<button onClick={() => this.addProduct(name, price, imgurl)} className="btn btn-add">Add</button>
				<button  onClick={() => this.cancel()} className="btn btn-cancel">Cancel</button>
			</form>
		);
	}
}
