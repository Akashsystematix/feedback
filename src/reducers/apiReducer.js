import { 
	API_REQUEST,
	API_SUCCESS,
	API_FAIL
} from '../actions/actionTypes';

const INITIAL_STATE = {
      loading: false,
      data: [],
      error: ''
  };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case API_REQUEST:
			return { ...state, loading: true, error: '' };
		case API_SUCCESS:
			console.log(action.payload);
			return { ...state, loading: false, error: '', data: state.data.concat(action.payload) };
		case API_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
		return state;
	}
};