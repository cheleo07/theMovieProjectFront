import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


export default function CheckboxList() {


    return (
        <FormGroup row>
            <FormControlLabel
                control={<GreenCheckbox/>}
                label="Checkbox 1"
            />
            <FormControlLabel
                control={<Checkbox name="checkedC" />}
                label="Checkbox 2" />
            <FormControlLabel
                control={<GreenCheckbox/>}
                label="Checkbox 3"
            />
        </FormGroup>
    );
}
