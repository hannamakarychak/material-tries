import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CharacterCard from "../character-card/character-card";
import { getAllCharacters } from "../../services";

const List = ({ searchQuery, selectedGenders }) => {
  const [characters, setCharacters] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCharacters([]);
    setCurrentPage(1);
  }, [searchQuery, selectedGenders]); // here we clean up prev results so that we do not render all currentCharacters plus what matches query but get only those results that match search query and we start with the first page

  useEffect(() => {
    const fetchAllCharacters = async () => {
      setIsLoading(true);

      try {
        if (selectedGenders.length === 0) {
          const { results } = await getAllCharacters(currentPage, searchQuery); // json that is being returned from getAllCharacters needs to be resolved, so we add 'await' before calling
          setCharacters((currentCharacters) => [...currentCharacters, ...results]); // we set new characters with a callback so that the state is always updated and there is no need to add characters to array of dependencies
        } else {
          // for await (const gender of selectedGenders) {
          //   const { results } = await getAllCharacters(currentPage, searchQuery, gender);
          //   setCharacters((currentCharacters) => [...currentCharacters, ...results]);
          // }
          const promises = selectedGenders.map((gender) =>
            getAllCharacters(currentPage, searchQuery, gender)
          );

          console.log(promises);
          const allResults = await Promise.all(promises); // await is used before promises when it needs to be resolved
          const results = allResults.map(({ results }) => results).flat();
          setCharacters((currentCharacters) => [...currentCharacters, ...results]);
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false); // we do it here not to write additionally in error catching setIsLoading(false)
    };
    // we fetch in useEffect so that data fetching does not happen with every re-render
    fetchAllCharacters();
  }, [currentPage, searchQuery, selectedGenders]);

  if (isError) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>Ooops, something went wrong</Box>
    );
  }

  if (isLoading && currentPage === 1) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (characters.length === 0) {
    return <Box sx={{ paddingTop: "24px" }}>No results</Box>;
  }

  return (
    <Box sx={{ paddingTop: "24px" }}>
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
      <Box sx={{ textAlign: "center", margin: "24px 0" }}>
        <LoadingButton
          loading={isLoading}
          variant="outlined"
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        >
          load more
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default List;
