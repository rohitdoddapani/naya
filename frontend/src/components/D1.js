import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { InputLabel } from '@material-ui/core';

export class D1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        // e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter the User Details" />
                    <InputLabel className="main-t">How much time can you spend on Naya projects per week?</InputLabel><br />
                    <TextField 
                      hintText=""
                      floatingLabelText="time"
                      onChange={ handleChange('d_project_cou') } 
                      defaultValue={values.d_project_cou}
                    /><br />
                    <RaisedButton label="Previous" style={styles.button} onClick={this.back} />
                    <RaisedButton label="Next" style={styles.button} onClick={this.continue} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button: {
        margin: 15
    }
}

export default D1;
