import React from 'react';
import './style.css';

export class HeroWrapperComponent  extends React.Component{
	render() {
		const{title, subtile, hiddenSubtile} = this.props;
		return (
			<section className="Home__HeroWrapper">
				<h1	className="Home__Title">{title}</h1>
				<div className="Home__SubTitleWrapper">
					<h2	className="Home__SubTitle">{subtile}</h2>
					<h2	className="Home__HiddenSubTitle">{hiddenSubtile}</h2>
				</div>
			</section>
		);
	}
}