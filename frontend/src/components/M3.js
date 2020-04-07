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
    lastB = e => {
        this.props.lastPageB();
    }
    lastM = e => {
        this.props.lastPageM();
    }
    render() {
        const { values, handleChange } = this.props;
        let button;
        if(this.props.fieldValue() === 'both'){
            button = <div><RaisedButton label="Previous" style={styles.button} onClick={this.back} />
                    <RaisedButton label="Next" style={styles.button} onClick={this.lastB} /></div>;
        }else{
            button = <div><RaisedButton label="Previous" style={styles.button} onClick={this.back} />
                    <RaisedButton label="Continue" style={styles.button} onClick={this.lastM} /></div>; 
        }
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter the User Details" />
                    <InputLabel className="main-t">Where are your based out of?</InputLabel><br />
                    <TextField 
                      hintText=""
                      floatingLabelText="Location"
                      onChange={ handleChange('location') } 
                      defaultValue={values.location}
                    /><br />
                    {button}
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
