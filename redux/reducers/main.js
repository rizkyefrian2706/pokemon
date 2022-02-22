import * as t from "../types";

const globalState = {
    totalOrder: 0
}

const main = (state = globalState,
 action) => {
     if(action.type === t.PLUS_ORDER){
         return {
             ...state,
             totalOrder: state.totalOrder + 1
         }
     }
     
     if(action.type === t.MINUS_ORDER){
         let totalOrder = 0;
        if(state.totalOrder > 0 ){
            totalOrder =  state.totalOrder - 1;   
        }
        return {
            ...state,
            totalOrder: totalOrder
        }
    }
    return state;
}


export default main;