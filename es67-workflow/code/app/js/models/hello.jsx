import React from 'react';
import '../../css/component.css';
import '../../scss/test.scss';

export default class Hello extends React.Component {
	render() {
		return (
			<div>
				<div className="avatar" />
				<h2>hello, React!</h2>
			</div>
		)
	}
}
