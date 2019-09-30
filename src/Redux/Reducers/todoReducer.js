const INITIAL_STATE = {
    list : null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SUCC_GET_TODO':
            return {...state, list : action.payload};
        case 'FAIL_GET_TODO':
            return {...state, list : []};
        // case 'SUCC_ADD_TODO':
        //     return {...state, list : action.payload};
        // case 'FAIL_ADD_TODO':
        //     return {...state, list : []};
        default:
            return state;
    }
}