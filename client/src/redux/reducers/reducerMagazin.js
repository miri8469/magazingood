import React from 'react'
import { produce } from 'immer'
import execHandler from '../reducerUtils'


const initialState = {
    magazin : {}

}

const magazin = {
    createMagazin(state, action) {
        debugger
        state.magazin.push(action.payload);
    },
    getMagazin(state, action) {
        debugger
        state.magazin = action.payload
    },
    

}

export default produce
((state, action) => execHandler(state, action, magazin), initialState)