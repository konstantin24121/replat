const initialState = {
	counter: 4,
};

export default function(state = initialState, action){
	switch (action.type){
	case 'INC':
		return {...state, counter: ++state.counter}
	case 'DEC':
		return {...state, counter: --state.counter}
	default:
		return state;
	}
}
