import { Navbar } from "./../components/navbar";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { Landing } from "../components/landing";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <Box
      sx={{
        height: "200vh",
        backgroundImage: 'url("/Colored Shapes.svg")',
        backdropFilter: "blur(1px)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Landing />
      <Box
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
            background: "rgba(1,1,1,.1)",
            margin: "0",
            padding: "1rem 2.5rem ",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "42px",
              fontWeight: "600",
              textAlign: "center",
              width: "100%",
              margin: "48px 0 ",
              // background: "white",
              // color: "#eee",
            }}
          >
            {" "}
            Our Services.{" "}
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
                  padding: "21px 0",
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
                  className="glow-on-hover"
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
                  padding: "21px 0",
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
                  className="glow-on-hover"
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
                  padding: "21px 0",
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
                  className="glow-on-hover"
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
                  padding: "21px 0",
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
                  className="glow-on-hover"
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
                  padding: "21px 0",
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
                  <li style={{ margin: "12px 0" }}>Website Desing.</li>
                  <li style={{ margin: "12px 0" }}>Brochures </li>
                  <li style={{ margin: "12px 0" }}>Logo Design</li>
                  <li style={{ margin: "12px 0", color: "transparent" }}>
                    Business Cards.
                  </li>
                </Box>
                <Button
                  className="glow-on-hover"
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
                  padding: "21px 0",
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
                  className="glow-on-hover"
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
          className="block"
          sx={{ background: "#8da9e4ff", minHeight: "80vh", padding: "32px 0" }}
        >
          <Typography
            component="h1"
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
            sx={{
              fontSize: "21px",
              fontWeight: "300",
              textAlign: "center",
              color: "#eee",
              margin: "0 0 21px 0 ",
            }}
          >
            {" "}
            Checkout some projects we worked on.{" "}
          </Typography>
          <Box
            sx={{
              height: "150px",
              width: "150px",
              margin: "32px auto",
              backgroundImage: 'url("/projects.svg")',
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
                sx={{
                  color: "white",
                  margin: "0 auto 21px auto",
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
                sx={{
                  color: "white",
                  margin: "0 auto 21px auto",
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
            sx={{
              fontSize: "21px",
              fontWeight: "300",
              textAlign: "center",
              color: "#eee",
              margin: "0 0 21px 0 ",
            }}
          >
            {" "}
            Checkout some templates you can purchase.{" "}
          </Typography>
          <Box
            sx={{
              height: "150px",
              width: "150px",
              margin: "32px auto",
              backgroundImage: 'url("/solutions-light.svg")',
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
                "&:hover": { scale: "1" },
              }}
            >
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  margin: "12px 21px",
                  backgroundImage: 'url("/nolie-naturals.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  margin: "0 auto 21px auto",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                Visit Nolie Naturals
              </Typography>
            </Box>
            <Box
              sx={{
                scale: "0.8",
                transition: "800ms",
                "&:hover": { scale: "1" },
              }}
            >
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  margin: "12px 21px",
                  backgroundImage: 'url("/misguided-logo.jpeg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  margin: "0 auto 21px auto",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                Visit Misguided Ent.
              </Typography>
            </Box>
          </Marquee>
        </Box>

        <Box
          id="contact"
          sx={{
            height: "100vh",
            padding: "12rem 0 0 0",
            margin: { lg: "42px 0 0 0" },
            zIndex: "-5",
            // background: "white",
          }}
        >
          <Grid container>
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
                  backgroundImage: 'url("/contact.svg")',
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
                rows={5}
                sx={{
                  width: "75%",
                  margin: "21px 0",
                  background: "transparent",
                  ...inputStyles,
                }}
              />
              <Button
                className="glow-on-hover"
                sx={{ background: "transparent", width: "75%" }}
                type="button"
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  background: "#8daae5ff",
                  minHeight: "20vh",
                  margin: "32px 0 0 0 ",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "50%",
                  }}
                >
                  <Box
                    sx={{
                      height: "150px",
                      width: "150px",
                      backgroundImage: 'url("/logo_transparent.png")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "50%",
                    // background: "yellow",
                    height: "150px",
                  }}
                >
                  <Typography sx={{ color: "#111", fontWeight: "550" }}>
                    {" "}
                    Copyright 2023.{" "}
                  </Typography>
                  {/* <Typography sx={{ color: "#111", fontWeight: "550" }}>
                  {" "}
                  2023.{" "}
                </Typography> */}
                </Box>
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
