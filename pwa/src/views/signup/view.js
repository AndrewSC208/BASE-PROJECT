import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typeography from '@material-ui/core/Typography';

import SignupForm from '../../components/signupForm';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class SignUpView extends Component {
    render() {
        const {classes, toDashboard, toHome} = this.props;
        
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typeography variant="display4">Sign Up</Typeography>
                        <SignupForm 
                            next={toDashboard} 
                            cancel={toHome} 
                            // when ready update the signup method
                            // signup={}
                            />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(SignUpView);