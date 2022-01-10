import * as React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles, styled } from "@mui/styles";
import backgrooundImage from "./utilities/images/flight02.jpg";
import { useState, useEffect, useRef } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import UserLogin from "./models/userLogin";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${backgrooundImage})`,
    
  },
  loginContainer: {
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  userInputFields: {
    color: "red",
  },
  formContainer: {
    height: 753,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    paddingBottom: "100px"
  },
  welcomeText: {
    fontSize: "100px",
    color: "#ED6109",
    fontWeight: 900,
  },
});
const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "2rem",
          color: "white",
          borderRadius: 30,
          border: "2px solid #01336E",
          
          "&:hover": {
            backgroundColor: "#01336E",
            color: "white",
          },
        },
      },
    },
    MuiTextField: {
        styleOverrides: {
             root: {
                 width: 200
             }
            }
    },
    MuiSelect: {
      width: 100,
    },
  },
});
export default function Register() {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [userCred, setUserCred] = useState(new UserLogin("", "", ""));

  const onChangeUserCred = (e) => {
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value,
    });
    console.log(userCred);
  };

  const handleClickShowPassword = () => {
    !showPassword ? setShowPassword(true) : setShowPassword(false);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitUserCred = (e) => {
    e.preventDefault();

    Object.values(e.target).forEach((item) => {
      if (item.name && item.value)
        setUserCred({
          ...userCred,
          [item.name]: item.value,
        });
    });

    console.log(userCred);
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.loginContainer}>
          <form onSubmit={submitUserCred} className={classes.formContainer}>
            <div className={classes.welcomeText}>Register</div>
            <ThemeProvider theme={theme}>
            <TextField
              className={classes.userInputFields}
              id="outlined-basic"
              label="Enter User Name"
              value={userCred.userName}
              onChange={onChangeUserCred}
              name="userName"
            />
            <FormControl sx={{ m: 1, width: "160px" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={userCred.password}
                onChange={onChangeUserCred}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">
                User Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={userCred.userRole}
                label="Select Role"
                onChange={onChangeUserCred}
                style={{ width: "150px" }}
                name="userRole"
              >
                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                <MenuItem value={"FORMER"}>FORMER</MenuItem>
                <MenuItem value={"DEALER"}>DEALER</MenuItem>
                <MenuItem value={"CUSTOMER"}>CUSTOMER</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit">Register</Button>
            </ThemeProvider>
          </form>
        </div>
      </div>
    </div>
  );
}
