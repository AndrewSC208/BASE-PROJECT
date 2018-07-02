import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typeography from '@material-ui/core/Typography';
import MainNavBar from '../../components/MainNavBar'

const styles = theme => ({

});

class SignUpView extends Component {
    render() {
        const { classes, toLogin, toSignup } = this.props;
        return (
            <div>
                <MainNavBar links={[toLogin, toSignup]}/>
                <Typeography variant="display4">Home</Typeography>
            </div>
        )
    }
}

export default withStyles(styles)(SignUpView);