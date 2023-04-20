import { Box, Typography, Button } from "@mui/material";
import Marquee from "react-fast-marquee";

export const Landing = () => {
  return (
    <Box
      id="home"
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
          minHeight: "50vh",
          width: "100%",
          // position: "absolute",
          // background: "#a6acb3ff",
          display: "flex",
          flexDirection: "column",
          // color: "#142531ff",
          color: "#fff",
          background: "#8da9e4ff",
          alignItems: "center",
          padding: "0 2.5rem 3.5rem 2.5rem",
        }}
      >
        <Typography
          className="carter-one"
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
          className="recursive"
          sx={{
            fontSize: "21px",
            margin: "21px 0 0 0",

            fontWeight: "450",
            textAlign: "center",
          }}
        >
          {" "}
          Creating digital experiences that ignite change.{" "}
        </Typography>

        <Typography
          component="h4"
          className="recursive"
          sx={{
            fontSize: "21px",
            margin: "21px 0",
            fontWeight: "350",
            textAlign: "center",
            width: { xs: "100%", md: "65%" },
          }}
        >
          {
            "Atomus Developers is a digital product design agency that provides a range of services to help businesses enhance their online presence and achieve their goals in the digital world. Our services include marketing website design, mobile and web product design, search-engine optimization, and web app development. Our mission is to deliver exceptional digital experiences that empower our clients to succeed in a constantly evolving digital landscape, while fostering a culture of continuous learning and improvement. Our value proposition is to provide creative solutions and innovative technologies that exceed our clients' expectations, while fostering a collaborative relationship."
          }
        </Typography>
        <Box
          sx={{
            height: "250px",
            width: "250px",
            backgroundImage: 'url("/welcome-0.gif")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "0 0 0",
          }}
        />
        <Typography
          component="h4"
          className="recursive"
          sx={{
            fontSize: "16px",
            fontWeight: "300",
            textAlign: "center",
          }}
        >
          {
            "Contact us today to schedule a consultation. Let's create something amazing together. "
          }
        </Typography>
        <Button
          className="button-89"
          sx={{
            marginBottom: "32px",
            background: "transparent",
            color: "#142531ff",
          }}
          type="button"
        >
          Get in TOuch
        </Button>
      </Box>

      {/* <Box
        sx={{
          height: "100vh",
          background: "rgba(222,222,222,.35)",
          width: "100%",
          padding: "3.5rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Typography
          component="h1"
          className="carter-one"
          sx={{
            fontSize: "32px",
            fontWeight: "600",
            textAlign: "center",
            margin: "21px 0 0px 0",
          }}
        >
          {" "}
          About Us.{" "}
        </Typography>
        <Box
          sx={{
            height: "250px",
            width: "250px",
            backgroundImage: 'url("/welcome.gif")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "21px auto ",
          }}
        />
        <Typography
          component="h4"
          className="recursive"
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {
            "Atomus Developers is a digital product design agency that specializes in creating impactful digital experiences. We offer a wide range of services, including marketing website design, mobile and web product design (UI/UX), search-engine optimization, and web app development."
          }
        </Typography>
        <Box sx={{ width: "100%", margin: "21px 0" }}>
          <div class="about-section">
            <div class="inner-container">
              <h1>About Us</h1>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus velit ducimus, enim inventore earum, eligendi nostrum
                pariatur necessitatibus eius dicta a voluptates sit deleniti
                autem error eos totam nisi neque voluptates sit deleniti autem
                error eos totam nisi neque.
              </p>
              <div class="skills">
                <span>Web Design</span>
                <span>Photoshop & Illustrator</span>
                <span>Coding</span>
              </div>
            </div>
          </div>
        </Box>
      </Box> */}
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
