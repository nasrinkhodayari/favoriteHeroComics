import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import listService from "./api";

const useStyles = makeStyles((theme: Theme) => createStyles({}));
const ItemsList = () => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div>Hi :)</div>
    </React.Fragment>
  );
};

export default ItemsList;
