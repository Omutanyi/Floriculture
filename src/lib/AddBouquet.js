import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Description from "@material-ui/icons/Description";
import Collections from "@material-ui/icons/Collections";
import EmojiNature from "@material-ui/icons/EmojiNature";
import PostAdd from "@material-ui/icons/PostAdd";
import InsertPhoto from "@material-ui/icons/InsertPhoto";
import fire from "./config/firebase";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class AddBouquet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      collection: "",
      description: "",
      price: "",
      image: "",
      open: false,
      added: false,
    };
  }

  addBouquet = () => {
    // console.log("init", this.state.image);
    let name = this.state.name;
    let collection = this.state.collection;
    let description = this.state.description;
    let price = this.state.price;
    let image = this.state.image;

    var storageRef = fire.storage().ref();

    var myUpload = storageRef.child("images/" + name).put(image);

    myUpload
      .then((snapshot) => {
        console.log("url", snapshot._delegate.metadata.fullPath);
        // return snapshot.ref.getDownloadUrl();
        let db = fire.firestore();
        db.collection(collection).add({
          name: name,
          collection: collection,
          description: description,
          price: price,
          image: snapshot._delegate.metadata.fullPath,
        });
      })
      .then(() => {
        console.log("Data stored in Firestore!");
        this.setState({
      added: true,
    });
      });
  };

   handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      added: false,
    });
  };

  render() {
    return (
      <Grid container xs={12}>
        <Grid
          item
          xs={12}
          justify="center"
          style={{
            marginTop: 30,
          }}
        >
          <Paper
            style={{
              padding: 20,
            }}
          >
            <div className="searchDiv">
              <Typography variant="subtitle1">
                Add a bouquet to the catalogue by filling out the form below
              </Typography>
              <FormControl className="searchForm">
                <Grid
                  container
                  spacing={1}
                  alignItems="flex-end"
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Grid item>
                    <EmojiNature color="primary" />
                  </Grid>
                  <Grid
                    item
                    style={{
                      width: "80%",
                    }}
                  >
                    <TextField
                      id="input-with-icon-grid"
                      label="Bouquet name"
                      onChange={(e) => this.setState({ name: e.target.value })}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={1}
                  alignItems="flex-end"
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Grid item>
                    <Collections color="primary" />
                  </Grid>
                  <Grid
                    item
                    style={{
                      width: "80%",
                    }}
                  >
                    <TextField
                      id="input-with-icon-grid"
                      label="Collection"
                      onChange={(e) =>
                        this.setState({ collection: e.target.value })
                      }
                      style={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={1}
                  alignItems="flex-end"
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Grid item>
                    <Description color="primary" />
                  </Grid>
                  <Grid
                    item
                    style={{
                      width: "80%",
                    }}
                  >
                    <TextField
                      id="input-with-icon-grid"
                      label="Bouquet Description"
                      onChange={(e) =>
                        this.setState({ description: e.target.value })
                      }
                      style={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={1}
                  alignItems="flex-end"
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Grid item>
                    <MonetizationOn color="primary" />
                  </Grid>
                  <Grid
                    item
                    style={{
                      width: "80%",
                    }}
                  >
                    <TextField
                      id="input-with-icon-grid"
                      type="number"
                      label="Price"
                      onChange={(e) => this.setState({ price: e.target.value })}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  spacing={1}
                  alignItems="flex-end"
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Grid item>
                    <InsertPhoto color="primary" />
                  </Grid>
                  <Grid
                    item
                    style={{
                      width: "80%",
                    }}
                  >
                    <TextField
                      id="input-with-icon-grid"
                      type="file"
                      label="Image"
                      onChange={(e) => this.setState({ image: e.target.value })}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={this.addBouquet}
                  style={{
                    width: "30%",
                    // margin: 20,
                    marginTop: 20,
                  }}
                >
                  <PostAdd
                    color="secondary"
                    style={{
                      marginRight: 10,
                    }}
                  />
                  ADD BOUQUET
                </Button>
              </FormControl>
              <Snackbar
                open={this.state.added}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <Alert onClose={this.handleClose} severity="success">
                  {this.state.name} has been successfully added to catalogue!
                </Alert>
              </Snackbar>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default AddBouquet;
