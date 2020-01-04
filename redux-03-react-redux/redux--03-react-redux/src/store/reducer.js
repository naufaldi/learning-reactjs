const initialState = {
		counter: 0,
		results: []
}

const reducer = (state = initialState, action) => {
    /* Check if action Increment
    'INCREMENT is action from Counter'
    */
    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // }
    // if(action.type === 'DECREMENT'){
    //     return{
    //         counter: state.counter - 1
    //     }
    // }
    // if( action.type == 'ADD'){
    //     return {
    //         // action ya dari action Redux, val dari variable
    //         counter: state.counter + action.val
    //     }
    // }
    // if(action.type === "SUBTRACK"){
    //     return {
    //         counter: state.counter - action.val
    //     }
    // }
    // return state;

    // If using Swtich case
    switch(action.type){
				case 'INCREMENT' :
				return {
					...state,
					counter: state.counter + 1
			}
				case 'DECREMENT' :
						return{
							...state,
							counter: state.counter - 1
					}
				case 'SUBTRACK' :
						return {
							...state,
							counter: state.counter - action.val
					}
				case 'ADD' :
						return {
							// action ya dari action Redux, val dari variable
							...state,
							counter: state.counter + action.val
					}
				case 'STORE_RESULT':
					return {
						...state,
						results: state.results.concat({id: new Date(),value: state.count})
					}
				case 'DELETE_RESULT':
					return {
						...state,

					}
					default:
						return state;
    }
};

export default reducer;