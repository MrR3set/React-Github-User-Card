import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GitHubIcon from '@material-ui/icons/GitHub';
import PeopleIcon from '@material-ui/icons/People';
const useStyles = makeStyles(theme => ({
  root: {
    width: "40%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  connections:{
    display: "flex",
    flexWrap:"nowrap",
    justifyContent:"space-around"

  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
            {/* first letter of the name */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.login}
        subheader={`Member since ${props.data.created_at}`}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg" 
        title="Profile picture"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <PeopleIcon/>{props.data.followers}
        </IconButton>
        <IconButton aria-label="share">
          <GitHubIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardMedia className={classes.media} 
          image="https://help.github.com/assets/images/help/profile/contributions_graph.png" 
          title="Contributions"
          />
        </CardContent>
        <CardContent className={classes.connections}> 
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.followers} Followers
            </Typography>
            <CardHeader avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                      {/* first letter of the name */}
                    </Avatar>
                }
                title={props.data.login}
              />
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.data.following} Following
            </Typography>
            <CardHeader avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
                {/* first letter of the name */}
              </Avatar>
              }
              title={props.data.login}
              />  
          </CardContent>
        </CardContent>
      </Collapse>
    </Card>
  );
}
