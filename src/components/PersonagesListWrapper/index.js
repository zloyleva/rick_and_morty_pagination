import React from 'react';
import "./style.css";
import {PersonageItem} from "../PersonageItem";

export class PersonagesListWrapper extends React.Component{
	
	render() {
		const {personages} = this.props;
		return (
			<section className="Home__ShowcaseWrapper">
				<div className="Home__ShowcaseInner">
					{
						(personages.length)?
						personages.map(personage => <PersonageItem personage={personage} key={personage.id}/>) :
						<div>No personages yet</div>
					}
				</div>
			</section>
		);
	}
}