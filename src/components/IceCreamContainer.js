import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'


function IceCreamContainer() {
    const noOfIceCream = useSelector(state => {return state.iceCream.noOfIceCream})
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Ice Cream - {noOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default IceCreamContainer
