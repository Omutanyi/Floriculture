import React, { Component } from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import MailOutline from "@material-ui/icons/MailOutline";
import Button from "@material-ui/core/Button";
import Lock from "@material-ui/icons/Lock";

class Login extends Component {
    render() {
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
            <Typography
            color="primary"
                variant="subtitle1"
              >
                LOGIN
              </Typography>
              <Typography
                variant="subtitle1"
              alignItems="center"
              >
                Sign in to your account to proceed
              </Typography>

              <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <MailOutline color="primary" />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email address" />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Lock color="primary" />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email address" />
          </Grid>
        </Grid>

        <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    width: '30%',
                    margin: 20,
                  }}
                >
                  LOGIN
                </Button>

            </div>
            </Paper>
          </Grid>
            </Grid>
        )
    }
}

export default Login
