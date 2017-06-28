import React, {Component} from 'react'
import ParadiseOrDeath from './ParadiseOrDeath'

class Toggle extends Component{
	constructor(props) {
		super(props);
		this.state = {
			toggleOn: true
		}
		this.name = "Rob"
		// console.log(this.state.toggleOn)
		console.log("Class this: ")
		console.log(this);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		console.log("handleClick this:")
		console.log(this);
		if(!this.state.toggleOn){
			var pic = "http://d98uffoa56ghc.cloudfront.net/wp-content/uploads/2017/03/20102512/20-Tropical-Paradise-Vacation-Ideas-5.jpg"
		}else{
			var pic = "http://visityakutia.com/wp-content/gallery/valleyofdeathyakutiasiberiarussia/dolinasmertiolguidahyakutia_01.jpg"
		}
		this.setState({
			toggleOn: !this.state.toggleOn,
			pic: pic
		})
	}

	render(){
		if(this.state.toggleOn){
			var isToggleOn = "On"
		}else{
			var isToggleOn = "Off"
		}
		return(
			<div>
				<button onClick={this.handleClick}>
					{isToggleOn}
				</button>
				<ParadiseOrDeath pic={this.state.pic} />
			</div>
		)
	}
}

export default Toggle;