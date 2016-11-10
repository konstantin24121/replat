const initialState = {
	counter: 1,
};

export default function(state = initialState, action){
	switch (action.type){
	case 'INC':
		return {...state, counter: state.counter + 1}
	case 'DEC':
		return {...state, counter: state.counter - 1}
	default:
		return state;
	}
}
