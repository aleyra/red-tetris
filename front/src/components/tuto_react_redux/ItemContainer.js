import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../../redux'

function ItemContainer(props) {
	return (
		<div>
			<h2>Item - {props.item} </h2>
			<button onClick={props.buyItem}>Buy Items</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
	const dispatchFunction = ownProps.cake
		? () => dispatch(buyCake())
		: () => dispatch(buyIceCream())

		return {
			buyItem: dispatchFunction
		}
}

export default connect(
	mapStateToProps, //null instead of mapStateToProps if only want to dipatch without subscribe to the store
	mapDispatchToProps
)(ItemContainer)
