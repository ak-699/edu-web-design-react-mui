const overrides = (theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: "#333",
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
});

export default overrides;
