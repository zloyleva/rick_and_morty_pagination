import React from 'react';
import {HeroWrapperComponent} from "../../components/HeroWrapper";
import {PersonagesListWrapper} from "../../components/PersonagesListWrapper";
import {Pagination} from "../../components/Pagination";

export class PersonagesListPage  extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			personages: []
		};
	}
	
	componentDidMount() {
		this.fetchPersonages();
	}
	
	fetchPersonages(){
		
		const page = (this.props.match == null || !"page" in this.props.match.params)?"":`?page=${this.props.match.params.page}`;
		console.log(page);
		
		fetch(`https://rickandmortyapi.com/api/character/${page}`)
			.then(res => res.json())
			.then(res => {
				if("results" in res){
					this.setState({
						personages: res.results,
						info: res.info,
					})
				}
			});
	}
	
	render() {
		const {personages, info} = this.state;
		const currentPage = this.props.match.params.page;
		return (
			<div>
				<HeroWrapperComponent
					title={"The Rick and Morty API"}
					subtile={"Hey, did you ever want to hold a Terry fold?"}
					hiddenSubtile={"I got one right here, grab\tmy terry flap"}
				/>
				<PersonagesListWrapper personages={personages} />
				<Pagination info={info} currentPage={currentPage}/>
			</div>
		);
	}
}