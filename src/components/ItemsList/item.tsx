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
    margin: "25px",
    border: '1px #80808038 solid'
  },
  media: {
    height: 0,
    cursor:'pointer',
    paddingTop: "56.25%" // 16:9
  }
}));

export default function Item(data: any) {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={()=> window.open(`https://www.marvel.com/comics/issue/${data.dataItem.id}/${data.dataItem.title}`, "_blank")}>
      <CardHeader className="header" title={data.dataItem.title} subheader={data.dataItem.format} />
      <CardMedia
        className={classes.media}
        image={data.dataItem.thumbnail.path}
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
