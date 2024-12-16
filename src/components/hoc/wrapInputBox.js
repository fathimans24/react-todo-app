import KeyCode from 'keycode-js';
import { compose, withState, withHandlers } from 'recompose';

export default compose(

    withState('value', 'setValue', (props) => {
        console.log('got props', props);
        return props.value || '';
    }),
    withState('dueDate', 'setDueDate', ''),

    withHandlers({

        handleKeyUp: ({ addNew, setValue, setDueDate, value, dueDate }) => (e) => {
            const text = e.target.value.trim();

            if (e.keyCode === KeyCode.KEY_RETURN && text) {
                addNew({ text, dueDate }); 
                setValue('');
                setDueDate(''); 
            }
        },

        
        handleChange: ({ setValue }) => (e) => {
            setValue(e.target.value);
        },


        handleDueDateChange: ({ setDueDate }) => (e) => {
            setDueDate(e.target.value);
        },
    })
);
