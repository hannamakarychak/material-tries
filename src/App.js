import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import ButtonAppBar from "./components/button-app-bar/button-app-bar";
import Filters from "./components/filters/filters";
import List from "./components/list/list";
import SearchInput from "./components/search-input/search-input";

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

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenders, setSelectedGenders] = useState([]);

  console.log({ selectedGenders });

  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Container sx={{ marginY: 6 }}>
        <SearchInput onChange={setSearchQuery} />
        <Filters selectedValues={selectedGenders} onSelect={setSelectedGenders} />
        <List searchQuery={searchQuery} selectedGenders={selectedGenders} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
