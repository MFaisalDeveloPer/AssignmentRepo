import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <br /> <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link className="btn" to="/CardEmployee">
            <Button className="btn" variant="contained" fullWidth>
              Create Employee
            </Button>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link className="btn" to="/empDetails">
            <Button className="btn" variant="contained" fullWidth>
              Employee Details
            </Button>
          </Link>
        </Grid>
        {/* <Grid item xs={4}>
          <Link className="btn" to="/">
            <Button className="btn" variant="contained" fullWidth>
            loginpage
            </Button>
          </Link>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Home;
