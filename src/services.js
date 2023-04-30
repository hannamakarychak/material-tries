const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async (page = 1, searchQuery = "") => {
  const result = await fetch(`${BASE_URL}/character?page=${page}&name=${searchQuery}`); //this is taken from API docs
  const response = await result.json();
  if (response.error) {
    return {
      results: [],
      info: {
        pages: 0,
      },
    };
  }
  console.log({ response });
  return response;
};
