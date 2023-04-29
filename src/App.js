import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import ButtonAppBar from "./components/button-app-bar/button-app-bar";
import List from "./components/list/list";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        style: {
          fontSize: 14,
        },
      },
      variants: [
        // here we say that for prop variant that equals body2 we add the following styles. Card component is later wrapped in ThemeProvider and theme as props
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 14,
          },
        },
      ],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Container sx={{ marginY: 6 }}>
        <List />
      </Container>
    </ThemeProvider>
  );
}

export default App;
