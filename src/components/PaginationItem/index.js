import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";

export class PaginationItem extends React.Component{
	
	render() {
		const {title,status, link} = this.props
		if(!status && isNaN(title)){
			return null;
		}
		return (
			<li className="page-item">
				{
					isNaN(title)?(
						<Link to={link} className="page-link" >{title}</Link>
					):(
						<div className="page-link">{title}</div>
					)
				}
				
			</li>
		);
	}
}