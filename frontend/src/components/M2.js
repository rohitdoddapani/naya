import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { InputLabel } from '@material-ui/core';

export class M2 extends Component {
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
                    <InputLabel className="main-t">What kind of materials can you work with?</InputLabel>
                    <select value={values.materials} onChange={handleChange('materials')}>
                        <option value=""></option>
                        <option value="Wood">Wood</option>
                        <option value="Metal">Metal</option>
                        <option value="Glass">Glass</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Concrete">Concrete</option>
                        <option value="others">Others</option>
                    </select>
                    <br />
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

export default M2;
