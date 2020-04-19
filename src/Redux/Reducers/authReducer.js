const INITIAL_STATE = {
    isSignedIn : null,
    profile: null
};

const reducerFunctions =  {
    SIGN_IN: (state, action) => {return {...state, isSignedIn : true, profile : action.payload}},
    SIGN_OUT: (state, action) => { return {...state, isSignedIn : false};}
};


export default (state = INITIAL_STATE, action) => {

    if(reducerFunctions[action.type]){
        let results = reducerFunctions[action.type](state, action);
        return results;
    }
    return state;
    
    // switch(action.type){
    //     case 'SIGN_IN':
    //         return {...state, isSignedIn : true, profile : action.payload};
    //     case 'SIGN_OUT':
    //         return {...state, isSignedIn : false};
    //     default:
    //         return state;
    // }
}