import { makeStyles } from "@mui/styles";
import backgrooundImage from "./utilities/images/flight02.jpg";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${backgrooundImage})`,

    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  welcomeText: {
    fontSize: "100px",
    color: "#ED6109",
    fontWeight: 900,
    paddingBottom: 315,
  },

  buttonContainer: {
    width: 500,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 50,
  },
  loginButtons: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

    height: 48,
    margin: 20,
    width: 200,
    borderRadius: 50,
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
          color: "#ED6109",
          borderRadius: 30,
          border: "2px solid #ED6109",
          "&:hover": {
            backgroundColor: "rgb(7, 177, 77, 0.42)",
            color: "white",
          },
        },
      },
    },
  },
});

const Homepage = () => {
  const classes = useStyles();

  let navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.welcomeText}>
        Welcome to Flite Management System
      </div>
      <div className={classes.buttonContainer}>
        <ThemeProvider theme={theme}>
          <Button className={classes.loginButtons} variant="outlined"
           onClick={() => {
            navigate("/register");
          }}>
            Register
          </Button>
          <Button
            className={classes.loginButtons}
            variant="outlined"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};
export default Homepage;
