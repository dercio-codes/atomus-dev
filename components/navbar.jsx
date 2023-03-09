import { Box, Typography, Button } from "@mui/material";

export const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        background: "#8da9e4ff",
      }}
    >
      <Box
        sx={{
          height: "150px",
          width: "150px",
          backgroundImage: 'url("/logo_transparent.png")',
          backgroundSize: "contain",
        }}
      />
      <Button
        sx={{ color: "#fff", fontWeight: "600", scale: { xs: "0.7", md: "1" } }}
      >
        {" "}
        Home{" "}
      </Button>
      <Button
        sx={{ color: "#fff", fontWeight: "600", scale: { xs: "0.7", md: "1" } }}
      >
        {" "}
        About{" "}
      </Button>
      <Button
        sx={{ color: "#fff", fontWeight: "600", scale: { xs: "0.7", md: "1" } }}
      >
        {" "}
        Projects{" "}
      </Button>
      <Button
        sx={{ color: "#fff", fontWeight: "600", scale: { xs: "0.7", md: "1" } }}
      >
        {" "}
        Contact{" "}
      </Button>
    </Box>
  );
};
