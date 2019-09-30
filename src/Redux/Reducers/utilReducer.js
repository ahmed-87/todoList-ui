
const INITIAL_STATE = {
    isLoading : null
};


export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case 'ENABLE_LOADING_MASK':
            return {...state, isLoading : true, message : action.payload};
        case 'DISABLE_LOADING_MASK':
            return {...state, isLoading : false};
        case 'OPEN_MODAL':
            return {...state, open : true, todo: action.payload || {}};
        case 'CLOSE_MODAL':
            return {...state, open : false};
        case 'OPEN_CONFIRM':
            return {...state, show : true, content: action.payload};
        case 'CLOSE_CONFIRM':
            return {...state, show : false};
        default:
            return state;
    }
}