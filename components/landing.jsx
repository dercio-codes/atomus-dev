import { Box, Typography, TextField, Button } from "@mui/material";
import Marquee from "react-fast-marquee";

export const Landing = () => {
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        background: "rgba(1,1,1,.1)",
        // marginBottom: "1px",
      }}
    >
      <Box
        sx={{
          height: "90vh",
          width: "100%",
          // position: "absolute",
          // background: "#a6acb3ff",
          display: "flex",
          flexDirection: "column",
          // color: "#142531ff",
          color: "#fff",
          background: "#8da9e4ff",
          alignItems: "center",
          padding: "2.5rem",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: "42px",
            fontWeight: "600",
            textAlign: "center",
            margin: "21px 0 0px 0",
          }}
        >
          {" "}
          Welcome to Atomus Dev.{" "}
        </Typography>
        <Typography
          component="h4"
          sx={{
            fontSize: "21px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {" "}
          Providing Online Solutions For Your Business.{" "}
        </Typography>
        <Box
          sx={{
            height: "250px",
            width: "250px",
            backgroundImage: 'url("/solutions.svg")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "32px 0 0 0",
          }}
        />
        <Typography
          component="h4"
          sx={{
            fontSize: "21px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {" "}
          Inspiring Tech Needs for Business.{" "}
        </Typography>
        <Typography
          component="h4"
          sx={{
            fontSize: "21px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {" "}
          Accelerating Tech with confidence{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          background: "rgba(1,1,1,.1)",
          position: "relative",
          width: "100%",
          height: { xs: "50vh", lg: "" },
          padding: "21px 0",
          display: "flex",
          alignItems: { xs: "flex-end", lg: "center" },
          justifyContent: { xs: "flex-end", lg: "center" },
        }}
      >
        {/* <OurClients /> */}
      </Box>
      <Box
        sx={{
          height: { xs: "70vh", lg: "50vh" },
          width: { xs: "90%", lg: "50%" },
          bottom: "12px",
          position: "absolute",
          transform: { xs: "translateY(0vh)", lg: "translateY(6vh)" },
          zIndex: "999",
          borderRadius: "28px",
          background: "#142531ff",
          padding: "2.5rem",
          color: "#eee",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // background: "rgba(1,1,1,.9)",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            // textAlign: "center",
          }}
        >
          {" "}
          Join Our Mailing List?{" "}
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontSize: "21px",
            fontWeight: "400",
            // textAlign: "center",
          }}
        >
          {" "}
          Never miss out on upcoming updates and specials{" "}
        </Typography>
        <Box
          sx={{
            height: "150px",
            width: "150px",
            margin: "32px auto",
            backgroundImage: 'url("/join.svg")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <Typography
          component="h3"
          sx={{
            fontSize: "21px",
            fontWeight: "400",
            // textAlign: "center",
          }}
        >
          {" "}
          Enter Your Email:{" "}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <TextField
            variant="standard"
            sx={{
              background: "",
              width: "80%",
              "& .MuiInputBase-root": {
                borderBottom: "2px solid white",
                color: "white",
                margin: "0px 0 5px",
              },
              "& .MuiInputBase-root.Mui-focused": {
                "& > fieldset": {
                  borderBottom: "3px solid white",
                  color: "#40e0d0",
                },
              },
              "& .MuiInputBase-root.Mui-focused": {
                "& > fieldset": {
                  borderBottom: "3px solid white",
                  color: "#40e0d0",
                },
              },
            }}
          />
          <Button
            sx={{
              color: "#eee",
              // color: "#142531ff",
              "&:hover": {
                color: "#eee",
                background: "#142531ff",
              },
              fontWeight: "600",
              height: "100%",
              width: "20%",
            }}
          >
            {" "}
            Join{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const OurClients = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "40vh", lg: "30vh" },
        width: "100%",
        background: "",
        margin: "21px 0",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: "42px",
          fontWeight: "600",
          textAlign: "center",
          margin: "12px 0",
        }}
      >
        {" "}
        Tech Stack.{" "}
      </Typography>
      <Box
        sx={{
          height: "100%",
          background: "",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "32px 0 0 0 ",
        }}
      >
        <Marquee gradient={false} style={{ height: "fit-content" }}>
          <Box
            sx={{
              height: "150px",
              width: "150px",
              backgroundImage:
                'url("https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              scale: "0.8",
            }}
          />
          <Box
            sx={{
              height: "150px",
              width: "150px",
              backgroundImage: 'url("/google-cloud-logo.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              scale: "0.8",
            }}
          />
          <Box
            sx={{
              height: "150px",
              width: "150px",
              backgroundImage: 'url("/firebase-logo.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              scale: "0.8",
            }}
          />
          <Box
            sx={{
              height: "150px",
              width: "150px",
              backgroundImage: 'url("/react-logo.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              scale: "0.8",
            }}
          />
          <Box
            sx={{
              height: "150px",
              width: "150px",
              backgroundImage:
                'url("https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              scale: "0.8",
            }}
          />
        </Marquee>
      </Box>
      <Typography
        component="h1"
        sx={{
          fontSize: "21px",
          fontWeight: "300",
          textAlign: "center",
          color: "#142531ff",
          margin: "21px 0 ",
        }}
      >
        {" "}
        Building the Future with Tech.{" "}
      </Typography>
    </Box>
  );
};
