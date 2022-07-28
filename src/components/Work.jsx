import * as React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import gogame from "../assets/go-game.png";
import aichatbot from "../assets/AI-chatbot.png";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Work = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = React.useState(false);
  const handleClickOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };

  const [open6, setOpen6] = React.useState(false);
  const handleClickOpen6 = () => {
    setOpen6(true);
  };
  const handleClose6 = () => {
    setOpen6(false);
  };

  const [open7, setOpen7] = React.useState(false);
  const handleClickOpen7 = () => {
    setOpen7(true);
  };
  const handleClose7 = () => {
    setOpen7(false);
  };

  const [open8, setOpen8] = React.useState(false);
  const handleClickOpen8 = () => {
    setOpen8(true);
  };
  const handleClose8 = () => {
    setOpen8(false);
  };

  const [open9, setOpen9] = React.useState(false);
  const handleClickOpen9 = () => {
    setOpen9(true);
  };
  const handleClose9 = () => {
    setOpen9(false);
  };

  return (
    <div
      style={{ height: "200vh" }}
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${gogame})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Go Game
              </span>
              <div className="pt-8 text-center">
                {/* <a
                  href="https://blogpost-worldfromtech.herokuapp.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <button
                  onClick={handleClickOpen1}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                <a
                  href="https://github.com/ashishbhagchandani/go_game"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose1}
              aria-labelledby="customized-dialog-title"
              open={open1}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose1}
                style={{ fontWeight: "700" }}
              >
                Go Game
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Go game is was part of my CSCI 561 project, its a very known
                  project among MS CS students in USC.
                </Typography>
                <Typography gutterBottom>
                  In this programming assignment, you will develop your own AI
                  agents based on some of the AI techniques for Search, Game
                  Playing, and Reinforcement Learning that you have learned in
                  class to play a small version of the Go game, called Go-5x5 or
                  Little-Go, that has a reduced board size of 5x5.
                </Typography>
                <Typography gutterBottom>
                  I used Alpha-Beta pruning technique for my AI agent. It scored
                  95.7, getting me second rank among 500 students of AI
                  department.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose1}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
          {/* ------------------------------------------------------------------------------------------- */}
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Recruiter Candidate mapping
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://docs.google.com/document/d/1gU5obELGmiNT0Aklsqs9I8w8sJa76GJ5/edit?usp=sharing&ouid=117834187708578078148&rtpof=true&sd=true"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <button
                  onClick={handleClickOpen2}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                {/* <a
                  href="https://github.com/ashishbhagchandani/carprice_prediction"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose2}
              aria-labelledby="customized-dialog-title"
              open={open2}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose2}
                style={{ fontWeight: "700" }}
              >
                Recruiter Candidate mapping
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  This functionality was built by me as a functionality for
                  Virtual Job Fairs.
                </Typography>
                <Typography gutterBottom>
                  In this Recruiter and Candidates get matched based on their
                  requirement and portfolio.
                </Typography>
                <Typography gutterBottom>
                  Behind this their was a customized Machine learning algorithm
                  which classified recuirements set by recruiter and portfolio
                  made by the candidate.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose2}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
          {/* -------------------------------------------------------------------------------------------- */}
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Warehouse Management
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <button
                  onClick={handleClickOpen3}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                <a
                  href="https://github.com/ashishbhagchandani/ibm-flask"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose3}
              aria-labelledby="customized-dialog-title"
              open={open3}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose3}
                style={{ fontWeight: "700" }}
              >
                Warehouse Management
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  This project was part of development during IBM Hackathon.
                </Typography>
                <Typography gutterBottom>
                  This project try to solve problem faced by perishable goods
                  warehouse owners. This application predicts the quantity that
                  needs to be ordered for x number of days (x value decided by
                  the owner).
                </Typography>
                <Typography gutterBottom>
                  The logic behind the application was the customised EOQ
                  (Economic Order Quantity) for perishable goods and a CNNLSTM
                  model which predicted demand for x number of days.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose3}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
          {/* ----------------------------------------------------------------------------------------------- */}
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Blog Post
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://blogpost-worldfromtech.herokuapp.com/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <button
                  onClick={handleClickOpen4}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                <a
                  href="https://github.com/ashishbhagchandani/BlogPost"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose4}
              aria-labelledby="customized-dialog-title"
              open={open4}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose4}
                style={{ fontWeight: "700" }}
              >
                Blog Post
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  BlogPost is a web based application which help users to create
                  their profile and write blogs related to any domain and
                  showcase them to the world.
                </Typography>
                <Typography gutterBottom>
                  Django framework is used for the application to build with
                  Amazon S3 connectivity.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose4}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
          {/* Grid Item */}
          {/* ----------------------------------------------------------------------------------------------- */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Epileptic Seizure detection
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <button
                  onClick={handleClickOpen5}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                {/* <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose5}
              aria-labelledby="customized-dialog-title"
              open={open5}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose5}
                style={{ fontWeight: "700" }}
              >
                Epileptic Seizure detection
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Electrical activity in the brain gets generated with numerous
                  amounts of communication taking place between neurons. This is
                  the chapter in which, this electrical activity is measured
                  with the help of brain sensors. Further, electrical activity
                  is stored and analyzed for two different datasets. First, for
                  the epileptic seizure and second, for brain activity. Next,
                  both epileptic seizure and brain activity datasets are used
                  for deep learning models interfacing with Apache Spark.
                </Typography>
                <Typography gutterBottom>
                  The deep learning model has a Feed-Forward Neural Network,
                  which helps determine features from the epileptic seizure
                  dataset that are important and fits in the hidden patterns
                  among them. Further, FFNN is interfaced with Apache Spark to
                  analyze how it can be beneficial with processing of the deep
                  learning model.
                </Typography>
                <Typography gutterBottom>
                  The results of the accuracy of deep learning model and
                  processing time caused by apache spark help determine that how
                  effective is the FFNN for predicting the seizure activity in
                  the brain and how Apache Spark can be applied with a deep
                  learning model to increase its effectiveness for different
                  types of datasets.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose5}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
          {/* ----------------------------------------------------------------------------------------------- */}
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Robotic-arm Movement (BCI)
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <button
                  onClick={handleClickOpen6}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                <a
                  href="https://github.com/ashishbhagchandani/robotic-arm_bci_dl_flask"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose6}
              aria-labelledby="customized-dialog-title"
              open={open6}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose6}
                style={{ fontWeight: "700" }}
              >
                Robotic-arm Movement (BCI)
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  In this project robotic-arm has been assembled with various
                  part to create a replica of human-arm. There are five servo
                  motors attached to the joints of robotic-arm, which are
                  controlled by servo controller.
                </Typography>
                <Typography gutterBottom>
                  BCI-Brain Computer Interface, this part of project involves
                  connection of brain sensor with bluettoth module HC-05, which
                  is further attched to servo controler.
                </Typography>
                <Typography gutterBottom>
                  A deep learning model has been created for the project with
                  the help of keras and tensorflow. The model includes three
                  inputs and 5 outputs.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose6}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
          {/* ----------------------------------------------------------------------------------------------- */}
          <div
            style={{ backgroundImage: `url(${aichatbot})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                AI Chatbot
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <button
                  onClick={handleClickOpen7}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                <a
                  href="https://github.com/ashishbhagchandani/chatbot_AI"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose7}
              aria-labelledby="customized-dialog-title"
              open={open7}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose7}
                style={{ fontWeight: "700" }}
              >
                AI Chatbot
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  This AI Chatbot is built with PyTorch and can be used by any
                  domain. The implementation has a Feed Forward Neural Network
                  with two hidden layers.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose7}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
          {/* ----------------------------------------------------------------------------------------------- */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Snake Game(Reinforcement learning)
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <button
                  onClick={handleClickOpen8}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                <a
                  href="https://github.com/ashishbhagchandani/snake_game_reinforcement_learning"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose8}
              aria-labelledby="customized-dialog-title"
              open={open8}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose8}
                style={{ fontWeight: "700" }}
              >
                Snake Game(Reinforcement learning)
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  This snake game is bulit with the help of Pygame and PyTorch.
                  The logic nehind snake movement is based on Reinforcement
                  Learning.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose8}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
          {/* ----------------------------------------------------------------------------------------------- */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Twitter Clone
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <button
                  onClick={handleClickOpen9}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  About
                </button>
                <a
                  href="https://github.com/ashishbhagchandani/twitterclone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
            <BootstrapDialog
              onClose={handleClose9}
              aria-labelledby="customized-dialog-title"
              open={open9}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose9}
                style={{ fontWeight: "700" }}
              >
                Twitter Clone
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  This web based application is a clone version of Twitter, made
                  in Node.js framework and Pug.
                </Typography>
                <Typography gutterBottom>
                  The web application has authentication system with login and
                  registration. User can publish post and other users can link,
                  comment or retweet on it. Users can also follow other users
                  and initiate one-to-one or group chat.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose9}>
                  Close
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
