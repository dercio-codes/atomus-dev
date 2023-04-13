import { Navbar } from "./../components/navbar";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { Landing } from "../components/landing";
import { About } from "../components/about";
import Marquee from "react-fast-marquee";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
// // import Reacr

export default function Home() {
  return (
    <Box
      sx={{
        // height: "200vh",
        marginTop: "90px",
        backgroundImage: 'url("/Colored Shapes.svg")',
        backdropFilter: "blur(1px)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Navbar /> */}
      <Landing />
      <Box
        id="services"
        sx={{
          minHeight: { xs: "50vh", lg: "50vh" },
          width: "100%",
          // background: "#111",
          backgroundImage: 'url("/Colored Shapes.svg")',
          backdropFilter: "blur(1px)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          margin: "0",
          // padding: "2.5rem ",
        }}
      >
        <Box
          sx={{
            minHeight: { xs: "50vh", lg: "50vh" },
            width: "100%",
            background: "rgba(222,222,222,.75)",
            margin: "0",
            padding: "1rem 2.5rem ",
          }}
        >
          <Typography
            component="h1"
            className="carter-one"
            sx={{
              fontSize: "42px",
              fontWeight: "600",
              textAlign: "center",
              width: "100%",
              margin: "32px 0 8px 0",
              // background: "white",
              // color: "#eee",
            }}
          >
            {" "}
            Our Services.{" "}
          </Typography>
          <Typography
            component="h1"
            className="recursive"
            sx={{
              fontSize: "21px",
              fontWeight: "300",
              textAlign: "center",
              width: "80%",
              margin: "0 auto 21px auto ",
            }}
          >
            {" "}
            Services we offer at our company.{" "}
          </Typography>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={5.5}
              md={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "21px auto",
                color: "#111",
                background: "white",
                borderRadius: "28px",
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/creative-web-homepage-illustration_52683-79847.jpg?w=1380&t=st=1678819805~exp=1678820405~hmac=5fd58710434e93c0e4611c9590869169ea3f64ca09d70dd917363c119f7d9851")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,.85)",
                  width: "100%",
                  padding: "42px 0",
                  borderRadius: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    backgroundImage:
                      'url("https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/1x/external-web-development-web-design-and-development-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto-2.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    scale: "0.8",
                  }}
                />
                <Typography
                  component="h1"
                  className="carter-one"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textAlign: "center",
                    margin: "16px 0",
                  }}
                >
                  {" "}
                  Static Website.{" "}
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                    // margin: "12px 0",
                  }}
                >
                  {" "}
                  Includes{" "}
                </Typography>
                <Box
                  sx={{
                    lineHeight: "1.7rem",
                    margin: "0",
                    width: "fit-content",
                    background: "",
                  }}
                >
                  <li style={{ margin: "12px 0" }}>1 - 3 Pages Website.</li>
                  <li style={{ margin: "12px 0" }}>TLS Domain.</li>
                  <li style={{ margin: "12px 0" }}>Website Hosting.</li>
                  <li style={{ margin: "12px 0" }}>Database Storage.</li>
                </Box>
                <Button
                  className="button-89"
                  sx={{ background: "transparent", color: "#142531ff" }}
                  type="button"
                >
                  Select Package
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={5.5}
              md={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "21px auto",
                color: "#111",
                background: "white",
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/mobile-app-development-isometric-background-with-composition-smartphone-screens-with-3d-app-icons-connections-vector-illustration_1284-77301.jpg?w=1380&t=st=1678819501~exp=1678820101~hmac=c6d1eeae3b5ec30f27a3f79485da456ebca944f0e8a7c668c33d5cdf2b0990a0")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "28px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,.85)",
                  width: "100%",
                  padding: "42px 0",
                  borderRadius: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    backgroundImage:
                      'url("https://img.icons8.com/external-basicons-line-edtgraphics/1x/external-Mobile-development-device-activities-basicons-line-edtgraphics.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    scale: "0.8",
                  }}
                />
                <Typography
                  component="h1"
                  className="carter-one"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textAlign: "center",
                    margin: "16px 0",
                  }}
                >
                  {" "}
                  Mobile Development.{" "}
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                    // margin: "12px 0",
                  }}
                >
                  {" "}
                  Includes{" "}
                </Typography>
                <Box
                  sx={{
                    lineHeight: "1.7rem",
                    margin: "0",
                    width: "fit-content",
                    background: "",
                  }}
                >
                  <li style={{ margin: "12px 0" }}>1 - 3 Pages Website.</li>
                  <li style={{ margin: "12px 0" }}>TLS Domain.</li>
                  <li style={{ margin: "12px 0" }}>Website Hosting.</li>
                  <li style={{ margin: "12px 0" }}>Database Storage.</li>
                </Box>
                <Button
                  className="button-89"
                  sx={{ background: "transparent", color: "#142531ff" }}
                  type="button"
                >
                  Select Package
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={5.5}
              md={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "21px auto",
                color: "#111",
                background: "white",
                // padding: "21px 0",
                borderRadius: "28px",
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/ui-ux-designers-isometric-background_1284-71566.jpg?w=826&t=st=1678819633~exp=1678820233~hmac=a715d90417cfe0882e8d3be0db10ae46c3082160fccefea26c15a62e8221a678")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,.85)",
                  width: "100%",
                  padding: "42px 0",
                  borderRadius: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    backgroundImage:
                      'url("https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/1x/external-app-development-seo-and-web-smashingstocks-detailed-outline-smashing-stocks.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    scale: "0.8",
                  }}
                />
                <Typography
                  component="h1"
                  className="carter-one"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textAlign: "center",
                    margin: "16px 0",
                  }}
                >
                  {" "}
                  Progressive Web App.{" "}
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                    // margin: "12px 0",
                  }}
                >
                  {" "}
                  Includes{" "}
                </Typography>
                <Box
                  sx={{
                    lineHeight: "1.7rem",
                    margin: "0",
                    width: "55%",
                    background: "",
                  }}
                >
                  <li style={{ margin: "12px 0" }}>5+ Pages.</li>
                  <li style={{ margin: "12px 0" }}>TLS Domain.</li>
                  <li style={{ margin: "12px 0" }}>
                    Website Hosting + Database Storage.
                  </li>
                  <li style={{ margin: "12px 0" }}>
                    Extra Features : Example Member Login or Live Chat{" "}
                  </li>
                </Box>
                <Button
                  className="button-89"
                  sx={{ background: "transparent", color: "#142531ff" }}
                  type="button"
                >
                  Select Package
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={5.5}
              md={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "21px auto",
                color: "#111",
                background: "white",
                // padding: "21px 0",
                borderRadius: "28px",
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/seo-analysis-isometric-composition-with-web-optimization-symbols_1284-32010.jpg?w=996&t=st=1678819213~exp=1678819813~hmac=209b54cf3d9ea26f1d1282041955dd1c85fdeb15c7e466828b76c62162fc1d95")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,.85)",
                  width: "100%",
                  padding: "42px 0",
                  borderRadius: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    backgroundImage:
                      'url("https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/1x/external-seo-web-development-company-inipagistudio-mixed-inipagistudio.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    scale: "0.8",
                  }}
                />
                <Typography
                  component="h1"
                  className="carter-one"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textAlign: "center",
                    margin: "16px 0",
                  }}
                >
                  {" "}
                  SEO.{" "}
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                    // margin: "12px 0",
                  }}
                >
                  {" "}
                  Includes{" "}
                </Typography>
                <Box
                  sx={{
                    lineHeight: "1.7rem",
                    margin: "0",
                    width: "fit-content",
                    background: "",
                  }}
                >
                  <li style={{ margin: "12px 0" }}>Google Ads</li>
                  <li style={{ margin: "12px 0" }}>Youtube Ads</li>
                  <li style={{ margin: "12px 0" }}>Facebook Ads</li>
                  <li style={{ margin: "12px 0" }}>Instagram Ads</li>
                  <li style={{ margin: "12px 0", color: "transparent" }}>
                    Instagram Ads
                  </li>
                </Box>
                <Button
                  className="button-89"
                  sx={{ background: "transparent", color: "#142531ff" }}
                  type="button"
                >
                  Select Package
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5.5}
              md={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "21px auto",
                color: "#111",
                background: "white",
                borderRadius: "28px",
                backgroundImage:
                  'url("https://img.freepik.com/free-vector/gradient-colored-ui-ux-background_79603-1924.jpg?w=1380&t=st=1678817506~exp=1678818106~hmac=11062cc82da8315583f2bd5daa46162ce52646b0b402f15cd0d4bd2a6909de16")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,.6)",
                  width: "100%",
                  padding: "42px 0",
                  borderRadius: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    backgroundImage:
                      'url("https://img.icons8.com/external-3d-design-circle/1x/external-UxUi-Design-design-and-development-3d-design-circle.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    scale: "0.8",
                  }}
                />
                <Typography
                  component="h1"
                  className="carter-one"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textAlign: "center",
                    margin: "16px 0",
                  }}
                >
                  {" "}
                  UX/UI Design.{" "}
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                    margin: "0",
                  }}
                >
                  {" "}
                  Includes{" "}
                </Typography>
                <Box
                  sx={{
                    lineHeight: "1.7rem",
                    margin: "0",
                    width: "fit-content",
                    background: "",
                  }}
                >
                  <li style={{ margin: "12px 0" }}>Website Desing.</li>
                  <li style={{ margin: "12px 0" }}>Brochures </li>
                  <li style={{ margin: "12px 0" }}>Logo Design</li>
                  <li style={{ margin: "12px 0" }}>Business Cards.</li>
                </Box>
                <Button
                  className="button-89"
                  sx={{ background: "transparent", color: "#142531ff" }}
                  type="button"
                >
                  Select Package
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={5.5}
              md={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "21px auto",
                color: "#111",
                background: "white",
                // padding: "21px 0",
                borderRadius: "28px",
                backgroundImage:
                  'url("https://img.freepik.com/free-photo/laptops-transfer-downloading-data-cloud-computing-network-technology-infrastructure-data-diagram-icon-symbol-3d-rendering_56104-1279.jpg?w=1060&t=st=1678819297~exp=1678819897~hmac=d03035505834c00ed1aa4448bfd76bb6b29fbf7fa616dc225173794a799036af")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
              }}
            >
              <Box
                sx={{
                  background: "rgba(255,255,255,.85)",
                  width: "100%",
                  padding: "42px 0",
                  borderRadius: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    backgroundImage:
                      'url("https://img.icons8.com/dotty/1x/servers-group.png")',
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    scale: "0.8",
                  }}
                />
                <Typography
                  component="h1"
                  className="carter-one"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textAlign: "center",
                    margin: "16px 0",
                  }}
                >
                  {" "}
                  Hosting.{" "}
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                    // margin: "12px 0",
                  }}
                >
                  {" "}
                  Includes{" "}
                </Typography>
                <Box
                  sx={{
                    lineHeight: "1.7rem",
                    margin: "0",
                    width: "fit-content",
                    background: "",
                  }}
                >
                  <li style={{ margin: "12px 0" }}>Website Hosting.</li>
                  <li style={{ margin: "12px 0" }}>Database Storage.</li>
                  <li style={{ margin: "12px 0", color: "" }}>Emails</li>
                  <li style={{ margin: "12px 0", color: "" }}>Backup Data</li>
                </Box>
                <Button
                  className="button-89"
                  sx={{ background: "transparent", color: "#142531ff" }}
                  type="button"
                >
                  Select Package
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            height: "350px",
            width: "100%",
            backgroundColor: "rgba(200,200,200,.3)",
            backgroundImage: 'url("/wave.svg")',
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
            // scale: "0.8",
          }}
        />

        <Box
          id="portfolio"
          className="block"
          sx={{ background: "#8da9e4ff", minHeight: "80vh", padding: "32px 0" }}
        >
          <Typography
            component="h1"
            className="carter-one"
            sx={{
              fontSize: "42px",
              fontWeight: "600",
              textAlign: "center",
              color: "#eee",
              margin: "0 0 0px 0 ",
            }}
          >
            {" "}
            Projects.{" "}
          </Typography>
          <Typography
            component="h1"
            className="recursive"
            sx={{
              fontSize: "21px",
              fontWeight: "300",
              textAlign: "center",
              color: "#eee",
              width: "80%",

              margin: "0 auto 21px auto ",
            }}
          >
            {" "}
            Checkout some projects we worked on.{" "}
          </Typography>
          <Box
            sx={{
              height: "300px",
              width: "300px",
              margin: "32px auto",
              backgroundImage: 'url("/projects-0.gif")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <Grid container>
            <Grid item xs={6} md={4} lg={3}>
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  margin: "12px auto",
                  backgroundImage: 'url("/nolie-naturals.jpg")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  backgroundRepeat: "no-repeat",
                  scale: "0.8",
                  transition: "800ms",
                  "&:hover": { scale: "1" },
                }}
              />
              <Typography
                className="recursive"
                sx={{
                  color: "white",
                  margin: "12px auto 21px auto",
                  textAlign: "center",
                }}
              >
                Visit Nolie Naturals
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  margin: "12px auto",
                  backgroundImage: 'url("/misguided-logo.jpeg")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  backgroundRepeat: "no-repeat",
                  scale: "0.8",
                  transition: "800ms",
                  "&:hover": { scale: "1" },
                }}
              />
              <Typography
                className="recursive"
                sx={{
                  color: "white",
                  margin: "12px auto 21px auto",
                  textAlign: "center",
                }}
              >
                Visit Misguided Ent.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          className="block"
          sx={{ background: "#142531ff", minHeight: "70vh", padding: "52px 0" }}
        >
          <Typography
            component="h1"
            className="carter-one"
            sx={{
              fontSize: "42px",
              fontWeight: "600",
              textAlign: "center",
              color: "#eee",
              margin: "0 0 0px 0 ",
            }}
          >
            {" "}
            Templates.{" "}
          </Typography>
          <Typography
            component="h1"
            className="recursive"
            sx={{
              fontSize: "21px",
              fontWeight: "300",
              textAlign: "center",
              color: "#eee",
              width: "80%",
              margin: "0 auto 21px auto ",
            }}
          >
            {" "}
            Checkout some templates you can purchase.{" "}
          </Typography>
          <Box
            sx={{
              height: "300px",
              width: "300px",
              margin: "12px auto",
              backgroundImage: 'url("/templates.gif")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Marquee gradient={false}>
            <Box
              sx={{
                scale: "0.8",
                transition: "800ms",
                "&:hover": { scale: "0.85" },
              }}
            >
              <Box
                sx={{
                  height: "250px",
                  width: "450px",
                  margin: "0 21px",
                  backgroundImage: 'url("/ecommerce-template-0.png")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  backgroundRepeat: "no-repeat",
                  transition: "800ms",
                  "&:hover": { backgroundSize: "contain", transition: "800ms" },
                }}
              />
              <Typography
                className="recursive"
                sx={{
                  color: "white",
                  margin: "12px auto 21px auto",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                Visit Template
              </Typography>
            </Box>
            <Box
              sx={{
                scale: "0.8",
                transition: "800ms",
                "&:hover": { scale: "0.85" },
              }}
            >
              <Box
                sx={{
                  height: "250px",
                  width: "450px",
                  margin: "0 21px",
                  backgroundImage: 'url("/static-site-0.png")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  backgroundRepeat: "no-repeat",
                  transition: "800ms",
                  "&:hover": { backgroundSize: "contain", transition: "800ms" },
                }}
              />
              <Typography
                className="recursive"
                sx={{
                  color: "white",
                  margin: "12px auto 21px auto",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                Visit Template.
              </Typography>
            </Box>
          </Marquee>
        </Box>

        {/* <About /> */}

        <Box
          id="contact"
          sx={{
            height: "100vh",
            padding: "12rem 0 0 0",
            margin: { lg: "0px 0 0 0" },
            zIndex: "-5",
            // background: "white",
          }}
        >
          <Grid container>
            <Grid
              id="about"
              xs={12}
              md={6}
              sx={{
                height: "auto",
                background: "white",
                border: "1px solid rgba(1,1,1,.1) ",
                padding: "150px",
                margin: "21px 0 0 0",
              }}
            >
              <h1 className="carter-one">About Us</h1>

              <p className="text">
                Atomus Developers is a digital business solutions company that
                aims to bridge the gap between access, quality, and
                affordability for South Africa and other African countries. Our
                mission is to bring innovative and cutting-edge digital
                solutions that address the challenges posed by the 4th
                industrial revolution. With a deep understanding of the local
                market, we are poised to provide businesses with the necessary
                tools and expertise to compete in a rapidly evolving digital
                landscape. Our goal is to help our clients overcome the barriers
                to success and enable them to reach their full potential. At
                Atomus Developers, we believe that every business deserves a
                chance to thrive, and we are committed to making that a reality
                for our customers. Atomus Developers exists to provide impactful
                digital product design services that help our clients achieve
                their goals in a constantly evolving digital landscape. We solve
                the problem of businesses needing to stand out in an
                increasingly competitive online space by delivering exceptional
                digital experiences that not only attract but also engage their
                target audience. Our services help clients to enhance their
                online presence, optimize their websites for search engines, and
                develop web and mobile applications that meet the needs of their
                users. Ultimately, we empower our clients to succeed in the
                digital world.
              </p>
              <div className="skills">
                <span>Programming</span>
                <span>Figma & Photoshop </span>
                <span>Hosting</span>
              </div>
              <div className="skills">
                <span>Web Design</span>
                <span>Marketing</span>
                <span>SEO</span>
              </div>
            </Grid>
            <Grid
              xs={12}
              md={6}
              sx={{
                height: "auto",
                background: "rgba(255,255,255,.5)",
                padding: "32px",
                margin: "21px 0 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url('/about-us-option-1.gif')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "500px",
                  width: "500px",
                  margin: "auto auto",
                }}
              ></Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: "rgba(255,255,255,0.3)",
              }}
            >
              <Typography
                component="h1"
                className="carter-one"
                sx={{
                  fontSize: "42px",
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#142531ff",
                  margin: "0 0 0px 0 ",
                }}
              >
                {" "}
                Get in Touch.{" "}
              </Typography>
              <Typography
                component="h1"
                className="recursive"
                sx={{
                  fontSize: "18px",
                  fontWeight: "300",
                  textAlign: "center",
                  width: "80%",
                  color: "#142531ff",
                  margin: "0px auto ",
                }}
              >
                {" "}
                Send in a query and we will return with a response.{" "}
              </Typography>
              <Box
                sx={{
                  height: "350px",
                  width: "350px",
                  margin: "12px auto",
                  backgroundImage: 'url("/contact-outline.gif")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  backgroundRepeat: "no-repeat",
                  transition: "800ms",
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 2.5rem",
                background: "rgba(255,255,255,0.3)",
              }}
            >
              <TextField
                variant="standard"
                label="Name"
                sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
              />
              <TextField
                variant="standard"
                label="Surname"
                sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
              />
              <TextField
                variant="standard"
                label="Tel"
                type="tel"
                sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
              />
              <TextField
                variant="standard"
                label="Email"
                type="email"
                sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
              />
              <TextField
                variant="standard"
                label="Query"
                multiline={true}
                type={"textarea"}
                placeholder={"Enter your query here..."}
                rows={2}
                sx={{
                  width: "75%",
                  margin: "21px 0",
                  background: "transparent",
                  ...inputStyles,
                }}
              />
              <Button
                className="button-89"
                sx={{ background: "transparent", width: "75%" }}
                type="button"
              >
                Submit
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginTop: "42px",
                // position: "sticky",
                // bottom: "0",
                // overflow: "auto",
                // height: "50vh",
              }}
            >
              <Box
                sx={{
                  height: { xs: "70vh", lg: "50vh" },
                  width: { xs: "100%", lg: "100%" },
                  margin: "0 auto",
                  // // // // bottom: "12px",
                  // // // // position: "absolute",
                  // // // // transform: { xs: "translateY(0vh)", lg: "translateY(6vh)" },
                  zIndex: "999",
                  // borderRadius: "28px",
                  background: "#142531ff",
                  padding: "2.5rem",
                  color: "#eee",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // background: "rgba(1,1,1,.9)",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", lg: "50%" },
                    margin: "0 auto",
                  }}
                >
                  <Typography
                    component="h3"
                    className="carter-one"
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
                    className="recursive"
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
                      backgroundImage: 'url("/join.gif")',
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
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "16px 0 0 0",
                      // background: "red",
                    }}
                  >
                    <TextField
                      // variant="standard"
                      sx={{
                        background: "",
                        width: "80%",
                        "& .MuiInputBase-root": {
                          border: "2px solid white",
                          color: "white",
                          // margin: "0px 5px 0 0 ",
                        },
                        "& .MuiInputBase-root.Mui-focused": {
                          "& > fieldset": {
                            border: "3px solid white",
                            color: "#40e0d0",
                          },
                        },
                        "& .MuiInputBase-root.Mui-focused": {
                          "& > fieldset": {
                            border: "3px solid white",
                            color: "#40e0d0",
                          },
                        },
                      }}
                    />
                    <Button
                      sx={{
                        color: "#eee",
                        color: "#142531ff",
                        padding: "18px 0",
                        background: "#eee",
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
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  background: "#8daae5ff",
                  minHeight: "20vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "32px 0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: { xs: "80%", md: "75%" },
                    margin: "32px 0 ",
                  }}
                >
                  <Link href="mailto:atomusdev@gmail.com">
                    <a>
                      <EmailIcon
                        sx={{ width: "21px", height: "21px", background: "" }}
                      />
                    </a>
                  </Link>
                  <Link href="tel:0677551017">
                    <a>
                      <CallIcon
                        sx={{ width: "21px", height: "21px", background: "" }}
                      />
                    </a>
                  </Link>
                  <Link href="">
                    <a>
                      <LinkedInIcon
                        sx={{ width: "21px", height: "21px", background: "" }}
                      />
                    </a>
                  </Link>
                  <Link href="https://www.twitter.com/atomusdev">
                    <a>
                      <TwitterIcon
                        sx={{ width: "21px", height: "21px", background: "" }}
                      />
                    </a>
                  </Link>
                </Box>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    margin: "21px 0",
                    // textAlign: "center",
                  }}
                >
                  <Link href="https://www.atomusdev.co.za">
                    <a>Copyright 2023, Atomus Developers (C)</a>
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

const inputStyles = {
  "& .MuiInputBase-root": {
    borderBottom: "2px solid #142531ff",
    color: "#142531ff",
    // margin: "0px 0 5px",
  },
  "& .MuiInputBase-root.Mui-focused": {
    "& > fieldset": {
      borderBottom: "3px solid #142531ff",
      color: "#40e0d0",
    },
  },
  "& .MuiInputBase-root.Mui-focused": {
    "& > fieldset": {
      borderBottom: "3px solid #142531ff",
      color: "#40e0d0",
    },
  },
};
