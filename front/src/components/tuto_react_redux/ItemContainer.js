import React from 'react'
import { connect } from 'react-redux'

function ItemContainer(props) {
	return (
		<div>
			<h2>Item - {props.item} </h2>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => { //ownProps is the props of the component itself
	const itemState = ownProps.cake
		? state.cake.numOfCakes
		: state.iceCream.numOfIceCreams
	
		return {
			item: itemState
		}
}

export default connect(mapStateToProps)(ItemContainer)
