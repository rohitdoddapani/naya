import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { InputLabel } from '@material-ui/core';

export class D2 extends Component {
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
                    <InputLabel className="main-t">Which of the following best describes you?</InputLabel>
                    <select value={values.describes} onChange={handleChange('describes')}>
                        <option value=""></option>
                        <option value="FurnitureDesigner">Furniture Designer</option>
                        <option value="Architech">Architech</option>
                        <option value="InteriorDesigner">Interior Designer</option>
                        <option value="IndustrialDesigner">Industrial Designer</option>
                        <option value="DesignerMaker">Designer Maker</option>
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

export default D2;
