import { Navbar } from "./../components/navbar";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { Landing } from "../components/landing";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <Box sx={{ height: "200vh" }}>
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
          padding: "2.5rem ",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: "42px",
            fontWeight: "600",
            textAlign: "center",
            margin: "0 0 48px 0 ",
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
              padding: "21px 0",
              borderRadius: "28px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
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
              sx={{ background: "transparent" }}
              type="button"
            >
              Select Package
            </Button>
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
              padding: "21px 0",
              borderRadius: "28px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
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
              sx={{ background: "transparent" }}
              type="button"
            >
              Select Package
            </Button>
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
              padding: "21px 0",
              borderRadius: "28px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
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
              sx={{ background: "transparent" }}
              type="button"
            >
              Select Package
            </Button>
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
              padding: "21px 0",
              borderRadius: "28px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
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
              sx={{ background: "transparent" }}
              type="button"
            >
              Select Package
            </Button>
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
              padding: "21px 0",
              borderRadius: "28px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
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
              sx={{ background: "transparent" }}
              type="button"
            >
              Select Package
            </Button>
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
              padding: "21px 0",
              borderRadius: "28px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              // "rgba(87,56,100,.3) 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px",
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
              sx={{ background: "transparent" }}
              type="button"
            >
              Select Package
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          height: "350px",
          width: "100%",
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
        sx={{ background: "#8da9e4ff", minHeight: "50vh" }}
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

      <Box sx={{ height: "50vh", padding: "7rem 0" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
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
            }}
          >
            <TextField
              variant="standard"
              label="Name"
              sx={{ width: "75%", margin: "21px 0" }}
            />
            <TextField
              variant="standard"
              label="Surname"
              sx={{ width: "75%", margin: "21px 0" }}
            />
            <TextField
              variant="standard"
              label="Tel"
              type="tel"
              sx={{ width: "75%", margin: "21px 0" }}
            />
            <TextField
              variant="standard"
              label="Email"
              type="email"
              sx={{ width: "75%", margin: "21px 0" }}
            />
            <TextField
              variant="standard"
              label="Name"
              sx={{ width: "75%", margin: "21px 0" }}
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
  );
}
