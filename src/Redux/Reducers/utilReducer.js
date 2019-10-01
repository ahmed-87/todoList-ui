
const INITIAL_STATE = {
    isLoading : null,
    message : null,
    open: null,
    show: null,
    todo: {},
    toastDetails: {}
};


export default (state = INITIAL_STATE, action) => {

    const {type, payload} = action;
    switch(type){
        case 'ENABLE_LOADING_MASK':
            return {...state, isLoading : true, message : payload};
        case 'DISABLE_LOADING_MASK':
            return {...state, isLoading : false};
        case 'OPEN_MODAL':
            return {...state, open : true, todo: payload};
        case 'CLOSE_MODAL':
            return {...state, open : false};
        case 'OPEN_CONFIRM':
            return {...state, show : true, content: payload};
        case 'CLOSE_CONFIRM':
            return {...state, show : false};
        case 'FIRE_TOAST':
            return {...state,  toastDetails : payload};
        default:
            return state;
    }
}