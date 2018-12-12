import React from 'react';
import "./style.css";
import {PaginationItem} from "../PaginationItem";

export class Pagination extends React.Component{
	render() {
		const {info,currentPage} = this.props;
		if(info == undefined  || Object.keys(info).length === 0 && info.constructor === Object){
			return null;
		}
		return (
			<section className="Pagination__Wrapper">
				<nav aria-label="Page__Navigation">
					<ul className="pagination">
						<PaginationItem title={"Previous"} />
						<PaginationItem title={currentPage} />
						<PaginationItem title={"Next"} />
					</ul>
				</nav>
			</section>
		);
	}
}