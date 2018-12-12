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
	
	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps",nextProps.match.params.page);
		this.fetchPersonages(nextProps.match.params.page);
	}
	
	setNumberOfPageToLoad(setPage=null){
		if(setPage){
			return `?page=${setPage}`;
		}
		return (this.props.match == null || !"page" in this.props.match.params)?"":`?page=${this.props.match.params.page}`;
	}
	
	fetchPersonages(setPage=null){
		const page = this.setNumberOfPageToLoad(setPage);
		console.log("fetchPersonages: ",page);
		fetch(`https://rickandmortyapi.com/api/character/${page}`)
			.then(res => res.json())
			.then(res => {
				if("results" in res){
					this.setState({
						personages: res.results,
						info: res.info,
					})
				}
				
				console.log("fetchPersonages: >>",this.props.match.params.page);
			})
			.catch(err => {
				console.log(err);
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
				<Pagination onReloadPersonages={this.fetchPersonages} info={info} currentPage={currentPage}/>
			</div>
		);
	}
}