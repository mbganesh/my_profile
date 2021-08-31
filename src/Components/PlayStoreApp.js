import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    padding:theme.spacing(1),
  },
  
  img: {
    [theme.breakpoints.down("md")]: {
      width: "90%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
    },
  },
}));

const slideImages = [
  "https://play-lh.googleusercontent.com/qKlRFS9Zu0r907NpszpXaMDGoBbSEPnpUHH5RHZMD23j2k5hFkl8JGkDH7AYQ1k0_EIM=s180-rw",
  "https://play-lh.googleusercontent.com/lf_kvci4PIb947WM6xzFOAFAep0ZMaUBq-YwaBznqK8JS95xQF3DYwV68UJ4pM-56bQj=s180-rw",
  "https://play-lh.googleusercontent.com/97vBpZCELE7vs_PvJtJD-xJdRlY4hPP0q8adQS5ssKcXohlML3IK9GsHY8xX4Eu6AKd3=s180-rw",
  "https://play-lh.googleusercontent.com/1GZK6k7q3pFoHk_QDbHKqW6bi01ERlBBlbHSgkCQ8DUswjLda36ZXQXYvhxFrYtdKS_5=s180-rw",
  "https://play-lh.googleusercontent.com/XIg-5uEX2Piz4zOQ-xDDrHW2pspfk0KbVKcHUQDb7kVszwg65qvKYxY3GgotxeQLErE=s180-rw",
  "https://play-lh.googleusercontent.com/1owvHl_U2eLSdSW3gZzQF3FRpfH92EQVyQRP7XIYaY4D5-f2F1OC0J5_t4kPGtfZsGdf=s180-rw",
  "https://play-lh.googleusercontent.com/jwTkYCQH8KRqBhqwIOz7bQrJu7GVZfVsejLQMnH1buLmHqghAUMzTJHol4lu8pq-WbQ=s180-rw",
];

const title = [
  "Petrol and Gold Price",
  "Pixeny",
  "Tamil Story App",
  "Tamil Quotes App",
  "Trackie",
  "Tic Tac Toe Game",
  "Timer",
];

const link = [
  "https://play.google.com/store/apps/details?id=mb.ganesh.petrolprice",
  "https://play.google.com/store/apps/details?id=mb.ganesh.pixeny",
  "https://play.google.com/store/apps/details?id=mb.ganesh.storyapp",
  "https://play.google.com/store/apps/details?id=mb.ganesh.quotes",
  "https://play.google.com/store/apps/details?id=mb.ganesh.tracker19",
  "https://play.google.com/store/apps/details?id=mb.ganesh.tictactoc",
  "https://play.google.com/store/apps/details?id=mb.ganesh.time",
];

export default function PlayStoreApp() {
  const classes = useStyles();
  return (
    <div className={classes.img}>
      <Typography variant="h5" className={classes.textCenter}>
       Play Store Apps
      </Typography>
      <Carousel>
        <div>
          <a href={link[0]} target="_blank">
            <img src={slideImages[0]} alt={title[0]}/>
            <p className="legend">{title[0]}</p>
          </a>
        </div>
        <div>
          <a href={link[1]} target="_blank">
            <img src={slideImages[1]} alt={title[1]} />
            <p className="legend">{title[1]}</p>
          </a>
        </div>
        <div>
          <a href={link[2]} target="_blank">
            <img src={slideImages[2]} alt={title[2]} />
            <p className="legend">{title[2]}</p>
          </a>
        </div>
        <div>
          <a href={link[3]} target="_blank">
            <img src={slideImages[3]} alt={title[3]} />
            <p className="legend">{title[3]}</p>
          </a>
        </div>
        <div>
          <a href={link[4]} target="_blank">
            <img src={slideImages[4]} alt={title[4]} />
            <p className="legend">{title[4]}</p>
          </a>
        </div>
        <div>
          <a href={link[5]} target="_blank">
            <img src={slideImages[5]} alt={title[5]} />
            <p className="legend">{title[5]}</p>
          </a>
        </div>
        <div>
          <a href={link[6]} target="_blank">
            <img src={slideImages[6]} alt={title[6]}/>
            <p className="legend">{title[6]}</p>
          </a>
        </div>
      </Carousel>
    </div>
  );
}
