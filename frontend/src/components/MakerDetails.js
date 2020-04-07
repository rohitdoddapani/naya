import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { InputLabel } from '@material-ui/core';

export class MakerDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        // e.preventDefault();
        this.props.home();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter the User Details" />
                    <TextField 
                      hintText="Enter your Email"
                      floatingLabelText="Email"
                      onChange={ handleChange('email') } 
                      defaultValue={values.email}
                    /><br />
                    <TextField 
                      hintText="Enter your Password"
                      floatingLabelText="Password"
                      onChange={ handleChange('password') } 
                      defaultValue={values.password}
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

export default MakerDetails
