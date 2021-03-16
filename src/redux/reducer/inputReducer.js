const initialState = {
    name:[],
}

const inputReducer = (state = initialState,action) =>{
 switch(action.type){
     case 'SET_NEW_NAME': return{
        ...state,
        name:[...state.name,action.payload].reverse(),
     }

     default: return state
 }
}


export default inputReducer