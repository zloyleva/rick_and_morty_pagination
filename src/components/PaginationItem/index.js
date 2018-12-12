import React from 'react';
// import "./style.css";

export class PaginationItem extends React.Component{
	render() {
		const {title} = this.props
		if(false){
			return null;
		}
		return (
			<li className="page-item">
				<a className="page-link" href="#">{title}</a>
			</li>
		);
	}
}