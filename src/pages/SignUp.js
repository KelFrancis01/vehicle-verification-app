import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Validation from './SignUpValidate';
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

const SignUp = () => {
  
    //Apply the defined styles to the Form in SignUp function.
    const classes = useStyles();

    //Initializing the name, email, password and phone by setting it to empty.
    const [values, setValues] = useState({
      
      name:'',
      email:'',
      password:'',
      phone:''

    });
  
    const [errors, setErrors] = useState({});
  
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    };
    
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
      axios.post('http://localhost:8081/SignUp', values) //post form inputs to database via server address
      .then(res => {
        if(res.data.Status === "Success") {
              navigate('/Login')
          } else {
             alert("Sign Up Failed");
          }
      
        })
        
      .then(err => console.log(err));
    };
  
  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: '8rem', marginBottom: '12rem' }}>
      <div className={classes.root}>
        <Typography component="h1" variant="h5" sx={{color:'#0A254E'}}>
          Sign Up
        </Typography>
        <form action="" onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullname"
            label="Full Name"
            name="fullname"
            autoComplete="Full Name"
            autoFocus
            onChange={handleInput}
          />
          <div>{errors.name && <span style={{color:"red"}}>{errors.name}</span>}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleInput}
          />
          <div>{errors.email && <span style={{color:"red"}}>{errors.email}</span>}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            onChange={handleInput}
          />
          <div>{errors.password && <span style={{color:"red"}}>{errors.password}</span>}</div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="text"
            id="phone"
            autoComplete="phone"
            onChange={handleInput}
          />
          <div>{errors.phone && <span style={{color:"red"}}>{errors.phone}</span>}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            sx={{backgroundColor:'#C28714', marginTop:"15px"}}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2" sx={{textDecoration:'none', color:'#0A254E'}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};


export default SignUp;