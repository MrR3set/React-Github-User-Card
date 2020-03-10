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
import GitHubIcon from '@material-ui/icons/GitHub';
import PeopleIcon from '@material-ui/icons/People';
import GitHubCalendar from 'github-calendar'
const useStyles = makeStyles(theme => ({
  root: {
    width: "30%",
    height:"auto",
  },
  media: {
    paddingTop: "56.25%", // 16:9
    backgroundSize:"contain"
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
    justifyContent:"space-around",
    userSelect:"none",
  },
  users:{
    cursor:"pointer",
    transition:"all 0.5 ease-out",
    "&:hover":{
      transform:"scale(1.1)"
    }
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  GitHubCalendar(".calendar", props.userdata.login, { responsive: true });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="Avatar" className={classes.avatar}>
            {String(props.userdata.login).charAt(0)}
          </Avatar>
        }
        title={props.userdata.login}
        subheader={`Member since ${props.userdata.created_at}`}
      />
      <CardMedia
        className={classes.media}
        image={props.userdata.avatar_url} 
        title="Profile picture"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.userdata.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.userdata.bio}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Contributions
        </Typography>
          <div className="calendar"></div>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <PeopleIcon/>{props.userdata.followers}
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


        <CardContent className={classes.connections}> 
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.userdata.followers} Followers
            </Typography>
              {props.followers.map(e=>{
                return (
                  <CardHeader className={classes.users} avatar={
                    <Avatar aria-label="Following" className={classes.avatar} src={e.avatar_url}>
                      {String(e.login).charAt(0)}
                    </Avatar>
                    }
                    title={e.login}
                    />
                )
              })}              
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.userdata.following} Following
            </Typography>
            {props.following.map(e=>{
              return (
                  <CardHeader className={classes.users} avatar={
                    <Avatar aria-label="Following" className={classes.avatar} src={e.avatar_url}>
                      {String(e.login).charAt(0)}
                    </Avatar>
                    }
                    title={e.login}
                    />
                )
              })}    
          </CardContent>
        </CardContent>
      </Collapse>
    </Card>
  );
}
