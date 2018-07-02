import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typeography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {
                code: 5,
                text: '',
                lable: '',
                action: null
            }
        }
    }

    handleChange = name => event => {
        let error = {
            code: 0,
            text: '',
            label: '',
            action: null
        }

        this.setState({
            error,
            [name]: event.target.value,
        });
    };

    onLogin = () => {
        const { email, password, error } = this.state;
        const { login, next } = this.props;

        if(error.code === 0) {
            login({ email, password });
        }

        if(error.code === 0) {
            // todo - make sure that this does not route until we get a 200 from server
            next();
        } else {
            //todo - handle error
        }
    };

    onCancel = () => {
        const { cancel } = this.props;

        this.setState({
            email: '',
            password: '',
        }, cancel())
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typeography variant="display4">Sign In</Typeography>
                    <form className={classes.formContainer} noValidate autoComplete="off">
                        <TextField
                            id="username"
                            label="Email"
                            placeholder="friend@example.com"
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                            onChange={this.handleChange('email')}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            margin="normal"
                            type="password"
                            fullWidth
                            onChange={this.handleChange('password')}
                        />
                        <Button variant="raised" className={classes.button} onClick={this.onCancel}>Cancel</Button>
                        <Button variant="raised" className={classes.button} onClick={this.onLogin}>Login</Button>
                    </form>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(LoginForm);
