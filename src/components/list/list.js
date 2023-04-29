import { useEffect, useState } from "react";
import { getAllCharacters } from "../../services";
import { Box, CircularProgress, Grid } from "@mui/material";

import CharacterCard from "../character-card/character-card";
import { LoadingButton } from "@mui/lab";

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // we fetch in useEffect so that data fetching does not happen with every re-render
    const fetchAllCharacters = async () => {
      try {
        const { results } = await getAllCharacters(currentPage); // json that is being returned from getAllCharacters needs to be resolved, so we add 'await' before calling
        setCharacters((currentCharacters) => [...currentCharacters, ...results]); // we set new characters with a callback so that the state is always updated and there is no need to add characters to array of dependencies
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false); // we do it here not to write additionally in error catching setIsLoading(false)
    };

    fetchAllCharacters();
  }, [currentPage]);

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
    <div>
      <Grid container spacing={3}>
        {characters.map((item) => {
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
      <LoadingButton variant="outlined" onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
        load more
      </LoadingButton>
    </div>
  );
};

export default List;
