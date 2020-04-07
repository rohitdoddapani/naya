import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { InputLabel } from '@material-ui/core';

export class D3 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.jumpDouble();
    }
    back = e => {
        // e.preventDefault();
        this.props.prevStep();
    }
    last = e => {
        this.props.lastPageD();
    }
    render() {
        const { values, handleChange } = this.props;
        let button;
        if(this.props.fieldValue() === 'both'){
            button = <div><RaisedButton label="Previous" style={styles.button} onClick={this.back} />
                    <RaisedButton label="Next" style={styles.button} onClick={this.continue} /></div>;
        }else{
            button = <div><RaisedButton label="Previous" style={styles.button} onClick={this.back} />
                    <RaisedButton label="Continue" style={styles.button} onClick={this.last} /></div>; 
        }
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter the User Details" />
                    <InputLabel className="main-t">Enter any education level/type</InputLabel>
                    <TextField 
                      hintText=""
                      floatingLabelText="Education"
                      onChange={ handleChange('education') } 
                      defaultValue={values.education}
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

export default D3;
