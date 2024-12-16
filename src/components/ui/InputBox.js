import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, dueDate, handleChange, handleDueDateChange, handleKeyUp } = props;

    return (
        <div>
            <input
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New Task"
            />
            <input
                type="date"
                className="form-control add-due-date"
                value={dueDate}
                onChange={handleDueDateChange}
            />
        </div>
    );
}

export default enhance(InputBox);
