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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CakeIcon from "@material-ui/icons/Cake";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";

import { SocialIcon } from "react-social-icons";

function App() {
  const useStyle = makeStyles((theme) => ({
    AppBar: {
      backgroundColor: "black",
      width: "100%",
      height: "8%",
    },
    AppBarName: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    MenuIcon: {
      display: "block",
      marginLeft: "auto",
    },
    centerText: {
      textAlign: "center",
      padding: theme.spacing(0.4),
    },
    personalTouch: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(4.5),
    },
    socialTouch: { 
      display: "block",
    marginLeft: "auto",
    marginRight:'auto',
      marginTop:theme.spacing(2),
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

  const classes = useStyle();
  
  return (
    <>
      <div>
        <AppBar className={classes.AppBar}>
          <Toolbar>
            <Typography className={classes.AppBarName}>JDEV</Typography>
            <MenuIcon className={classes.MenuIcon} />
          </Toolbar>
        </AppBar>
        <Card className={classes.cardImageRoot}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Ganesh JDev"
              image="https://avatars.githubusercontent.com/u/51211116?v=4"
            />
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
              Ganesh JDev
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.personalTouch}>
        <Typography>
          <CakeIcon /> 17-SEP-2000
        </Typography>
        <Typography>
          <PhoneIcon /> +91 8489991253{" "}
        </Typography>
        <Typography>
          <MailIcon /> mbganesh.jdev@gmail.com
        </Typography>
        <Typography>
          <HomeIcon />
          Tirunelveli,Tamilnadu
        </Typography>
      </div>

      <div className={classes.socialTouch}>
       
       
      <SocialIcon  url="https://twitter.com/Ganesh_jdev" />
      <SocialIcon url="https://www.instagram.com/mb_ga.ne.sh_dev/"/>
      <SocialIcon url="https://www.youtube.com/c/GaneshJDev"/>
      <SocialIcon url="https://www.linkedin.com/in/ganesh-jdev/"/>
      <SocialIcon url="https://github.com/mbganesh"/>
      <SocialIcon url="https://www.facebook.com/ganesh.jdev"/>
      <SocialIcon url="https://api.whatsapp.com/send/?phone=8838531474&text&app_absent=0"/>
      </div>
    </>
  );
}

export default App;
