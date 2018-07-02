import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/coreIconButton';
import CloseIcon from 'material-ui-icons/Close';

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    }
});

class SnackBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClick = () => {
        // this will be an dispatched action
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        // this will be an dispatched action
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}

                // change this to point at redux state:
                open={this.state.open}
                autoHideDuration={6000}

                // change this to point to redux state:
                onClose={this.handleClose}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}

                message={<span id="message-id">Note archived</span>}

                action={[

                    // change this to point to redux state:
                    <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>UNDO</Button>,
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={this.handleClose}>
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        )
    }
}

const SnackBar = withStyles(styles)(SnackBarView);

export { SnackBar }



