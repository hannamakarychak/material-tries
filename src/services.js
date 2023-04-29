const BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async (page = 1) => {
  const result = await fetch(`${BASE_URL}/character?page=${page}`); //this is taken from API docs
  const response = await result.json();
  // console.log(response)
  return response;
};
