import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const ShowCard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState(""); // to set the value of search input
  console.log(data);
  const getData = async () => {
    const result = await axios.get("http://localhost:4040");
    console.log(result.data);
    setData(result.data);
  };
  const handleDelete = async (i) => {
    const result = await axios.post("http://localhost:4040/deleteemp", i);
    console.log(result.data);
    getData();
  };
  const handleRoute = (item) => {
    console.log(item);
    navigate("/CardUpate", { state: item });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <h1>ShowCard</h1> */}

      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
    
        {data.map((elem, index) => (
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h1> {elem.fname} {elem.lname}</h1>
                <h3> Email : {elem.email} </h3>
                <h3> Gender : {elem.gender} </h3>
                <Button variant="outlined" onClick={() => handleDelete(elem)}>
                  Delete
                </Button>
                <Button variant="outlined" onClick={() => handleRoute(elem)}>
                  Update
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ShowCard;
