export const getAllCharacters = async () => {
  const result = await fetch("https://rickandmortyapi.com/api/character");
  const response = await result.json();
  // console.log(response)
  return response;
};
