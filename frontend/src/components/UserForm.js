import React, { Component } from 'react';
import DesignerDetails from './DesignerDetails';
import MakerDeatils from './MakerDetails';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { InputLabel } from '@material-ui/core';
import D1 from './D1';
import D2 from './D2';
import D3 from './D3';
import M1 from './M1';
import M2 from './M2';
import M3 from './M3';
import LastD from './lastD';
import LastM from './LastM';
import LastB from './LastB';
import '../style.css';


export class UserForm extends Component {
    state = {
        step:1,
        field:'',
        email:'',
        password:'',
        d_project_cou:'',
        m_project_cou:'',
        describes:'',
        education:'',
        materials:'',
        location:'',
    }

    // go to nextStep
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step+1
        });
    }

    // go to prevStep
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step-1
        });
    }
    home = () => {
        const { step } = this.state;
        this.setState({
            step: 1
        });
    }
    fieldValue = () => {
        return this.state.field
    }
    jumpDouble = () => {
        const { step } = this.state;
        this.setState({
            step: 8
        });
    }
    backDouble = () => {
        const { step } = this.state;
        this.setState({
            step: 5
        });
    }
    lastPageD = () => {
        this.setState({
            step:6
        })
    }
    lastPageM = () => {
        this.setState({
            step:11
        })
    }
    lastPageB = () => {
        this.setState({
            step:12
        })
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const {step} = this.state;
        const { email, password,d_project_cou,m_project_cou,describes,education,materials,location } = this.state;
        const values = {email, password,d_project_cou,m_project_cou,describes,education,materials,location }

        switch(step){
            case 2:
                return(
                    <DesignerDetails 
                        nextStep={this.nextStep }
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                     />
                )
            case 3:
                return(
                    <D1 
                        nextStep={this.nextStep }
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                     />
                )
            case 4:
                return(
                    <D2 
                        nextStep={this.nextStep }
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                     />
                )
            case 5:
                return(
                    <D3 
                        nextStep={this.nextStep }
                        prevStep={this.prevStep}
                        fieldValue={this.fieldValue}
                        jumpDouble={this.jumpDouble}
                        lastPageD={this.lastPageD}
                        handleChange={this.handleChange}
                        values={values}
                     />
                )
            case 6:
                return(
                    <LastD
                        prevStep={this.prevStep}
                        fieldValue={this.fieldValue}
                        handleChange={this.handleChange}
                        values={values}
                     />
                )
            case 7:
                return(
                    <MakerDeatils 
                        nextStep={this.nextStep }
                        prevStep={this.prevStep}
                        home={this.home}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 8:
                return(
                    <M1 
                        nextStep={this.nextStep }
                        prevStep={this.prevStep}
                        backDouble={this.backDouble}
                        fieldValue={this.fieldValue}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 9:
                return(
                    <M2 
                        nextStep={this.nextStep }
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 10:
                return(
                    <M3 
                        nextStep={this.nextStep }
                        prevStep={this.prevStep}
                        lastPageM={this.lastPageM}
                        lastPageB={this.lastPageB}
                        fieldValue={this.fieldValue}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 11:
                return(
                    <LastM 
                        prevStep={this.prevStep}
                        fieldValue={this.fieldValue}
                        lastPageM={this.lastPageM}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 12:
                return(
                    <LastB 
                        prevStep={this.prevStep}
                        fieldValue={this.fieldValue}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            }
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <InputLabel className="main-t">What do you want to register as?</InputLabel><br />
                    <RaisedButton label="Designer" style={styles.button} 
                        onClick={() => this.setState({
                            step: 2,
                            field: 'Designer'
                        })} />
                    <RaisedButton label="Maker" style={styles.button} 
                        onClick={() => this.setState({
                            step: 7,
                            field: 'Maker'
                        })} />
                    <RaisedButton label="BOTH" style={styles.button} 
                        onClick={() => this.setState({
                            step: 2,
                            field: 'both'
                        })} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default UserForm


const styles = {
    button: {
        margin: 15
    }
}