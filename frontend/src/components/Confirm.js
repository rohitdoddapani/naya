import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { InputLabel } from '@material-ui/core';
import TextField from 'material-ui/TextField';
import axios from 'axios';


export class Confirm extends Component {
    
    state= {
        field: ''
    }

    handleClick = (e) => {
        const value = e.target.value;
        this.setState({
            field: value
        });
        
        const payload = {
            field: this.state.field
        }
    };

    

    render() {
        console.log(this.state);
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <InputLabel>What do you want to register as?</InputLabel><br />
                    <RaisedButton style={styles.button} name="designer" value="designer"
                        onClick={this.handleClick} ><InputLabel>designer</InputLabel></RaisedButton>
                    <RaisedButton style={styles.button} 
                        onClick={
                            () =>{
                                this.setState({
                                    field: 'maker'
                                });
                                const payload = {
                                    field: this.state.field
                                }
                                axios({
                                    url: '/api/items',
                                    method: 'POST',
                                    data: payload
                                }).then(() => { console.log('success'); })
                                .catch(() => { console.log('error'); })
                            }
                         } >
                        <label>designer</label>
                    </RaisedButton>
                    <RaisedButton label="BOTH" style={styles.button} 
                        onClick={() => this.setState({
                            field: 'both'
                        })} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm


const styles = {
    button: {
        margin: 15
    }
}