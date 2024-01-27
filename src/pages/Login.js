import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Validation from './LoginValidate';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  //Apply the styles declared to the Form in Login function.
  const classes = useStyles();

  //Initializing the name, email, password and phone by setting it to empty.
  const [values, setValues] = useState({
      
    email:'',
    password:''

  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
  };
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    axios.post('http://localhost:8081/Login', values)
    .then(res => {
      if(res.data.Status === "Success") {
            navigate('/ReportVehicle')
        } else {
           alert("Login Failed");
        }
      })
      
    .then(err => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: '12rem', marginBottom: '12rem' }}>
      <div className={classes.root}>
        <Typography component="h1" variant="h5" sx={{color:'#0A254E'}}>
          Sign In
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            autoComplete="current-password"
            onChange={handleInput}
          />
          <div style={{marginBottom:"10px"}}>{errors.password && <span style={{color:"red"}}>{errors.password}</span>}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            sx={{backgroundColor:'#C28714'}}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" sx={{textDecoration:'none', color:'#0A254E'}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2" sx={{textDecoration:'none', color:'#0A254E'}}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;