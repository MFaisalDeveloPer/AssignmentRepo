import { Button, TextField, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const LoginPage = () => {
  const [user, setUser] = useState("");

  const [userError, setUserError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = async () => {
    const payload = {
      username: user,
      password: password,
    };
    const res = await axios.post("http://localhost:4040/users", payload);
    if (res.status === 200 && res.data.auth === true) {
      navigate("/home");
    } else {
      setUserError("inviled username");
      setPasswordError("inviled password");
    }
    console.log(res);
  };
  return (
    <>
      {/* <h1>Employees login</h1> */}
      <br /> <br />
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <TextField
              onChange={(e) => setUser(e.target.value)}
              size="small"
              color="secondary"
              fullWidth
              variant="outlined"
              label="username"
            />
            {userError && userError}
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              color="secondary"
              fullWidth
              variant="outlined"
              label="password"
            />
            {passwordError && passwordError}
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button onClick={handleFormSubmit} fullWidth variant="contained">
              Login
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </form>
      <br /> <br />
    </>
  );
};
