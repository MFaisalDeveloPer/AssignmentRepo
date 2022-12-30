import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
// console.log({ pdId: uuidv4() });

const CardCreate = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [res, setRes] = useState("");

  // console.log(name, price, img);

  const UpateProduct = async () => {
    const payload = { empId: uuidv4(), fname, lname, email,gender };
    console.log("payload==>", payload);
    const result = await axios.post("http://localhost:4040/addemp", payload);
    // console.log(result.data);
    setRes(result.data);
    setFname("");
    setLname("");
    setEmail("");
    setGender("");
  };

  return (
    <>
      <h1>Create Employee</h1>
      <Grid container spacing={2}>
        <Grid item xs={4} style={{}}>
          <TextField
            value={fname}
            fullWidth
            variant="standard"
            label="Enter fname"
            onChange={(e) => setFname(e.target.value) && setRes("")}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={lname}
            fullWidth
            variant="standard"
            label="Enter lname"
            onChange={(e) => setLname(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={email}
            fullWidth
            variant="standard"
            label="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={gender}
            fullWidth
            variant="standard"
            label="gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className="btn"
            onClick={UpateProduct}
            variant="contained"
            fullWidth
          >
            Create Employee
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1 style={{ backgroundColor: "green" }}> {res} </h1>
        </Grid>
      </Grid>
    </>
  );
};

export default CardCreate;
