import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../redux/tuto'

function NewCakeContainer(props) {
	const [number, setNumber] = useState(1)
	return (
		<div>
			<h2>Number of cakes - {props.numOfCakes}</h2>
			<input type='text' value={number} onChange={e => setNumber(e.target.value)} />
			<button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
		buyCake: number => dispatch(buyCake(number))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewCakeContainer)
