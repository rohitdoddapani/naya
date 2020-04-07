import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { InputLabel } from '@material-ui/core';
import axios from 'axios';

export class LastB extends Component {
    back = e => {
        // e.preventDefault();
        this.props.prevStep();
    }
    save = e => {
        console.log(this.props.fieldValue());
        const payload = {
            field: this.props.fieldValue(),
            email: this.props.values.email,
            password: this.props.values.password,
            d_project_cou: this.props.values.d_project_cou,
            describes: this.props.values.describes,
            education: this.props.values.education,
            m_project_cou: this.props.values.m_project_cou,
            materials: this.props.values.materials,
            location: this.props.values.location
        }
        axios({
            url: '/api/items/both',
            method: 'POST',
            data: payload
        }).then(() => { console.log('success'); })
        .catch(() => { console.log('error'); })

        alert('Your deatils have been recorded into database');
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <div>
                    <div className="person">
                        <h1>Your Email:</h1>
                        <p>{values.email}</p>
                    </div>
                    </div>
                    <div>
                        <div className="person">
                            <h1>How many projects on average do you work on every month?</h1>
                            <p>{values.m_project_cou}</p>
                        </div >
                    </div>
                    <div className="col-md-12">
                        <div className="person">
                            <h1>What kind of materials can you work with?</h1>
                            <p>{values.materials}</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="person">
                            <h1>Where are your based out of?</h1>
                            <p>{values.location}</p>
                        </div>
                    </div>
                    <div>
                        <div className="person">
                            <h1>Your Email:</h1>
                            <p>{values.email}</p>
                        </div>
                    </div>
                    <div>
                        <div className="person">
                            <h1>How much time can you spend on Naya projects per week?</h1>
                            <p>{values.d_project_cou}</p>
                        </div >
                    </div>
                    <div className="col-md-12">
                        <div className="person">
                            <h1>Which of the following best describes you?</h1>
                            <p>{values.describes}</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="person">
                            <h1>education level/type</h1>
                            <p>{values.education}</p>
                        </div>
                    </div>
                    <br />
                    <RaisedButton label="back" style={styles.button} onClick={this.back} />
                    <RaisedButton label="Confirm Details" style={styles.button} onClick={this.save} />
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

export default LastB;
