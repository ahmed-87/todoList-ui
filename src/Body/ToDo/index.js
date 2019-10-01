import React from 'react';
import List from './List';
import {connect} from 'react-redux';
import {Segment, Container} from 'semantic-ui-react';
import {listMyToDoList, deleteTodo, markDone} from '../../Redux/Actions/todo';
import ToDoForm from './ToDoForm';
import ToDoConfirm from './ToDoConfirm';

class ToDoList extends React.Component {

    state = {
        todo: null,
        confirmButton : {},
        confirmMessage: '',
        confirmHeader: '',
        confirmActionHandler: null
    }

    onHandleConfirmMarkDone = (todo) => {
        this.setState({
            todo: todo,
            confirmButton : {value: "Mark as Done"},
            confirmHeader: 'Confirm Action',
            confirmMessage: 'Are you sure you want to confirm this item as DONE?.',
            handleConfirm: (todo, userId) => this.props.markDone(todo, userId)
        })
        this.props.onOpenConfirm();
    }


    onHandleConfirmDelete = (todo) => {
        this.setState({
            todo: todo,
            confirmButton : {value: "Delete"},
            confirmHeader: 'Confirm Deletion',
            confirmMessage: 'Are you sure you want to delete this item?.',
            handleConfirm: (todo, userId) => this.props.deleteToDo(todo, userId)
        })
        this.props.onOpenConfirm();
    }
    
    componentDidMount() {
        this.props.listMyToDoList(this.props.userId);
    }

    render() {
        const {todoList, userId, onOpenModal, onCloseModal} = this.props;
        return (
            <Container text>
                <Segment raised padded="very">
                     <ToDoConfirm userId={userId} {...this.state}/>
                     <ToDoForm
                        userId={userId}
                        closeModal={onCloseModal}/>
                     <List 
                        todoList={todoList}
                        openModal={onOpenModal}
                        handleMarkDone={this.onHandleConfirmMarkDone}
                        handleDelete={this.onHandleConfirmDelete}
                        />
                </Segment>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        listMyToDoList : (userId) => dispatch(listMyToDoList(userId)),
        deleteToDo : (todo, userId) => dispatch(deleteTodo(todo, userId)),
        markDone : (todo, userId) => dispatch(markDone(todo, userId)),
        onOpenModal : (todo) => dispatch({type: "OPEN_MODAL", payload: todo}),
        onCloseModal : () => dispatch({type: "CLOSE_MODAL"}),
        onOpenConfirm : () => dispatch({type: "OPEN_CONFIRM"})
    }
}

const mapStateToProps = (state) => {
    return {
        todoList : state.todo.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);