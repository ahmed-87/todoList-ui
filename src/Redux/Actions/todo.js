import API from '../../API';


export const listMyToDoList = (user_id) => {
    return (dispatch) => { 
        dispatch({type: "ENABLE_LOADING_MASK", payload: "Loading"});
        return API.post("/todo/all", {user_id})
        .then((response) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({
                type : "SUCC_GET_TODO",
                payload : response.data
            });
        }).catch((error) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({
                type : "FAIL_GET_TODO"
            });
        })
    }
}

export const addTodo = (todo, userId) => {
    return (dispatch) => { 
        todo.createdByUserId = userId;
        todo.updatedByUserId = userId;
       
        dispatch({type: "CLOSE_MODAL"});
        dispatch({type: "ENABLE_LOADING_MASK", payload: "Saving"});
        return API.post("/todo/add", todo)
        .then((response) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch(listMyToDoList(userId));
        }).catch((error) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({
                type : "FAIL_ADD_TODO",
            });
        })
    }
}

export const updateTodo = (todo, userId) => {
    return (dispatch) => { 
        todo.updatedByUserId = userId;
       
        dispatch({type: "CLOSE_MODAL"});
        dispatch({type: "ENABLE_LOADING_MASK", payload: "Saving"});
        return API.put("/todo/update", todo)
        .then((response) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch(listMyToDoList(userId));
        }).catch((error) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            // dispatch({
            //     type : "FAIL_ADD_TODO",
            // });
        })
    }
}

export const deleteTodo = (todo, userId) => {
    return (dispatch) => { 
        dispatch({type: "ENABLE_LOADING_MASK", payload: "Loading"});
        return API.delete("/todo/delete/" + todo.id)
        .then((response) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch(listMyToDoList(userId));
        }).catch((error) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            // dispatch({
            //     type : "FAIL_ADD_TODO",
            // });
        })
    }
}