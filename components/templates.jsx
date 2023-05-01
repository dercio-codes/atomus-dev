import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export const Templates = () => {
  return (
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
            <Link href="https://ecommerce-template-0.vercel.app/">
              Visit Template.
            </Link>
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
            <Link href="https://promoter-template.vercel.app/">
              Visit Template.
            </Link>
          </Typography>
        </Box>
      </Marquee>
    </Box>
  );
};
