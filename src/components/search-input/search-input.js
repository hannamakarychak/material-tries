import { TextField } from "@mui/material";

const SearchInput = ({ onChange }) => {
  return <TextField type="search" onChange={(e) => onChange(e.target.value)} />;
};

export default SearchInput;
