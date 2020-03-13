import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Item from "./item";
import listService from "./api";
import { toast } from "react-toastify";
import "./base.scss";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  }
}));
const ItemsList = () => {
  const classes = useStyles();
  const comicsData = require("./mocks/comics.json");
  const [comics, setComics] = useState([]);

  useEffect(() => {
    setComics(comicsData.data.results);
    // .getComics()
    // .then(response => {
    //   setComics(response.data);
    // })
    // .catch(reason => {
    //   console.error(reason);
    //   toast.error(reason.message);
    // });
  }, [comics]);

  return (
    <div className="comics-container">
      <React.Fragment>
        {/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit">Logout</Button>
            </Toolbar>
          </AppBar>
          {comics.map((item: any) => {
            return <Item dataItem={item} key={item.id} />;
          })}
        </div>
      </React.Fragment>
    </div>
  );
};

export default ItemsList;
