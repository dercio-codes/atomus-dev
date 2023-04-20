import { Box, Typography, Grid } from "@mui/material";

export const Portfolio = () => {
  return (
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
  );
};
