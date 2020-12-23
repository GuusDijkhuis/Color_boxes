import React, { Component } from 'react';
import './ColorBoxList.css';

import ColorBox from './ColorBox';

class BlockList extends Component {
	static defaultProps = {
		numBoxes: 18,
		colors: [
			'IndianRed',
			'Black', 
			'Tomato', 
			'MediumVioletRed', 
			'Yellow', 
			'Turquoise', 
			'LightBlue', 
			'Tan', 
			'DarkGray', 
			'Greenyellow', 
			'Teal'
		]
	};
	render() {
		const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
			<ColorBox colors={this.props.colors} />
		));
		return (
			<div className="ColorBoxList">
				{boxes}
			</div>
		);
	}
}

export default BlockList;