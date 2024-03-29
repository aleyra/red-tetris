import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../redux/tuto'

function CakeContainer(props) {
	return (
		<div>
			<h2>Number of cakes - {props.numOfCakes}</h2>
			<button onClick={props.buyCake}>Buy Cake</button>
		</div>
	)
}

const mapStateToProps = state => { // in react docs, it can be referenced as selector
	return {
		numOfCakes: state.cake.numOfCakes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCake: () => dispatch(buyCake())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CakeContainer)
