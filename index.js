const redux = require('redux'); /** Imported Redux */

const createStore = redux.createStore; /** took the store function, without invoked */

// Initial State

const initialState = {
	counter: 0
}

// Reducer


const rootReducer = (state = initialState, action ) => { /** Reducer takes to parameter, state, and action */
	
	// don't mutate the original value 
	// the dispatching value is here, we getting

	if( action.type === 'INC' )
	{
		return {
			...state,
			counter: state.counter + 1
		}
	}

	// for another dispatch
	
	if( action.type === 'ADD' )
	{
		// copy the state here, and update the counter value, and return the whole object

		return {
			...state,
			counter: state.counter + action.value
		};
	}
	

	return state; /** Return the state */
};


// Create Store

const store = createStore( rootReducer ); // Creating store, it take reducer as arguments

console.log( store.getState()  ); // Output: { counter: 0 }



// Subscription will trigger, whenever state changes

store.subscribe( () => { // subscribe takes function as argument
        console.log('[subscription]', store.getState()); // don't ever get the state outside from subscribe
} );




// Dispatching Action, 

store.dispatch({ type: 'INC'}); /** it also takes argument, but Oject. and must have type  */

store.dispatch({ type: 'ADD', value: 10 }); /** defined value here */

console.log(store.getState()); // Output : { counter: 11 }

