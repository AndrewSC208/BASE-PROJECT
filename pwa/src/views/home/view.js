import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import MainNavBar from '../../components/MainNavBar'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class SignUpView extends Component {
    render() {
        const { classes, toLogin, toSignup } = this.props;
        return (
            <div>
                <MainNavBar />

                <h1>Home</h1>
                <Button variant="raised" className={classes.button} onClick={toSignup}>Sign up</Button>
                <Button variant="raised" className={classes.button} onClick={toLogin}>Login</Button>
            </div>
        )
    }
}

export default withStyles(styles)(SignUpView);