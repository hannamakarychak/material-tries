import { useEffect, useState } from "react";
import { getAllCharacters } from "../../services";
import { Box, CircularProgress, Grid } from "@mui/material";
import CharacterCard from "../character-card/character-card";

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // we fetch in useEffect so that data fetching does not happen with every re-render
    const fetchAllCharacters = async () => {
      try {
        const { results } = await getAllCharacters(); // json that is being returned from getAllCharacters needs to be resolved, so we add 'await' before calling
        setCharacters(results);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false); // we do it here not to write additionally in error catching setIsLoading(false)
    };
    fetchAllCharacters();
  }, []);

  console.log(characters);

  if (isError) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>Ooops, something went wrong</Box>
    );
  }

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {characters.map((item) => {
        console.log(isLoading);
        return (
          <Grid item xs={3} key={item.id}>
            <CharacterCard
              name={item.name}
              id={item.id}
              species={item.species}
              img={item.image}
              location={item.location.name}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default List;
