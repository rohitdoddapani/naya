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
    backd = e => {
        this.props.backDouble();
    }
    render() {
        const { values, handleChange } = this.props;
        let button;
        console.log(this.props.fieldValue());
        if(this.props.fieldValue() === 'both'){
            button = <div><RaisedButton label="Previous" style={styles.button} onClick={this.backd} />
                    <RaisedButton label="Next" style={styles.button} onClick={this.continue} /></div>;
        }else{
            button = <div><RaisedButton label="Previous" style={styles.button} onClick={this.back} />
                    <RaisedButton label="Next" style={styles.button} onClick={this.continue} /></div>; 
        }
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter the User Details" />
                    <InputLabel className="main-t">How many projects on average do you work on every month?</InputLabel><br />
                    <TextField 
                      hintText=""
                      floatingLabelText="Projects Count"
                      onChange={ handleChange('m_project_cou') } 
                      defaultValue={values.m_project_cou}
                    /><br />
                    { button }
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
