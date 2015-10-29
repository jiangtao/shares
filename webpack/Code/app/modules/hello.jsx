import React from 'react';
import '../css/component.css';
import '../css/a.scss';
import '../css/b.less';

export default class Hello extends React.Component {
	render() {
		return (
			<div>
				<div className="avatar" />
				<h1>Hello from Component Hello</h1>
			</div>
		)
	}
}
