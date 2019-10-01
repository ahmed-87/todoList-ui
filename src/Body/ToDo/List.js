import React from 'react';
import {Segment, Item, Button, Dropdown} from 'semantic-ui-react';

const status = (isCompleted) => {
    return isCompleted ? "Completed" : "Not Completed"
}


const ToDoList = (props) => {
    let content = (
        <Segment textAlign="center">
            There is no todo list available, please click <b>Add</b> button on the top to add.
        </Segment> 
    );


    if(props.todoList && props.todoList.length > 0){
        let list = props.todoList.map((todo, index) => {
            
            let options = [
                { key: 'delete', icon: 'delete', text: 'Remove', onClick: () => props.handleDelete(todo)}
            ];

            if(!todo.completed){
                options.push(
                    { 
                        key: 'done', 
                        icon: 'checkmark', 
                        text: 'Mark Done', 
                        onClick: () => props.handleMarkDone(todo)
                    },
                 );
            }
            return (
                <Item key={index}>
                    <Item.Content verticalAlign="top" key={index}>

                        <Item.Header>
                            {todo.title} -  {status(todo.completed)}
                        </Item.Header>
                        <Item.Description>
                            <p>{todo.description}</p>
                        </Item.Description>
                        <Item.Extra>
                            <Button.Group  color='blue' floated="right">
                                <Button  onClick = {() => props.openModal(todo)} >Edit</Button>
                                <Dropdown
                                className='button icon'
                                floating
                                options={options}
                                trigger={<React.Fragment />}
                                >
                                </Dropdown>
                            </Button.Group>
                        </Item.Extra>
                        
                    </Item.Content>
                </Item>
            )
        })
        content = (
            <Item.Group divided>
                {list}
            </Item.Group>
        );
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default ToDoList;