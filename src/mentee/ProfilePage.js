import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from '../middleware/axioswithauth';

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
// core components
import Header from "../mentee/menteeNav";
import Footer from "../mentorProfile/src/components/Footer/Footer";
import Button from "../mentorProfile/src/components/CustomButtons/Button";
import GridContainer from "../mentorProfile/src/components/Grid/GridContainer";
import GridItem from "../mentorProfile/src/components/Grid/GridItem";
import HeaderLinks from "../mentorProfile/src/components/Header/HeaderLinks";
import NavPills from "../mentorProfile/src/components/NavPills/NavPills";
import Parallax from "../mentorProfile/src/components/Parallax/Parallax";
import ImageLoader from './imageLoader';

import profile from "../mentorProfile/src/assets/img/faces/kendall.jpg";
//assets/img/faces/kendall.jpg"
import studio1 from "../mentorProfile/src/assets/img/examples/studio-2.jpg";
//studio-2.jpg
import aboutme from "../mentorProfile/src/assets/img/examples/studio-5.jpg";
// studio-5.jpg
//


import styles from "../mentorProfile/src/assets/jss/material-kit-react/views/profilePage";
const useStyles = makeStyles(styles);

export default function MenteeProfilePage(props) {

    function handleClick(e) {
        e.preventDefault();
        console.log('hello clicked')
      }

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [userLoggedIn, setUserLoggedIn] = useState([]);
  const userStorage = useState(localStorage.getItem('email'));

  useEffect(() => {
    AxiosWithAuth()
    .get('https://mentor-be.herokuapp.com/api/mentee',{headers: {Authorization: localStorage.getItem('token')}})
    .then(res => {
      const currentUser = res.data.filter(user => (
        user.email === userStorage[0])
      )[0];
      setUserLoggedIn(currentUser);
    })
    .catch(err => console.log(err.response))
  }, []);
  return (
    <div>
      <Header />
      <Parallax
        small
        filter
        image={userLoggedIn.image}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={userLoggedIn.image} alt="..." className={imageClasses} />
                   
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}>{userLoggedIn.first_name} {userLoggedIn.last_name}</h2>
                    <h5>{userLoggedIn.title}</h5>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              {userLoggedIn.description}{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "About",
                      tabIcon: InfoIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={aboutme}
                              className={navImageClasses}
                            />
                            <h2>Capture A Moment In Time</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>{" "}
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>{" "}
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>{" "}
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <h2>My First Internship</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <h2>On The Road Again</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <h2>What I Bring To The Table</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
            <Button>Edit Profile</Button>  
            {/* <Button onClick={ () => { Actions.profileEdit(); } }>Edit Profile</Button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
