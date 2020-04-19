const INITIAL_STATE = {
    list : null
};

const reducerFunctions =  {
    SUCC_GET_TODO: (state, action) => {return {...state, list : action.payload};},
    FAIL_GET_TODO: (state, action) => { return {...state, list : []};}
};


export default (state = INITIAL_STATE, action) => {

    if(reducerFunctions[action.type]){
        let results = reducerFunctions[action.type](state, action);
        return results;
    }
    return state;
    // switch(type){
    //     case 'SUCC_GET_TODO':
    //         return {...state, list : payload};
    //     case 'FAIL_GET_TODO':
    //         return {...state, list : []};
    //     default:
    //         return state;
    // }
}