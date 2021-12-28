import { Box, Tabs, Tab, Typography, Button } from "@mui/material";
import Logo from "../components/Logo";
import React from "react";
import { useState } from "react";
import PlayerSignUp from "../components/PlayerSignUp";
import EventSignUp from "../components/EventSignUp";
import FranchiseSignUp from "../components/FranchiseSIgnUp";

const Signup = () => {
  const [isPlayer, setIsPlayer] = useState(true);
  const [isFranchise, setIsFranchise] = useState(false);
  const [isEvent, setIsEvent] = useState(false);
  return (
    <Box sx={{ margin: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Logo />
      <Box
        sx={{
          margin: "2rem 0",
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontWeight: "bold", display: "flex", justifyContent: "center", mb: "1rem" }}
        >
          Register as
        </Typography>
        <Box sx={{width: "70vw", display: "flex", justifyContent: "space-around"}}>
          {isPlayer ? (
            <Button
              variant="contained"
              onClick={() => {
                setIsPlayer(true);
                setIsFranchise(false);
                setIsEvent(false);
              }}
            >
              Player
            </Button>
          ) : (
            <Button
              variant="text"
              onClick={() => {
                setIsPlayer(true);
                setIsFranchise(false);
                setIsEvent(false);
              }}
            >
              Player
            </Button>
          )}
          {isFranchise ? (
            <Button
              variant="contained"
              onClick={() => {
                setIsPlayer(false);
                setIsFranchise(true);
                setIsEvent(false);
              }}
            >
              Franchise
            </Button>
          ) : (
            <Button
              variant="text"
              onClick={() => {
                setIsPlayer(false);
                setIsFranchise(true);
                setIsEvent(false);
              }}
            >
              Franchise
            </Button>
          )}
          {isEvent ? (
            <Button
              variant="contained"
              onClick={() => {
                setIsPlayer(false);
                setIsFranchise(false);
                setIsEvent(true);
              }}
            >
              Event
            </Button>
          ) : (
            <Button
              variant="text"
              onClick={() => {
                setIsPlayer(false);
                setIsFranchise(false);
                setIsEvent(true);
              }}
            >
              Event
            </Button>
          )}
        </Box>
        <Box>
          {isPlayer ? <PlayerSignUp /> : null}
          {isFranchise ? <FranchiseSignUp /> : null}
          {isEvent ? <EventSignUp /> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
