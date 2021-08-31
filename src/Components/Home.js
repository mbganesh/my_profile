import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  CssBaseline,
  Grid,
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CakeIcon from "@material-ui/icons/Cake";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import { SocialIcon } from "react-social-icons";
import GaneshPic from "../img/ganesh.png";

export default function Home() {
  const useStyle = makeStyles((theme) => ({
    rootBg: {
      padding: theme.spacing(2),
      background: "linear-gradient(to left bottom, #CDF0EA, #E4EFE7)",
    },
    AppBar: {
      backgroundColor: "#F96D15",
    },
    AppBarName: {
      fontSize: "20px",
      fontWeight: "bold",
      padding: theme.spacing(2),
    },
    MenuIcon: {
      display: "block",
      marginLeft: "auto",
    },
    centerText: {
      textAlign: "center",
      padding: theme.spacing(0.4),
    },
    details: {
      justify: "center",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    cardImageRoot: {
      [theme.breakpoints.down("md")]: {
        width: "80%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(10),
      },
      [theme.breakpoints.up("md")]: {
        width: "25%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(13),
      },
    },
  }));

  const link = [
    "https://twitter.com/Ganesh_jdev",
    "https://www.youtube.com/c/GaneshJDev",
    "https://www.instagram.com/mb_ga.ne.sh_dev/",
    "https://www.linkedin.com/in/ganesh-jdev/",
    "https://github.com/mbganesh",
    "https://www.facebook.com/ganesh.jdev",
    "https://wa.me/+918838531474",
  ];

  const classes = useStyle();

  return (
    <>
      <div className={classes.rootBg}>
        <CssBaseline />
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <Typography className={classes.AppBarName}>JDEV</Typography>
            {/* <MenuIcon className={classes.MenuIcon} /> */}
          </Toolbar>
        </AppBar>
        <Card className={classes.cardImageRoot}>
          <CardActionArea>
            <CardMedia component="img" alt="Ganesh JDev" image={GaneshPic} />
          </CardActionArea>
          <CardContent>
            <Typography
              className={classes.centerText}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              HELLO EVERYBODY, I AM
            </Typography>
            <Typography
              className={classes.centerText}
              gutterBottom
              variant="h5"
              component="h2"
            >
              BoothaGanesh!!!
            </Typography>
          </CardContent>
        </Card>

        <div className={classes.details}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography>
              <CakeIcon style={{ verticalAlign: "sub" }} /> 21 years old
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography>
              <PhoneIcon style={{ verticalAlign: "sub" }} /> +91 8489991253{" "}
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography>
              <MailIcon style={{ verticalAlign: "sub" }} />
              <a
                href="mailto:mbganesh.jdev@gmail.com"
                style={{ color: "black", textDecorationLine: "none" }}
              >
                mbganesh.jdev@gmail.com
              </a>
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography>
              <HomeIcon style={{ verticalAlign: "sub" }} />
              Tirunelveli,Tamilnadu
            </Typography>
          </div>
        </div>

        <div>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={5}>
                {link.map((value) => (
                  <Grid key={value} item>
                    <SocialIcon url={value} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
