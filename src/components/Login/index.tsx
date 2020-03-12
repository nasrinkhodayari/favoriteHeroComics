import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { connect } from "react-redux";
import { userActions } from "../../_actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
      background: "#5cb53f",
      color: "#fff"
    },
    header: {
      textAlign: "center",
      background: "#229bb6",
      color: "#fff"
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);
const Login = (props: any) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);


  useEffect(() => {
    console.log(props.loggingIn);
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password, props.loggingIn]);

  const handleLogin = () => {
    props.login(username, password);
  };

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleLogin();
    }
  };

  return (
    <React.Fragment>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Login" />
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="username"
                type="text"
                label="Username"
                placeholder="Username"
                margin="normal"
                onChange={e => setUsername(e.target.value)}
                onKeyPress={e => handleKeyPress(e)}
              />
              <TextField
                error={error}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                helperText={helperText}
                onChange={e => setPassword(e.target.value)}
                onKeyPress={e => handleKeyPress(e)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              className={classes.loginBtn}
              onClick={() => handleLogin()}
              disabled={isButtonDisabled}
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
    </React.Fragment>
  );
};
const mapState = (state: { authentication: { loggingIn: any } }) => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
};

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};
const connectedLoginPage = connect(mapState, actionCreators)(Login);
export default connectedLoginPage;
