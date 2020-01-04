import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

export default function SignIn() {
  const classes = useStyles();

  class SignUpIn extends Component {
    state = {
      email: "",
      password: ""
    };

    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;

      if (name === "password") {
        value = value.substring(0, 15);
      }
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.email || !this.state.password) {
        alert("Fill out your email addresss and password please!");
      } else if (this.state.password.length < 6) {
        alert(
          `Choose a more secure password ${this.state.email}`
        );
      } else {
        alert(`Hello ${this.state.email}`);
      }

      this.setState({
        email: "",
        password: ""
      });
    };
    render() {
      return (
        <div>
          {/* <Nav /> */}
          <Jumbotron />
          <Container>
            <Row>
              <Col size="md-12">
                <form>
                  <Container>
                    <Row>
                      <Col size="xs-9 sm-10">
                        <Input
                          name="email"
                          value={this.state.handleInputChange}
                          type="email"
                          onChange={this.handleInputChange}
                          placeholder="email address"
                        />
                        <Input
                          name="password"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          type="password"
                          placeholder="password"
                        />
                      </Col>

                    </Row>
                    <Button
                      onClick={this.handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                      Login
                      </Button>

               return (
    <Container component="main" maxWidth="xs">
                      <CssBaseline />
                      <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                          <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                          Sign in
        </Typography>
                        <form className={classes.form} noValidate>
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                          />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                          />
                          <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                          />
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                          >
                            Sign In
          </Button>
                          <Grid container>
                            <Grid item xs>
                              <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                              <Link href={{}} variant="body2">
                                {"Don't have an account? Sign Up"}
                              </Link>
                            </Grid>
                          </Grid>
                        </form>
                      </div>
                      <Box mt={8}>
                        <Copyright />
                      </Box>
                    </Container>
                    
                    );
                  }
