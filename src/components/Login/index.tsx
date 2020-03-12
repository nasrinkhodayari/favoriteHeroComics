import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userService } from "./api";
import { userConstants } from "../../_constants";

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
const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  const handleLogin = () => {
    let result = userService.login(username, password);
    if (result.length > 0) {
      dispatch({ type: userConstants.LOGIN_SUCCESS, result });
    } else {
      dispatch({ type: userConstants.LOGIN_FAILURE, result });
      toast.error(userConstants.LOGIN_FAILURE);
    }
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
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
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

export default Login;
