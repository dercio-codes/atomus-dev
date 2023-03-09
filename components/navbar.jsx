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
      <Button sx={{ color: "#fff", fontWeight: "600" }}> Home </Button>
      <Button sx={{ color: "#fff", fontWeight: "600" }}> About </Button>
      <Button sx={{ color: "#fff", fontWeight: "600" }}> Projects </Button>
      <Button sx={{ color: "#fff", fontWeight: "600" }}> Contact </Button>
    </Box>
  );
};
