const INITIAL_STATE = {
    list : null
};

export default (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case 'SUCC_GET_TODO':
            return {...state, list : payload};
        case 'FAIL_GET_TODO':
            return {...state, list : []};
        default:
            return state;
    }
}