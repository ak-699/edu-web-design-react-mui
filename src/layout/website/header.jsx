import {
  Box,
  Button,
  Link,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const theme = useTheme();
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: "96%",
          m: "20px auto",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "100px",
          bgcolor: "white",
        }}
      >
        <Toolbar>
          <Box>
            <Typography
              variant="h6"
              color={"black"}
            >
              LOGO
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }} />
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
              "& .MuiButton-root": {
                "& .MuiLink-root": {
                  color: theme.palette.pink.main,
                },

                "&:hover .MuiLink-root": { color: theme.palette.violet.main },
              },
            }}
          >
            <Button>
              <Link href="#home">Home</Link>
            </Button>
            <Button>
              <Link href="#about">About</Link>
            </Button>
            <Button>
              <Link href="#teacher">Teacher</Link>
            </Button>
            <Button>
              <Link href="#course">Course</Link>
            </Button>
            <Button>
              <Link href="#review">Review</Link>
            </Button>
            <Button>
              <Link href="#contact">Contact</Link>
            </Button>
          </Stack>

          <IconButton
            sx={{
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
