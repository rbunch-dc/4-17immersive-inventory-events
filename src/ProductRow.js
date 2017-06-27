import React from 'react'

function ProductRow(props){
	if(props.randomThing.inStock === true){
		var productClass = "text-success"
	}else{
		var productClass = "text-danger"
	}
	return(
		<tr>
			<td className={productClass}>{props.randomThing.name}</td>
			<td>{props.randomThing.price}</td>
		</tr>
	)
}

export default ProductRow;