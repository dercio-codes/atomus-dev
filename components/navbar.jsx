import { Box, Typography, Button, IconButton } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 21px",
        background: "#8da9e4ff",
        position: "fixed",
        width: "100%",
        top: "0",
        zIndex: "99999",
      }}
    >
      <Link target="" href="#home" style={{ width: "100% !important" }}>
        <a target="" href="#home" style={{ width: "100% !important" }}>
          <Box
            sx={{
              height: "100px",
              width: "150px",
              backgroundImage: 'url("/logo_transparent.png")',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </a>
      </Link>

      <IconButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Box
          sx={{
            height: "30px",
            width: "30px",
            display: { xs: "flex", lg: "none" },

            backgroundImage:
              'url("https://cdn-icons-png.flaticon.com/512/8166/8166537.png")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      </IconButton>

      <Box
        onClick={() => {
          setOpen(!open);
        }}
        sx={{
          height: "100vh",
          display: open ? "flex" : "none",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          backdropFilter: "blur(5px)",
          // background: "rgba(255,255,255,.5)",
          zIndex: "99999999",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{
            position: "fixed",
            top: "0",
            left: "12px",
          }}
        >
          <Link target="" href="#home" style={{ width: "100% !important" }}>
            <a target="" href="#home" style={{ width: "100% !important" }}>
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  backgroundImage: 'url("/logo_transparent.png")',
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              />
            </a>
          </Link>
        </IconButton>
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
          sx={{
            position: "fixed",
            top: "50px",
            right: "21px",
          }}
        >
          <Box
            sx={{
              height: "45px",
              width: "45px",
              backgroundImage: 'url("/close-icon.gif")',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </IconButton>
        <Box>
          <Button
            className="button-89"
            sx={{
              background: "transparent",
              color: "#142531ff",
              minWidth: "100%",
            }}
            type="button"
          >
            <Link target="" href="#home" style={{ width: "100% !important" }}>
              <a target="" href="#home" style={{ width: "100% !important" }}>
                Home
              </a>
            </Link>
          </Button>
          <Button
            className="button-89"
            sx={{
              background: "transparent",
              color: "#142531ff",
              minWidth: "100%",
            }}
            type="button"
          >
            <Link target="" href="#about" style={{ width: "100% !important" }}>
              <a target="" href="#about" style={{ width: "100% !important" }}>
                About Us
              </a>
            </Link>
          </Button>
          <Button
            className="button-89"
            sx={{
              background: "transparent",
              color: "#142531ff",
              minWidth: "100%",
            }}
            type="button"
          >
            <Link
              target=""
              href="#portfolio"
              style={{ width: "100% !important" }}
            >
              <a
                target=""
                href="#portfolio"
                style={{ width: "100% !important" }}
              >
                Portfolio
              </a>
            </Link>
          </Button>
          <Box
            sx={{
              width: "100%",
              // background: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "21px 0 0 0",
            }}
          >
            <Button
              // className="button-48"
              sx={{
                transition: "1200ms",
                color: "#fff",
                fontWeight: "600",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <div class="container" style={{ width: "100% !important" }}>
                <Link
                  target=""
                  href="#contact"
                  style={{ width: "100% !important" }}
                >
                  <a
                    target=""
                    href="#contact"
                    class="button"
                    style={{ width: "100% !important" }}
                  >
                    <div class="button__line"></div>
                    <div class="button__line"></div>
                    <span class="button__text">GET IN TOUCH</span>
                    <div class="button__drow1"></div>
                    <div class="button__drow2"></div>
                  </a>
                </Link>
              </div>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            background: "transparent",
            minHeight: "20vh",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 0",
            position: "absolute",
            bottom: "0",
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
              <a target="_blank">
                <EmailIcon
                  sx={{ width: "21px", height: "21px", background: "" }}
                />
              </a>
            </Link>
            <Link href="tel:0677551017">
              <a target="_blank">
                <CallIcon
                  sx={{ width: "21px", height: "21px", background: "" }}
                />
              </a>
            </Link>
            <Link href="">
              <a target="_blank">
                <LinkedInIcon
                  sx={{ width: "21px", height: "21px", background: "" }}
                />
              </a>
            </Link>
            <Link href="https://www.twitter.com/atomusdev">
              <a target="_blank">
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
            <Link target="_blank" href="https://www.atomusdev.co.za">
              <a>Copyright 2023, Atomus Developers (C)</a>
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          background: "#8da9e4ff",
        }}
      >
        <Button
          sx={{
            "&:hover": { scale: "1.1" },
            transition: "1200ms",
            color: "#fff",
            fontWeight: "600",
            scale: { xs: "0.7", md: "1" },
          }}
          type="button"
        >
          <Link
            target="_blank"
            href="#home"
            style={{ width: "100% !important" }}
          >
            <a
              target="_blank"
              href="#home"
              style={{ width: "100% !important" }}
            >
              Home
            </a>
          </Link>
        </Button>
        <Button
          sx={{
            "&:hover": { scale: "1.1" },
            transition: "1200ms",
            color: "#fff",
            fontWeight: "600",
            scale: { xs: "0.7", md: "1" },
          }}
          type="button"
        >
          <Link
            target="_blank"
            href="#services"
            style={{ width: "100% !important" }}
          >
            <a
              target="_blank"
              href="#services"
              style={{ width: "100% !important" }}
            >
              Our Services
            </a>
          </Link>
        </Button>
        <Button
          sx={{
            "&:hover": { scale: "1.1" },
            transition: "1200ms",
            color: "#fff",
            fontWeight: "600",
            scale: { xs: "0.7", md: "1" },
          }}
          type="button"
        >
          <Link
            target="_blank"
            href="#portfolio"
            style={{ width: "100% !important" }}
          >
            <a
              target="_blank"
              href="#portfolio"
              style={{ width: "100% !important" }}
            >
              Portfolio
            </a>
          </Link>
        </Button>
        <Button
          sx={{
            "&:hover": { scale: "1.1" },
            transition: "1200ms",
            color: "#fff",
            fontWeight: "600",
            scale: { xs: "0.7", md: "1" },
          }}
          type="button"
        >
          <Link
            target="_blank"
            href="#about"
            style={{ width: "100% !important" }}
          >
            <a
              target="_blank"
              href="#about"
              style={{ width: "100% !important" }}
            >
              About Us
            </a>
          </Link>
        </Button>

        <Button
          // className="button-48"
          sx={{
            "&:hover": { scale: "1.1" },
            transition: "1200ms",
            color: "#fff",
            fontWeight: "600",
            scale: { xs: "0.7", md: "1" },
          }}
        >
          <div class="container">
            <Link target="_blank" href="#contact">
              <a target="_blank" href="#contact" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">GET IN TOUCH</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
              </a>
            </Link>
          </div>
        </Button>
      </Box>
    </Box>
  );
};
