
const INITIAL_STATE = {
    isLoading : null,
    message : null,
    open: null,
    show: null,
    todo: {},
    toastDetails: {}
};

const reducerFunctions =  {
    ENABLE_LOADING_MASK: (state, action) => {return {...state, isLoading : true, message : action.payload}},
    DISABLE_LOADING_MASK: (state, action) => { return {...state, isLoading : false};},
    OPEN_MODAL: (state, action) => { return {...state, open : true, todo: action.payload};},
    CLOSE_MODAL: (state, action) => { return {...state, open : false};},
    OPEN_CONFIRM: (state, action) => { return {...state, show : true, content: action.payload};},
    CLOSE_CONFIRM: (state, action) => { return {...state, show : false};},
    FIRE_TOAST: (state, action) => { return {...state,  toastDetails : action.payload};}
};


export default (state = INITIAL_STATE, action) => {

    if(reducerFunctions[action.type]){
        let results = reducerFunctions[action.type](state, action);
        return results;
    }
    return state;
    
    // const {type, payload} = action;
    // switch(type){
    //     case 'ENABLE_LOADING_MASK':
    //         return {...state, isLoading : true, message : payload};
    //     case 'DISABLE_LOADING_MASK':
    //         return {...state, isLoading : false};
    //     case 'OPEN_MODAL':
    //         return {...state, open : true, todo: payload};
    //     case 'CLOSE_MODAL':
    //         return {...state, open : false};
    //     case 'OPEN_CONFIRM':
    //         return {...state, show : true, content: payload};
    //     case 'CLOSE_CONFIRM':
    //         return {...state, show : false};
    //     case 'FIRE_TOAST':
    //         return {...state,  toastDetails : payload};
    //     default:
    //         return state;
    // }
}