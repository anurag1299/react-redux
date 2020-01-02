import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'


function HooksCakeContainer() {
    const [number,setNumber] = useState(1)
    const noOfCakes = useSelector(state => {return state.cake.noOfCakes})
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {noOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} cakes</button>
        </div>
    )
}

export default HooksCakeContainer
