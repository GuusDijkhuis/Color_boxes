import React, { Component } from 'react';
import { choice } from './helpers';
import './ColorBox.css';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "Teal"
		}
		this.handleClick = this.handleClick.bind(this);
	}
	pickColor() {
		let newColor;

		do {
			newColor = choice(this.props.colors)
		} while (newColor === this.state.color)

		this.setState({
			color: newColor
		})
	}
	handleClick() {
		this.pickColor();
	}
	render() {
		return (
			<div className={`ColorBox ${this.state.color}`} onClick={this.handleClick} >
			</div>
		);
	}
}

export default ColorBox;
