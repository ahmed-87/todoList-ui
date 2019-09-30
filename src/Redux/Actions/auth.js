import API from '../../API';

export const updateUser = (userDetails) => {
    return (dispatch) => {
        API.post("/user/update", userDetails)
        .then((response) => {
            return {
                type : "SUCC_UPDATE_USER"
            }
        }).catch((error) => {
            return {
                type : "FAIL_UPDATE_USER"
            }
        })
    }
}

export const signIn = (userProfile) => {
    return {
        type: "SIGN_IN",
        payload: {
            userId: userProfile.getId().substring(8),
            firstName : userProfile.getGivenName(),
            lastName : userProfile.getFamilyName(),
            email : userProfile.getEmail()
        }
    }
}

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}