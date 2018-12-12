import React from 'react';
import {Link} from "react-router-dom";

import './style.css';

export class PersonageItem extends React.Component{
	render() {
		const {personage} = this.props;
		return (
			<article className="CharacterCard__Wrapper">
				<div data="card header" className="CharacterCard__ImgWrapper">
					<div className="card-image">
						<img src={personage.image} alt={personage.name} />
					</div>
					<div className="CharacterCard__Title">
						<h2 className="CharacterCard__Name">{personage.name}</h2>
						<p className="CharacterCard__Description">id: {personage.id}</p>
					</div>
				</div>
				<div data="card info" className="CharacterCard__InfoWrapper">
					<div className="CharacterCard__TextWrapper">
						<span>STATUS</span><p>{personage.status}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>SPECIES</span><p>{personage.species}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>GENDER</span><p>{personage.gender}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>ORIGIN</span><p>{personage.origin.name}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<span>LAST LOCATION</span><p>{personage.location.name}</p>
					</div>
					<div className="CharacterCard__TextWrapper">
						<Link to={`personage/${personage.id}`}>Show more</Link>
					</div>
				</div>
			</article>
		);
	}
}
