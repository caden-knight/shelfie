import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components//Form/Form';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			inventory: [],
			currentlySelected: null
		}
		this.componentDidMount = this.componentDidMount.bind(this)
	}
	componentDidMount() {
		axios.get('/api/inventory')
		.then(res => {
			this.setState({inventory: res.data})
		})
		.catch(err => console.log(err))
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Dashboard 
				inventory={this.state.inventory}
				getInv={this.componentDidMount}
				/>

				<Form 
				getInv={this.componentDidMount}
				inventory={this.state.inventory}
				curSel={this.state.currentlySelected}
				/>
			</div>
		);
	}
}

export default App;
