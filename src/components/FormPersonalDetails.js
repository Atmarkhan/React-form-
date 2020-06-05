import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




export class FormPesonalDetails extends Component {
    // continue button 
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    // back button
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange} = this.props;
        return (
          <MuiThemeProvider >
              <React.Fragment>
                  <AppBar title="Enter personal Detaile" />
                  <TextField 
                  hintText="Enter Your Occupation" 
                  floatingLabelText="Occupation"
                  onChange={handleChange('occupation')} 
                  defaultValue={values.occupition}/>
                  <br/>

                  <TextField 
                  hintText="Enter Your City" 
                  floatingLabelText="City"
                  onChange={handleChange('city')} 
                  defaultValue={values.city}/>
                  <br/>

                  <TextField 
                  hintText="Enter YourBio" 
                  floatingLabelText="bio"
                  onChange={handleChange('bio')} 
                  defaultValue={values.bio}/>
                  <br/>
                  <RaisedButton
                  label="Continue"
                  primary={true}
                  style={styles.button}
                  onClick={this.continue}
                  />
                   <RaisedButton
                  label="Back"
                  primary={false}
                  style={styles.button}
                  onClick={this.back}
                  />

                
              </React.Fragment>
          </MuiThemeProvider>
        );
    }
}
const styles  = {
    button: {
        margin: 15
    }
};
export default FormPesonalDetails;
