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
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CakeIcon from "@material-ui/icons/Cake";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

export default function Home() {
  const useStyle = makeStyles((theme) => ({
    rootBg: {
      padding: theme.spacing(2),
      background: "linear-gradient(to left bottom, #CDF0EA, #E4EFE7)",
    },
    AppBar: {
      backgroundColor: "#F96D15",
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
      <div className={classes.rootBg}>
      <CssBaseline />
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

        <Typography>
          <CakeIcon /> 17-SEP-2000
        </Typography>
        <Typography>
          <PhoneIcon /> +91 8489991253{" "}
        </Typography>
        <Typography>
        <MailIcon />
        <a href="mailto:mbganesh.jdev@gmail.com" style={{color:'black' , textDecorationLine:'none',}}>
          mbganesh.jdev@gmail.com
          </a>
        </Typography>
    
        <Typography>
          <HomeIcon />
          Tirunelveli,Tamilnadu
        </Typography>

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


