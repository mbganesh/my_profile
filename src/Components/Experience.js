import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import { makeStyles, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  rootBg: {
    padding: theme.spacing(2),
    background: "linear-gradient(to right bottom, #53B8BB, #B980F0)",
  },
  textCenter: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
}));

function Experience() {
  const classes = useStyles();
  return (
    <div className={classes.rootBg}>
      <Typography variant="h5" className={classes.textCenter}>
        EXPERIENCE
      </Typography>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Developer
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <ComputerIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Netcom Computer Pvt Ltd
              </Typography>
              <Typography variant="subtitle1">Jan 2021 - Present</Typography>
              <Typography variant="subtitle1">Tirunelveli,Tamilnadu</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Experience;
