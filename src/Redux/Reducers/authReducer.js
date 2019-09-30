const INITIAL_STATE = {
    isSignedIn : null,
    updated: null
};


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {...state, isSignedIn : true, profile : action.payload};
        case 'SIGN_OUT':
            return {...state, isSignedIn : false};
        case 'SUCC_UPDATE_USER':
            alert("User unformation updated successfully");
            return {...state, updated : true};
        case 'FAIL_UPDATE_USER':
            alert("Unable to save user unformation");
            return {...state, updated : false};
        default:
            return state;
    }
}