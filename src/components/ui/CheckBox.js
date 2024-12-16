import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }

    handleChange(e) {
        const {checked} = e.target;
        const confirmAction = window.confirm('Do you want to mark this task as completed?');
        
        if (confirmAction) {
            this.setState({ checked });
            this.props.onChange(checked);
        } else {
            e.target.checked = this.state.checked;
        }
    }

    render() {
        return (
            <input 
                type="checkbox" 
                checked={this.state.checked} 
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}

export default CheckBox;
