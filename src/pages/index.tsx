import { Typography, Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Typography variant="h1">Hello</Typography>
      <Button variant="contained" href="signin">Sign In</Button>
    </Box>
  );
}
