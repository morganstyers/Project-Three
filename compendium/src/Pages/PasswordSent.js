import React from 'react';
import Avatar from '../../node_modules/@material-ui/core/Avatar';
import CssBaseline from '../../node_modules/@material-ui/core/CssBaseline';
import Grid from '../../node_modules/@material-ui/core/Grid';
import Box from '../../node_modules/@material-ui/core/Box';
import LockOutlinedIcon from '../../node_modules/@material-ui/icons/LockOutlined';
import Typography from '../../node_modules/@material-ui/core/Typography';
import { makeStyles } from '../../node_modules/@material-ui/core/styles';
import Container from '../../node_modules/@material-ui/core/Container';
import { Link } from "react-router-dom"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Compendium
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function PasswordSent() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Your password has been sent to the email provided.
                        <Grid >
                        <Link to="/" variant="body2">
                            Sign In
                            </Link>
                    </Grid>
                </Typography>



                <Grid container>


                </Grid>

            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
