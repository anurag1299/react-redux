import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'


function HooksCakeContainer() {
    const noOfCakes = useSelector(state => {return state.cake.noOfCakes})
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {noOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
        </div>
    )
}

export default HooksCakeContainer
