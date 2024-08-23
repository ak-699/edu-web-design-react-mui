import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
function Header() {
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: "90%",
          m: "20px auto",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "100px",
        }}
      >
        <Toolbar>
          <Typography variant="h6">header</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
