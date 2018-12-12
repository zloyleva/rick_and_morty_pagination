import React from 'react';
import {HeroWrapperComponent} from "../../components/HeroWrapper";

export class SinglePersonagePage  extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			personage: {}
		}
	}
	
	componentDidMount() {
		this.fetchPersonageDetail();
	}
	
	fetchPersonageDetail(){
		fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
			.then(res => res.json())
			.then(res => {
				this.setState({
					personage: res
				});
			});
	}
	
	render() {
		const {personage} = this.state;
		return (
			<div>
				<HeroWrapperComponent
					title={personage.name}
					subtile={"Hey, did you ever want to hold a Terry fold?"}
					hiddenSubtile={"I got one right here, grab\tmy terry flap"}
				/>
				<section className="Home__ShowcaseWrapper">
					<div className="Home__ShowcaseInner">
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
							</div>
						</article>
					</div>
				</section>
			</div>
		);
	}
}