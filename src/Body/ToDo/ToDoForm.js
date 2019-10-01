import React from 'react';
import {connect} from "react-redux";
import {addTodo, updateTodo} from "../../Redux/Actions/todo";

import { 
    Modal,
    Form , 
    Checkbox, 
    Button} from 'semantic-ui-react';


const ModalContent = (props) => {

    const { id, title, description, createdByUserId, completed} = props.todo;

    return (
      <Modal.Content >
        <Modal.Description>
            <Form  onSubmit = {props.handleSubmit} >
                <input type="hidden" value={id}/>
                <input type="hidden" value={createdByUserId}/>
                <Form.Field>
                    <label>Title</label>
                    <input type="text"  placeholder="Title" defaultValue={title} required />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <textarea rows="2" defaultValue={description} required/>
                </Form.Field>
                <Form.Field>
                    <Checkbox toggle  defaultChecked={completed} />
                    <label>Is ToDo Completed</label>
                </Form.Field>
                <div className="actions">
                    <Button color="blue" type="submit">Submit</Button>
                    <Button onClick={props.cancelSubmit} >Cancel</Button>
                </div>
            </Form>
        </Modal.Description>
      </Modal.Content>
    )
}

const FormModal = (props) => {
    return (
        <Modal  open={props.open}>
            <Modal.Header>To Do Form</Modal.Header>
           {props.children} 
        </Modal>
    )
}

class  ToDoForm extends React.Component {

    onCancelSubmit = () => {
        this.props.closeModal();
    }

    onHandleSubmit = (event) => {
        // event.preventDefault();
        const {target} = event;
        let todo = {
            id: target[0].value,
            createdByUserId: target[1].value,
            title: target[2].value,
            description: target[3].value,
            completed: target[4].checked,
        }
        console.log(todo);

        if(todo.id){
            this.props.updateTodo(todo, this.props.userId);
        }else{
            this.props.addTodo(todo, this.props.userId);
        }

    }

    render() {
        const {open, todo} = this.props;
        return (
           <FormModal open={open} >
                <ModalContent 
                    todo={todo}
                    handleSubmit={this.onHandleSubmit}
                    cancelSubmit={this.onCancelSubmit}
                />
           </FormModal>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (todo, userId) => dispatch(addTodo(todo, userId)),
        updateTodo: (todo, userId) => dispatch(updateTodo(todo, userId)),
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.util.open,
        todo: state.util.todo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);