import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    display: "inline-block",
    margin: "25px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function Item(data: any) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={data.dataItem.title} subheader="September 14, 2016" />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Tooltip title={data.dataItem.description}>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.dataItem.description}
          </Typography>
        </Tooltip>
      </CardContent>
    </Card>
  );
}
