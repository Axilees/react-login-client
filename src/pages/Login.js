import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {
    Container,
    Typography,
    Paper,
    FormControl,
    InputLabel,
    Checkbox,
    Input,
    FormControlLabel,
    Button
} from '@material-ui/core';

const styles = theme => ({
        main: {
            width: 'auto',
            display: 'block', // Fix IE 11 issue.
            marginLeft: theme.spacing.unit * 3,
            marginRight: theme.spacing.unit * 3,
            [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
                width: 400,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        typo: {
            marginTop: theme.spacing.unit * 3,
        },
        root: {
            flexGrow: 1,
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '90%', // Fix IE 11 issue.
            marginTop: theme.spacing.unit,
        },
        fcl:{
            alignItems: 'left'
        },
        submit: {
            marginTop: theme.spacing.unit * 3,
            marginBottom: theme.spacing.unit * 3,
        },
    })
;

class Login extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Container component="main" maxWidth="sm">
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5" className={classes.typo}>
                        Sign in
                    </Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password"/>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                            className={classes.fcl}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.props.login}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </Container>
        )
    }
}

export default withStyles(styles)(Login);
