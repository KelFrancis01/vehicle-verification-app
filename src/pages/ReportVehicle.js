import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';

import axios from 'axios';


const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ReportVehicle = () => {
  
    //Apply the defined styles to the Form in SignUp function.
    const classes = useStyles();

    //Initializing the name, email, password and phone by setting it to empty.
    const [values, setValues] = useState({
      
      vin:'',
      brand:'',
      model:'',
      owner:'',
      lastlocation: '',
      datestolen:'',
      reportedby:''

    });
    
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    };
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8081/ReportVehicle', values) //post form inputs to database via server address
      .then(res => {
        if(res.data.Status === "Success") {
          
              alert ("Vehicle Reported Successfully")
              navigate('/Home')

          } else {
             alert("Report Failed");
          }
      
        })
        
      .then(err => console.log(err));
    };
  
  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: '8rem', marginBottom: '12rem' }}>
      <div className={classes.root}>
        <Typography component="h1" variant="h5" sx={{color:'#0A254E'}}>
          Report Stolen Vehicle
        </Typography>
        <form action="" onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="vin"
            label="VIN"
            name="vin"
            autoComplete="VIN"
            autoFocus
            onChange={handleInput}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="brand"
            label="Vehicle Brand"
            name="brand"
            autoComplete="brand"
            onChange={handleInput}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="model"
            label="Vehicle Model"
            id="model"
            autoComplete="new-model"
            onChange={handleInput}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="owner"
            label="Vehicle Owner"
            type="text"
            id="owner"
            autoComplete="owner"
            onChange={handleInput}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastlocation"
            label="Location Last Seen"
            name="lastlocation"
            autoComplete="Last Location"
            onChange={handleInput}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="date"
            label="Date Stolen"
            name="datestolen"
            type="date"
            autoComplete="date stolen"
            onChange={handleInput}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="reportedby"
            label="Reported By - Input your Full Name"
            type="text"
            id="reportedby"
            autoComplete="Reported By"
            onChange={handleInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            sx={{backgroundColor:'#C28714', marginTop:"15px", marginBottom:"15px"}}
          >
            Report Stolen Vehicle
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Home" variant="body2" sx={{textDecoration:'none', color:'#0A254E'}}>
                Return to Home Page
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};


export default ReportVehicle;