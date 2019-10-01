import API from '../../API';


export const listMyToDoList = (user_id) => {
    return (dispatch) => { 
        dispatch({type: "ENABLE_LOADING_MASK", payload: "Loading"});
        return API.post("/todo/all", {user_id})
        .then((response) => {
            let toestDetails = {
                type : 'success',
                title : 'Fetch succeeded',
                description : 'ToDo fetched successfully !!!'
            };
            dispatch({
                type : "SUCC_GET_TODO",
                payload : response.data
            });
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
        }).catch((error) => {
            let toestDetails = {
                type : 'error',
                title : 'Fetch failed',
                description : 'Failed to fetch ToDo list :('
            };
            dispatch({
                type : "FAIL_GET_TODO"
            });
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
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
            let toestDetails = {
                type : 'info',
                title : 'ToDo Added',
                description : 'ToDo item added successfully !!!'
            };
            dispatch(listMyToDoList(userId));
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
        }).catch((error) => {
            let toestDetails = {
                type : 'error',
                title : 'Add failed',
                description : 'Failed to add ToDo item :('
            };
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
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
            let toestDetails = {
                type : 'info',
                title : 'ToDo Updated',
                description : 'ToDo item updated successfully !!!'
            };
            dispatch(listMyToDoList(userId));
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
        }).catch((error) => {
            let toestDetails = {
                type : 'error',
                title : 'Update failed',
                description : 'Failed to update ToDo item :('
            };
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
        })
    }
}

export const deleteTodo = (todo, userId) => {
    return (dispatch) => { 
        dispatch({type: "ENABLE_LOADING_MASK", payload: "Deleting"});
        return API.delete("/todo/delete/" + todo.id)
        .then((response) => {
            let toestDetails = {
                type : 'warning',
                title : 'ToDo Deleted',
                description : 'ToDo item deleted successfully !!!'
            };
            dispatch(listMyToDoList(userId));
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
        }).catch((error) => {
            dispatch({type: "DISABLE_LOADING_MASK"});
            let toestDetails = {
                type : 'error',
                title : 'Delete failed',
                description : 'Failed to delete ToDo item :('
            };
            dispatch({type: "DISABLE_LOADING_MASK"});
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
        })
    }
}

export const markDone = (todo, userId) => {
    return (dispatch) => { 
        todo.completed = true;
        dispatch(updateTodo(todo, userId));
    }
}