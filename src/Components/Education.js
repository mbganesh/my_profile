import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ComputerIcon from '@material-ui/icons/Computer';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  rootBg: {
    padding: theme.spacing(2),
    background: "linear-gradient(to left bottom, #B980F0, #53B8BB)",
  },
  textCenter: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
}));

export default function Education() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.rootBg}>
        <Typography variant="h5" className={classes.textCenter}>
          Education
        </Typography>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Engineering
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <ComputerIcon/>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  B.E - Computer Science
                </Typography>
                <Typography variant="subtitle1">CGPA : 7.5</Typography>
                <Typography variant="subtitle1">
                  Session : 2017 - 2021
                </Typography>
                <Typography variant="subtitle1">
                  {" "}
                  Francis xavier engineering college Tirunelveli.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                HSS
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LocationCityIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  HIGHER SECONDARY COURSE
                </Typography>
                <Typography variant="subtitle1">Mark : 77% </Typography>
                <Typography variant="subtitle1">
                  Session : 2016 - 2017
                </Typography>
                <Typography variant="subtitle1">
                  Schaffter higher secondary school Tirunelveli
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                SSE
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>

            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  SECONDARY SCHOOL EXAMINATION
                </Typography>
                <Typography variant="subtitle1">Mark : 85.2%</Typography>
                <Typography variant="subtitle1">
                  Session : 2014 - 2015
                </Typography>
                <Typography variant="subtitle1">
                  Schaffter higher secondary school Tirunelveli
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}
