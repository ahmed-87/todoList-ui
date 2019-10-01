import React  from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import {connect} from 'react-redux';

class ToDoConfirm extends React.Component {
  handleConfirm = () => {
      const {closeConfirm, handleConfirm, todo, userId} = this.props
    closeConfirm();
    handleConfirm(todo, userId);
  }

  handleCancel = () => {
    this.props.closeConfirm();
  }

  render() {
      const {open, confirmHeader, confirmMessage, confirmButton} = this.props;
      return (
        <div>
          <Confirm
            open={open}
            header={confirmHeader}
            content={confirmMessage}
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
            confirmButton={<Button>{confirmButton.value}</Button>}
          />
        </div>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeConfirm : () => dispatch({type: "CLOSE_CONFIRM"})
    }
}

const mapStateToProps = (state) => {
    return  {
        open: state.util.show
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoConfirm);