import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MailOutline from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import Lock from "@material-ui/icons/Lock";
import Person from "@material-ui/icons/Person";
import fire from "./config/firebase";
import history from "./config/history";
import { Redirect } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      redirect: false,
      loading: false,
    };
  }

  passwordOn = (e) => {
    let password = e.target.value;

    this.setState({ password: password });
  };

  emailOn = (e) => {
    let email = e.target.value;

    this.setState({ email: email });
  };

  submitOn = (e) => {
    this.signup(e);
  };

  nameOn = (e) => {
    let name = e.target.value;

    this.setState({ username: name });
  };

  confirmPasswordOn = (e) => {
    let confirmPass = e.target.value;

    this.setState({ password2: confirmPass });
  };

  signup = () => {
    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;
    let passwordConfirm = this.state.password2;

    if (password === "" || email === "" || passwordConfirm === "") {
      console.log("empty submit");
    } else {
      if (password !== passwordConfirm) {
        console.log("passwords not matching", password, passwordConfirm);
      } else {
        this.setState({
          loading: true
        });
        fire
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            var user = fire.auth().currentUser;

            user.updateProfile({
              displayName: username,
            });
          })
          .then(() => {
            console.log("user created succeful");
            this.setState({
              redirect: true,
            });
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              console.log(error.message);
            } else {
              console.log(error.message);
            }
          });
      }
    }
  };

  render() {
    if (this.state.redirect) {
      console.log("redirect func started", this.state.redirect);
      const location = {
        pathname: "/",
      };
      return <Redirect to={location} />;
    }

    // if (this.state.loading) {
    //   return <CircularProgress color="secondary" />;
    // }

    return (
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <Paper
            style={{
              marginTop: 30,
              padding: 20,
              justify: "center",
            }}
          >
            <div className="login">
              <Typography color="primary" variant="subtitle1">
                CREATE ACCOUNT TODAY
              </Typography>
              <Typography variant="subtitle1" alignItems="center">
                Sign in to your account to proceed
              </Typography>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Person color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Username"
                    onChange={(e) => this.nameOn(e)}
                    required
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <MailOutline color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Email address"
                    onChange={(e) => this.emailOn(e)}
                    required
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Lock color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Password"
                    type="password"
                    onChange={(e) => this.passwordOn(e)}
                    required
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Lock color="primary" />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Confirm Password"
                    onChange={(e) => this.confirmPasswordOn(e)}
                    req
                    type="password"
                    required
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => this.submitOn(e)}
                style={{
                  width: "30%",
                  margin: 20,
                }}
              >
                CREATE ACCOUNT
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Signup;
