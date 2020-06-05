import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



export class Success extends Component {
    // net or continue button
    continue = e => {
        e.preventDefault();
        // Process form 
        this.props.nextStep();
    }
    // back button
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        
        return (
          <MuiThemeProvider >
              <React.Fragment>
                  <AppBar title="Success" />
                  <h1>Thank You For Your Submission</h1>
                  <p>You Will get email withe further instructions</p>
              </React.Fragment>
          </MuiThemeProvider>
        );
    }
}

export default Success;
